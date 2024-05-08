import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { getAllUsers } from '../../services/userService';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils';
import './UserManage.scss';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    //viết hàm lấy tất cả user
    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode == 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }


    render() {
        let language = this.props.language;
        let { arrUsers } = this.state;
        return (
            <React.Fragment>
                <div className="text-center">Manage users</div>
                <div className="users-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>

                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    // console.log('eric check map', item, index)
                                    return (
                                        <tr>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button
                                                    className="btn-edit"
                                                    onClick={() => this.handleEditUser(item)}
                                                >
                                                    <i className="fas fa-pencil-alt"></i>
                                                </button>
                                                <button
                                                    className="btn-delete"
                                                    onClick={() => this.handleDeleteUser(item)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
