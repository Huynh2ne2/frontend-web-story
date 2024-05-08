import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils';
import { changePasswordVerifyEmail } from '../../services/userService';
import './VerifyEmail.scss';

class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 0
        }
    }

    async componentDidMount() {
        console.log('huynh check prop: ', this.props)
        if (this.props.location && this.props.location.search) {
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            // let userId = urlParams.get('userId');

            let res = await changePasswordVerifyEmail({
                token: token,
                // userId: userId
            });
            console.log('Huynh check res: ', res)

            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })
            }
        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

    }
    handleChangePassword = () => {
        if (this.props.history) {
            return this.props.history.push('/changepassword')
        }
    }


    render() {
        let { statusVerify, errCode } = this.state;
        return (
            <div >
                <div className='verify-email-container'>
                    {/* <div className='infor-booking'
                        style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}

                    ></div> */}
                    {statusVerify === false ?
                        <div>Loading data...</div>
                        :
                        <div>
                            {errCode === 0 ?
                                <div className='infor'>Thay đổi password thành công!</div>
                                :
                                <div className='infor'>Email đã được xác nhận!</div>
                            }
                        </div>
                    }
                </div>
            </div>

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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
