import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class CartPage extends Component {

    render() {

        return (
            <React.Fragment>
                <div className='title' >
                    Welcome to Cart
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

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
