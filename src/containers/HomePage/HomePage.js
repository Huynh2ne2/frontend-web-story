import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomePage.scss';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,//vô hạn
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            // slickGoTo: this.handleAfterChange
        };

        return (
            <React.Fragment>
                <HomeHeader
                    settings={settings}
                />
                <Footer />
                <div style={{ height: '500px' }}>

                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
