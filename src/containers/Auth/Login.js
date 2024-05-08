import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { userLoginSuccess } from '../../store/actions/userActions';
// import userActions from "../../store/actions/userActions";
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';
import Validation from '../Auth/Validation';

class Login extends Component {
    constructor(props) {//đây là một hàm tạo (constructor)
        super(props);//khi khai báo như thế này thì khi có đường truyền props xuống thì nó sẽ chạy được
        //cần khai báo
        //props
        this.state = {
            values: {
                email: '',
                password: '',
            },
            errors: {},
            isShowPassword: false,
            errMessage: ''
        }
    }
    // handleOnChangeUsername = (event) => {
    //     this.setState({
    //         username: event.target.value,
    //     })
    //     console.log(event.target.value)
    // }
    // handleOnChangePassword = (event) => {
    //     this.setState({
    //         password: event.target.value,
    //     })
    //     console.log(event.target.value)
    // }
    OnChangeInput = (event, id) => {
        this.setState({
            values: {
                ...this.state.values,
                [id]: event.target.value
            }
        });
    }
    handleKeyDown = (event) => {
        // console.log('huynh check key down: ', event);
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.handleLogin();
        }
    }
    handleLogin = async () => {
        // alert('Welcome Huynh!')
        // console.log('Username: ' +this.state.username)
        // console.log('Password: ' +this.state.password)
        // console.log('Username: ' ,this.state.username, 'password: ', this.state.password)
        // console.log('all state ', this.state)
        //tìm mã lỗi
        this.setState({
            errMessage: ''
        })
        try {
            const validation = new Validation();
            const errors = validation.render(this.state.values);
            console.log('Huynh check errors ', errors)
            console.log('Huynh check errors ', Object.keys(errors).length)

            let data = await handleLoginApi(this.state.values.email, this.state.values.password);
            if (Object.keys(errors).length === 3) {
                if (data && data.errCode !== 0) {
                    this.setState({
                        errMessage: data.message
                    })
                }
                if (data && data.errCode === 0) {
                    this.props.userLoginSuccess(data.user)
                    console.log('Login succeed!!!');
                }
            }

        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            console.log('Huynh check err.response: ', error.response)
        }
    }

    hanldeShowHidePassWord = () => {
        //chỉnh lại
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    renderRegister = () => {
        if (this.props.history) {
            return this.props.history.push('/register')
        }
    }
    handleValidateForm = (event) => {
        event.preventDefault();
        const validation = new Validation();
        const errors = validation.render(this.state.values); // Pass the form values for validation
        this.setState({ errors }); // Update the errors in the state
    }
    handleForgotPass = () => {
        if (this.props.history) {
            return this.props.history.push('/changepassword')

        }
    }

    //khi component trước khi render thì nó sẽ chạy trong hàm tạo
    render() {
        //JSX
        let { email, password } = this.state.values;
        let { errors } = this.state;
        console.log('Huynh check state: ', this.state)
        console.log('Huynh check prop: isLoggedIn ', this.props.isLoggedIn)
        return (
            <div className="login-background">
                <div className="login-container">
                    <form
                        onSubmit={(event) => this.handleValidateForm(event)}
                    >
                        <div className="login-content row">
                            <div className="col-12 text-login">Login</div>
                            <div className="col-12 form-group login-input">
                                <label>Email</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Enter your username"
                                    //cần đưa giá trị state vào
                                    value={email}//nó chỉ hiển thị chứ không cho thay đổi, cần thêm một sự kiện
                                    onChange={(event) => this.OnChangeInput(event, 'email')}
                                />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            </div>
                            <div className="col-12 form-group login-input">
                                <label>Password</label>
                                <div className="custom-input-password">
                                    <input
                                        type={this.state.isShowPassword ? 'text' : 'password'}
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(event) => this.OnChangeInput(event, 'password')}
                                    />
                                    <span
                                        onClick={() => this.hanldeShowHidePassWord()}
                                    >
                                        <i class={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                    </span>

                                </div>
                            </div>
                            <div className='col-12' style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            <div className="col-12 ">
                                <button
                                    className="btn-login"
                                    onClick={() => this.handleLogin()}
                                >LOGIN</button>
                            </div>
                            <div className="col-6">
                                <span
                                    style={{ cursor: 'pointer' }}
                                    className="forgot-password"
                                    onClick={() => this.handleForgotPass()}
                                >Forgot your password?</span>
                            </div>
                            <div className="col-6 text-center mt-3"
                                onClick={() => this.renderRegister()}
                                style={{ cursor: 'pointer' }}
                            >
                                <span className="text-other-login">Do you have account?</span>
                            </div>
                            <div className="col-12 social-login">
                                <i className="fab fa-google-plus-g google"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                                <i className="fab fa-instagram instagram"></i>
                                <i class="fab fa-twitter twitter"></i>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
