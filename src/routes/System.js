import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import ProductManage from '../containers/System/ProductManage';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';
import UserRedux from '../containers/System/Admin/UserRedux';
import Header from '../containers/Header/Header';
import ManageStory from '../containers/System/Admin/ManageStory';
import StoryRedux from '../containers/System/Admin/StoryRedux';
import HomePage from '../containers/HomePage/HomePage';
import ManageRecord from '../containers/System/Admin/ManageRecord';

class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {/* {isLoggedIn && <Header />} */}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            {/* CRUD user by redux */}
                            <Route path="/system/user-redux" component={UserRedux} />
                            <Route path="/system/story-redux" component={StoryRedux} />
                            <Route path="/system/manage-story" component={ManageStory} />
                            <Route path="/system/record-manage" component={ManageRecord}/>

                            <Route path="/home" component={HomePage} />
                            <Route path="/system/product-manage" component={ProductManage} />
                            <Route path="/system/register-package-group-or-account" component={RegisterPackageGroupOrAcc} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
