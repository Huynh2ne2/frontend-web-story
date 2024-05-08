import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'

import Home from '../routes/Home';
// import Login from '../routes/Login';
import Login from './Auth/Login';
import Header from './Header/Header';
import System from '../routes/System';

import { CustomToastCloseButton } from '../components/CustomToast';
import ConfirmModal from '../components/ConfirmModal';
import HomePage from './HomePage/HomePage';
import CartPage from './HomePage/CartPage';
import Story_ByCategory_HD from './HomePage/Story_ByCategory_HD';
import CustomScrollbars from '../components/CustomScrollbars';
import Story_Content from './HomePage/Story_Content';
import DemoManga from './HomePage/DemoManga';
import NgaoTheDanThan from './HomePage/NgaoTheDanThan';
import DiuDangTanXuong from './HomePage/DiuDangTanXuong';
import LinhVuThienHa from './HomePage/LinhVuThienHa';
import HayNhamMatKhiAnhDen from './HomePage/HayNhamMatKhiAnhDen';
import KhomLung from './HomePage/KhomLung';
import DeVuongSungAi from './HomePage/DeVuongSungAi';
import { Bounce, ToastContainer } from 'react-toastify';
import Register from './Auth/Register';
import Regular from './HomePage/Regular';
import VerifyEmail from './Auth/VerifyEmail';
import ChangePassWord from './Auth/ChangePassWord';
import ViewAuThor from './HomePage/ViewAuThor';


class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        <ConfirmModal />
                        {this.props.isLoggedIn && <Header />}

                        <div className="content-container">
                            <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.REGISTER} component={(Register)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    <Route path={path.HOMEPAGE} component={HomePage} />
                                    <Route path={path.CART_PAGE} component={CartPage} />
                                    <Route path={path.DEMO_MANGA} component={DemoManga}></Route>
                                    <Route path={path.TP_NGAO_THE_DAN_THAN} component={NgaoTheDanThan}></Route>

                                    <Route path={path.DIU_DANG_TAN_XUONG} component={DiuDangTanXuong}></Route>
                                    <Route path={path.LINH_VU_THIEN_HA} component={LinhVuThienHa}></Route>
                                    <Route path={path.HAY_NHAM_MAT_KHI_ANH_DEN} component={HayNhamMatKhiAnhDen}></Route>
                                    <Route path={path.KHOM_LUNG} component={KhomLung}></Route>
                                    <Route path={path.DE_VUONG_SUNG_AI} component={DeVuongSungAi}></Route>

                                    <Route path={path.List_Story_ByCategory} component={Story_ByCategory_HD} />
                                    <Route path={path.Load_Content_By_Story} component={Story_Content} />
                                    <Route path={path.REGULAR} component={Regular} />
                                    <Route path={path.Verify_email} component={VerifyEmail} />
                                    <Route path={path.ChangePassWord} component={ChangePassWord} />
                                    <Route path={path.ViewAuThor} component={ViewAuThor} />

                                </Switch>
                            </CustomScrollbars>
                        </div>


                        <ToastContainer
                            position="bottom-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition={Bounce}
                        />
                        {/* <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        /> */}
                    </div>
                </Router>
            </Fragment>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         started: state.app.started,
//         isLoggedIn: state.user.isLoggedIn
//     };
// };
const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};


const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);