import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils';
import './ViewAuThor.scss';
import { getAllAuthor } from '../../services/userService';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';


class DefaultClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: [],
            isFollowed: false
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            if (id) {
                let res = await getAllAuthor(id);
                if (res && res.errCode === 0) {
                    this.setState({
                        author: res.data
                    })
                }
                console.log('Huynh check res: ', res)
            }
        }



    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

    }

    redirectToContent = (item) => {
        console.log('huynh check redirectToContent item : ', item)
        this.props.history.push(`/content-by-storyId/${item}`)

    }

    hanldeFollowed = () => {
        //chỉnh lại
        this.setState({
            isFollowed: !this.state.isFollowed
        })
    }
    handleCategoryClick = (story) => {

        this.props.history.push(`/stories-by-category/${story}`)

    }
    render() {

        console.log('Huynh check state: ', this.state)
        let { author } = this.state;
        console.log('Huynh check author: ', author.authorData)

        return (
            <>
                <div className='title'>
                    View author
                </div >

                <div className='tent'
                >
                    <div className='left'
                    >
                        <div
                            className='infor-author'
                        >
                            <div className='bg-author'
                                style={{ backgroundImage: `url(${author.image})` }}

                            >

                            </div>

                            <button
                                className='btn btn-primary d-block mx-auto'
                                onClick={() => this.hanldeFollowed()}
                            >
                                {this.state.isFollowed === false ?
                                    <>
                                        <i class="fas fa-user-plus" style={{ color: '#63E6BE' }}></i> &nbsp;&nbsp;Theo dõi
                                    </>

                                    :
                                    <>
                                        <i class="fas fa-user-check" style={{ color: '#63E6BE' }}></i>&nbsp;&nbsp;Đang theo dõi
                                    </>

                                }
                            </button>





                        </div>


                    </div>
                    <div className='right'
                    >

                        <center>
                            <span className='infor'
                                style={{ textAlign: 'center', color: 'black' }}
                            >
                                {author.firstName}
                            </span>
                        </center>
                        <span>
                            <i class="fas fa-book" style={{ color: 'orange' }}></i>&nbsp;&nbsp;Biệt danh:  {author.firstName}
                        </span><br />
                        <span

                        >


                            <i class="fas fa-phone"></i>&nbsp;&nbsp;{author.phoneNumber}<br />
                        </span>
                        <br />
                        <span>
                            <i class="fas fa-map-marker"
                                style={{ color: '#63E6BE' }}></i>&nbsp;&nbsp;{author.address}<br />
                        </span>

                        {/* <span>
                            {author.authorData && author.authorData.length > 0 && (
                                <>
                                    <strong>Thể loại:</strong>{" "}
                                    {[...new Set(author.authorData.map(item => item.categoryData.categoryName))].map((category, index) => {
                                        console.log('Category:', category); // Thêm log ở đây
                                        return (
                                            <span key={index}>
                                                {index > 0 && ", "}
                                                {category}
                                            </span>
                                        )
                                    })}
                                </>
                            )}
                        </span> */}
                        <span>
                            {author.authorData && author.authorData.length > 0 && (
                                <>
                                    <strong>Thể loại:</strong>{" "}
                                    {[...new Set(author.authorData.map(item => `${item.categoryData.id}_${item.categoryData.categoryName}`))].map((category, index) => {
                                        const [id, name] = category.split('_');
                                        console.log('Category:', category); // Thêm log ở đây

                                        return (
                                            <a
                                                href='#'
                                                key={index} onClick={() => this.handleCategoryClick(id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {index > 0 && ", "}
                                                {name}
                                            </a>
                                        )
                                    })}
                                </>
                            )}
                        </span>





                    </div>
                </div >



                {/* Thông tin story */}
                < div className='section-share section-outstanding-doctor' >
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>
                                Tác phẩm nổi bật
                            </span>
                            <button className='btn-section'>
                                <FormattedMessage id="homepage.more-info" />
                            </button>
                        </div>
                        <div className='section-body'>
                            <Slider
                                dots={false}
                                infinite={false}
                                speed={500}
                                slidesToShow={4}
                                slidesToScroll={4}
                            >
                                {author.authorData && author.authorData.length > 0 && author.authorData.map((item, index) => {
                                    return (
                                        <div className='section-customize'
                                            key={index}

                                        >
                                            <div className='customize-border' onClick={() => this.redirectToContent(item.id)}>

                                                <div className='outer-bg'>
                                                    <div className='bg-image section-outstanding-doctor'
                                                        style={{ backgroundImage: `url(${item.img})` }}

                                                    ></div>
                                                </div>
                                                <div className='position text-center'>
                                                    <div>
                                                        {item.storyName}
                                                    </div>



                                                </div>
                                            </div>

                                        </div>

                                    )

                                })
                                }


                            </Slider>
                        </div>
                    </div>
                </ div >



                <Footer />

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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);
