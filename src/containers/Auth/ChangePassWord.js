import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils';
import { changepassword } from '../../services/userService';
import { toast } from "react-toastify";

class ChangePassWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                toast.info('Missing input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid
    }

    async componentDidMount() {

        let res = await changepassword({
            email: this.state.email,
            password: this.state.password
        })
        console.log('huynh check res: ', res)
        if (res && res.errCode === 0) {
            toast.success("Verify email !");
        } else {
            toast.error("Error send verify email.");

        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handlechangpass = async () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) {
            return;
        } else {
            let res = await changepassword({
                email: this.state.email,
                password: this.state.password
            })
            console.log('huynh check res: ', res)
            if (res && res.errCode === 0) {
                toast.success("Verify email !");
            } else {
                toast.error("Error send verify email.");

            }
        }


        // console.log('Huynh check changepassword: ', res)
    }


    OnChangInput = (event, id) => {
        this.setState({
            ...this.state,
            [id]: event.target.value
        });
    }





    render() {
        let { email, password } = this.state;
        console.log('Huynh check state: ', this.state)

        return (
            <div>
                <h2 className='title'
                    style={{ color: 'blue' }}
                >
                    Thay đổi password
                </h2>
                <div
                    className="col-6 mx-auto mt-4"
                >
                    <label>Nhập email đã đăng nhập</label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Nhập email....'
                        value={email}
                        onChange={(event) => this.OnChangInput(event, "email")}

                    //onChange={(event) => this.OnChangInput(event, 'email')}
                    />
                    <label>Nhập mật khẩu mới</label>
                    <input
                        className='form-control'

                        type='password'
                        value={password}
                        onChange={(event) => this.OnChangInput(event, "password")}
                    />
                    <button className="btn btn-success d-block mx-auto"
                        style={{ margin: '6px' }}
                        onClick={() => this.handlechangpass()}
                    >
                        Thay đổi pass
                    </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassWord);
