import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminmenu, authormenu } from './menuApp';
import './Header.scss';
import _ from 'lodash';
import { LANGUAGES, USER_ROLE } from '../../utils';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuApp: [],
        }
    }

    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }

    componentDidMount() {
        let { userInfo } = this.props;
        console.log('Check userInfo props: ', this.props.userInfo)
        let menu = [];
        if (userInfo && !_.isEmpty(userInfo)) {
            let role = userInfo.roleId;
            console.log('Check role: ', role);
            if (role === USER_ROLE.ADMIN) {
                menu = adminmenu;
            }

            if (role === USER_ROLE.AUTHOR) {
                menu = authormenu;
            }
            if (role === USER_ROLE.VIEWER) {
                this.props.history.push(`/home`)
            }
        }
        this.setState({
            menuApp: menu
        })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userInfo !== this.props.userInfo) {
            this.setState({
                menuApp: this.props.userInfo
            })
        }
    }

    render() {
        const { processLogout, language, userInfo } = this.props;
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    {/* <Navigator menus={adminmenu} /> */}
                    <Navigator menus={this.state.menuApp} />
                </div>

                <div className='languages'>
                    <span className='welcome'>
                        <FormattedMessage id="homeheader.welcome" />
                        {userInfo && userInfo.firstName ? userInfo.firstName : ''}!
                    </span>
                    <span className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}

                        onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
                    // onClick={(language) => this.componentDidUpdate(LANGUAGES.VI)}
                    >VN</span>
                    <span className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}

                        onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
                    // onClick={(language) => this.componentDidUpdate(LANGUAGES.EN)}
                    >EN</span>
                    <div className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>

                </div>


                {/* nút logout */}

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
