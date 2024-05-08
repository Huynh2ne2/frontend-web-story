import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils';
import './Regular.scss';
import gif from '../../assets/images/img_homeheader/1f4d1ab9f879f84324f235e2be364e92.gif';



class Regular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false

        }
    }

    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

    }

    handleClickRegular = () => {
        let { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        })
    }


    render() {

        return (
            <>

                <span className='title-regular'
                >
                    <FormattedMessage id="footer.regulations" />
                </span>
                <div className='container-regular'>
                    <div className='introduce'
                        style={{ float: 'left' }}
                    >
                        <img
                            src={gif} width={'200px'} height={'200px'}

                        />
                        <button className='btn btn-success'
                            onClick={() => this.handleClickRegular()}
                        >
                            Đọc kỹ nhá!
                        </button>
                    </div>


                    {this.state.isOpen === true &&
                        <div className='regular'
                            style={{ float: 'right' }}
                        >
                            <span className='content'
                                style={{ userSelect: 'none' }}
                            >
                                <ul>
                                    <li>
                                        Mọi thành viên có quyền đăng truyện do mình sáng tác hoặc dịch từ các ngôn ngữ khác.
                                    </li>
                                    <li>
                                        Nghiêm cấm các truyện vi phạm  quyền riêng tư của Người dùng khác hoặc bên thứ ba, xúc phạm, chứa đựng các mối đe dọa
                                    </li>

                                    <li>
                                        Phải có thông tin cụ thể về nguồn và cách trích dẫn có thể là link
                                    </li>
                                </ul>
                            </span>
                        </div>

                    }
                </div>


            </>


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

export default connect(mapStateToProps, mapDispatchToProps)(Regular);
