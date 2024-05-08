import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';


import { withRouter } from 'react-router';
import * as actions from '../../store/actions';
import { getAllStoriesByCategory } from '../../services/userService';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';


class Footer extends Component {

    componentDidMount() {

    }
    redirectToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    redirectToRegular = () => {
        if (this.props.history) {
            this.props.history.push(`/regular`)
        }
    }

    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                {/* Phần footer */}
                <div div className='footer' >
                    <div className='footer-left'>
                        <h2><FormattedMessage id="footer.general-information"></FormattedMessage></h2>
                        <ul>
                            <li><a onClick={() => this.redirectToHome()}><FormattedMessage id="footer.home-page"></FormattedMessage></a></li>
                            <li><a ><FormattedMessage id="footer.introduce"></FormattedMessage></a></li>
                            <li>
                                <a
                                    onClick={() => this.redirectToRegular()}
                                >
                                    <FormattedMessage id="footer.regulations"></FormattedMessage>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-center'>
                        <h2><FormattedMessage id="footer.address"></FormattedMessage></h2>
                        <ul>
                            <ul type="circle">
                                <li><FormattedMessage id="footer.csc"></FormattedMessage> </li>
                                <li><FormattedMessage id="footer.cn1"></FormattedMessage></li>
                                <li><FormattedMessage id="footer.cn2"></FormattedMessage></li>
                            </ul>
                        </ul>
                    </div>
                    <div className='footer-right'>
                        <h2><FormattedMessage id="footer.follow-us"></FormattedMessage></h2>
                        <ul class="social">
                            <li>
                                <i class="fab fa-facebook"></i>
                                <a href='https://www.facebook.com/profile.php?id=100089701124800' target='_blank'>
                                    Facebook
                                </a>
                            </li>
                            <li><i class="fab fa-twitter-square"></i> Twitter</li>
                            <li><i class="fab fa-instagram"></i> Instagram</li>
                        </ul>
                    </div>
                </div >
            </React.Fragment>

        );
    }

}


const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));
