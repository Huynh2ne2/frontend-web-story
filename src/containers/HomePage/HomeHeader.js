import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import bg from '../../assets/images/img_homeheader/bg_1.jpg';
import ngao_the_dan_than from '../../assets/images/img_homeheader/Ngao_The_Dan_Than.jpg';
import co_mot_ke_lang_thang from '../../assets/images/img_homeheader/co_mot_ke_lang_thang.jpg';
import diu_dang_tan_xuong from '../../assets/images/img_homeheader/diu-dang-tan-xuong.jpg';
import linh_vu_thien_ha from '../../assets/images/img_homeheader/linh_vu_thien_ha.jpg';
import hay_nham_mat_khi_anh_den from '../../assets/images/img_homeheader/nham-mat-khi-anh-den.jpg';
import khom_lung from '../../assets/images/img_homeheader/khom-lung.jpg';
import de_vuong_sung_ai from '../../assets/images/img_homeheader/De_vuong_sung_ai.jpg';


//image-manga-propose
import me_man_vi_em from '../../assets/images/img_manga_propose/me-man-vi-em-min.jpg';
import cong_luoc_trai_tim from '../../assets/images/img_manga_propose/cong_luoc_trai_tim.jpg';
import co_ay_den_xem_concert_cua_toi from '../../assets/images/img_manga_propose/co_ay_den_xem_concert_cua_toi.png';
import cay_kho_gap_xuan_ve from '../../assets/images/img_manga_propose/cay-kho-gap-xuan-ve.jpg';
import tue_tue_an from '../../assets/images/img_manga_propose/tue_tue_an.jpg';
import em_nghe_thay_duoc from '../../assets/images/img_manga_propose/em_nghe_thay_duoc.png';
import hon_uoc_keo_ngot from '../../assets/images/img_manga_propose/hon-uoc-keo-ngot.jpg';
import chim_hoang_yen_nuoi_tam_nam_da_bay_di from '../../assets/images/img_manga_propose/chim_hoang_yen_nuoi_tam_nam_da_bay_di.jpg';
import chi_muon_gan_ben_em from '../../assets/images/img_manga_propose/chi_muon_gan_ben_em.webp';
import ban_nang_si_me from '../../assets/images/img_manga_propose/ban-nang-si-me.webp';



import logo from '../../assets/images/img_homeheader/webtoon-logo.png';
import { withRouter } from 'react-router';
import * as actions from '../../store/actions';
import { getAllStoriesByCategory } from '../../services/userService';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/img_homeheader/bg_2.jpg';
import img2 from '../../assets/images/img_homeheader/bg_1.jpg';
import img3 from '../../assets/images/img_homeheader/bg_3.png';
import img4 from '../../assets/images/img_homeheader/bg4.jpg';
import img5 from '../../assets/images/img_homeheader/anime-background.jpg';
import img6 from '../../assets/images/img_homeheader/bg7.jpg';
import img7 from '../../assets/images/img_homeheader/bg8.jpg';

import { getAllStory } from '../../services/userService';
import Slider from "react-slick";
import _, { debounce } from 'lodash';

class HomeHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listStories: [],
            arrCategories: [],
            isShowBanner: false,
            keyword: '',
            searchResult: []
        }
    }

    async componentDidMount() {
        this.props.loadCategories();
        this.fetchAllStory();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allCategoriesRedux !== this.props.allCategoriesRedux) {
            this.setState({
                arrCategories: this.props.allCategoriesRedux
            })
        }
    }

    fetchAllStory = async () => {
        let res = await getAllStory(10);
        if (res && res.errCode == 0 && res.data) {
            this.setState({
                listStories: res.data
            })
        }
    }

    redirectToCart = () => {
        if (this.props.history) {
            this.props.history.push(`/cart`)
        }
    }

    redirectToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }

    redirectToDemo = () => {
        if (this.props.history) {
            this.props.history.push(`/demo`)
        }
    }

    redirectoManga1 = () => {
        if (this.props.history) {
            this.props.history.push(`/ngao-the-dan-than/chuong-1`)
        }
    }

    redirectoManga2 = () => {
        if (this.props.history) {
            this.props.history.push(`/diu-dang-tan-xuong/chuong-1`)
        }
    }

    redirectoManga3 = () => {
        if (this.props.history) {
            this.props.history.push(`/linh-vu-thien-ha/chuong-1`)
        }
    }
    redirectoManga4 = () => {
        if (this.props.history) {
            this.props.history.push(`/hay-nham-mat-khi-anh-den/chuong-1`)
        }
    }
    redirectoManga5 = () => {
        if (this.props.history) {
            this.props.history.push(`/khom-lung/chuong-1`)
        }
    }
    redirectoManga6 = () => {
        if (this.props.history) {
            this.props.history.push(`/de-vuong-sung-ai/chuong-1`)
        }
    }

    renderLogin = () => {
        if (this.props.history) {
            this.props.history.push(`/login`)
        }
    }

    handleLoadStoriesByCategory = async (category) => {

        this.props.history.push(`/stories-by-category/${category.id}`)

    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    // handleOnchange = (event) => {

    //     this.setState({
    //         keyword: event.target.value
    //     });
    //     //console.log('Huynh check handleOnchange: ', this.state)
    // }

    removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    handleOnsearch = debounce((event) => {

        let term = event.target.value;
        console.log(term)
        let { listStories } = this.state;
        if (term) {
            let clonelistStory = _.cloneDeep(listStories);
            // clonelistStory = clonelistStory.filter(item => item.storyName.toLowerCase().includes(term.toLowerCase()))
            clonelistStory = clonelistStory.filter(item => this.removeAccents(item.storyName).toLowerCase().includes(this.removeAccents(term).toLowerCase()));
            this.setState({
                listStories: clonelistStory
            })
        } else {
            this.fetchAllStory();
        }

    }, 100)

    redirectToContent = async (item) => {
        console.log('huynh check redirectToContent item : ', item)
        this.props.history.push(`/content-by-storyId/${item}`)

    }


    render() {
        let { searchResult, listStories } = this.state
        console.log('Huynh check state: ', this.state)
        let result = this.state.searchResult;
        let language = this.props.language;
        let { arrCategories } = this.state;
        console.log('Check this props : ', this.state);

        return (
            <React.Fragment>
                {/* Phần header */}
                <div className='home-header-container'>
                    <div className='header-left'>
                        <img className='header-logo' src={logo}
                            onClick={() => this.redirectToHome()}
                        />
                    </div>
                    <div className='header-center'>
                        <form>
                            <input
                                className='form-control'
                                placeholder='search story name...'

                                onChange={(event) => this.handleOnsearch(event)}
                            />

                        </form>
                    </div>
                    <div className='header-right'>
                        <div className='cart'
                            onClick={() => this.redirectToCart()}
                        >
                            <i class="fas fa-cart-plus">
                                <span>
                                    <FormattedMessage id="homeheader.cart"></FormattedMessage>
                                </span>
                            </i>
                        </div>
                        <div className='support'>
                            <i class="fas fa-question-circle">
                                <span>
                                    <FormattedMessage id="homeheader.support"></FormattedMessage>
                                </span>
                            </i>
                        </div>
                        {/* <div className='language-vi'>
                            <span>VI</span>
                        </div>
                        <div className='language-en'>
                            <span>EN</span>
                        </div> */}

                        <div class="dropdown">
                            <FormattedMessage id="homeheader.language"></FormattedMessage>
                            <div class="dropdown-content">
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>Vi</span>
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>En</span>
                                <span onClick={() => this.changeLanguage(LANGUAGES.CHINESE)}>Chinese</span>
                            </div>
                        </div>
                        <div className='login'
                            onClick={() => this.renderLogin()}
                        >Login</div>

                    </div>
                </div>
                {/* Phần banner */}
                <div className='home-header-banner'>
                    <Carousel
                        autoPlay={true}
                        dynamicHeight={true}
                        transitionTime={1.5}
                        showStatus={true}
                        showThumbs={false}
                        interval={2000}
                        infiniteLoop={true}
                        style={{
                            position: 'relative'
                        }}
                    >
                        <div>
                            <img src={img1} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={img2} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={img3} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={img4} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={img5} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={img6} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={img7} style={{ width: "1556.2px", height: "600px" }} />
                        </div>

                        {/* Các mục (items) khác của Carousel */}
                    </Carousel>

                    <div className='header-banner-up'>

                    </div>
                    <div className='header-banner-down'
                        style={{ position: 'absolute', bottom: '-1px' }}
                    >
                        <div className='options' >
                            {arrCategories && arrCategories.length > 0
                                && arrCategories.map((item, index) => {
                                    //console.log('Check index, item: ', index, item)
                                    return (
                                        <div className='option-child' key={index}>
                                            <div className='text-child'>
                                                <div key={index}
                                                    onClick={() => this.handleLoadStoriesByCategory(item)}
                                                >
                                                    <span>
                                                        {item.categoryName}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Phần content */}
                <div className='home-container-content'>
                    <div className='title'>
                        <FormattedMessage id="homeheader.list-manga"></FormattedMessage>
                    </div>
                    <div className='list-manga'>
                        <div className='author'>
                            <div className='author-bg'>
                            </div>
                            <div className='detail-author-info'>
                                <div className='detail-info'>
                                    <FormattedMessage id="homeheader.there-is-a-wanderer"></FormattedMessage><br />
                                    <span>
                                        <i class="fas fa-eye"></i>
                                    </span>
                                    <span>&nbsp;
                                        <FormattedMessage id="homeheader.view"></FormattedMessage>
                                    </span><br />

                                    <span>
                                        <i class="fas fa-heart"></i>
                                    </span>
                                    <span>&nbsp;
                                        <FormattedMessage id="homeheader.love"></FormattedMessage>

                                    </span><br />

                                    <FormattedMessage id="homeheader.author"></FormattedMessage>: Anh Lan<br />
                                    <FormattedMessage id="homeheader.expected-date"></FormattedMessage>: <FormattedMessage id="homeheader.updating"></FormattedMessage>


                                </div>
                                <center>

                                    <button type='submit'
                                        onClick={() => this.redirectToDemo()}
                                    >Demo</button>
                                </center>
                            </div>

                        </div>
                        {/* {story.map((item, index) => (
                            <div key={index} style={{ backgroundColor: item.isFound ? 'red' : 'white' }}>
                                {item.name}

                            </div>
                        ))} */}

                        <div className='list-manga-new'>
                            <ul className='post-list-manga-cotainer'>
                                <li className='post-manga'>
                                    <div className='img-manga'>
                                        <div className='bg-manga'
                                            onClick={() => this.redirectoManga1()}
                                        >
                                            <img src={ngao_the_dan_than} width={'100%'} height={'100%'} />
                                        </div>
                                    </div>
                                    <div className='info-manga'>
                                        <div className='name-manga'>
                                            Ngạo thế đan thần
                                            {/* <FormattedMessage id="homeheader.ngao-the-dan-than"></FormattedMessage> */}
                                        </div>
                                        <div className='view-manga'>
                                            <span>
                                                <i class="fas fa-eye"></i>
                                            </span>


                                            <span>&nbsp;<FormattedMessage id="homeheader.view"></FormattedMessage></span>
                                        </div>
                                        <div className='like-manga'>
                                            <span>
                                                <i class="fas fa-heart"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.love"></FormattedMessage></span>
                                        </div>
                                        <div className='category-manga'>
                                            <span><FormattedMessage id="homeheader.genre"></FormattedMessage>: <FormattedMessage id="homeheader.fairy-tale"></FormattedMessage></span>
                                        </div>
                                        <div>
                                            <span><FormattedMessage id="homeheader.status"></FormattedMessage>: full</span>
                                        </div>
                                    </div>
                                </li>
                                <li className='post-manga'>
                                    <div className='img-manga'>
                                        <div className='bg-manga'
                                            onClick={() => this.redirectoManga2()}
                                        >
                                            <img src={diu_dang_tan_xuong} width={'100%'} height={'100%'} />
                                        </div>
                                    </div>
                                    <div className='info-manga'>
                                        <div className='name-manga'><FormattedMessage id="homeheader.diu-dang-tan-xuong"></FormattedMessage></div>
                                        <div className='view-manga'>
                                            <span>
                                                <i class="fas fa-eye"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.view"></FormattedMessage></span>
                                        </div>
                                        <div className='like-manga'>
                                            <span>
                                                <i class="fas fa-heart"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.love"></FormattedMessage></span>
                                        </div>
                                        <div className='category-manga'>
                                            <span><FormattedMessage id="homeheader.genre"></FormattedMessage>: <FormattedMessage id="homeheader.romance"></FormattedMessage></span>
                                        </div>
                                        <div>
                                            <span><FormattedMessage id="homeheader.status"></FormattedMessage>: full</span>
                                        </div>
                                    </div>
                                </li>
                                <li className='post-manga'>
                                    <div className='img-manga'>
                                        <div className='bg-manga'
                                            onClick={() => this.redirectoManga3()}
                                        >

                                            <img src={linh_vu_thien_ha} width={'100%'} height={'100%'} />

                                        </div>
                                    </div>
                                    <div className='info-manga'>
                                        <div className='name-manga'><FormattedMessage id="homeheader.linh-vu-thien-ha"></FormattedMessage></div>
                                        <div className='view-manga'>
                                            <span>
                                                <i class="fas fa-eye"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.view"></FormattedMessage></span>
                                        </div>
                                        <div className='like-manga'>
                                            <span>
                                                <i class="fas fa-heart"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.love"></FormattedMessage></span>
                                        </div>
                                        <div className='category-manga'>
                                            <span><FormattedMessage id="homeheader.genre"></FormattedMessage>: <FormattedMessage id="homeheader.through-space"></FormattedMessage>, <FormattedMessage id="homeheader.fairy-tale"></FormattedMessage>, Dị giới, Huyền Huyễn</span>
                                        </div>
                                        <div>
                                            <span><FormattedMessage id="homeheader.status"></FormattedMessage>: Full</span>
                                        </div>
                                    </div>
                                </li>
                                <li className='post-manga'>
                                    <div className='img-manga'>
                                        <div className='bg-manga'
                                            onClick={() => this.redirectoManga4()}
                                        >

                                            <img src={hay_nham_mat_khi_anh_den} width={'100%'} height={'100%'} />

                                        </div>
                                    </div>
                                    <div className='info-manga'>
                                        <div className='name-manga'><FormattedMessage id="homeheader.hay-nham-mat-khi-anh-den"></FormattedMessage></div>
                                        <div className='view-manga'>
                                            <span>
                                                <i class="fas fa-eye"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.view"></FormattedMessage></span>
                                        </div>
                                        <div className='like-manga'>
                                            <span>
                                                <i class="fas fa-heart"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.love"></FormattedMessage></span>
                                        </div>
                                        <div className='category-manga'>
                                            <span><FormattedMessage id="homeheader.genre"></FormattedMessage>:<FormattedMessage id="homeheader.romance"></FormattedMessage>, <FormattedMessage id="homeheader.detective"></FormattedMessage></span>
                                        </div>
                                        <div>
                                            <span><FormattedMessage id="homeheader.status"></FormattedMessage>: Full</span>
                                        </div>
                                    </div>
                                </li>
                                <li className='post-manga'>
                                    <div className='img-manga'>
                                        <div className='bg-manga'
                                            onClick={() => this.redirectoManga5()}
                                        >

                                            <img src={khom_lung} width={'100%'} height={'100%'} />

                                        </div>
                                        <span className='label-manga'></span>
                                    </div>
                                    <div className='info-manga'>
                                        <div className='name-manga'><FormattedMessage id="homeheader.khom-lung"></FormattedMessage></div>
                                        <div className='view-manga'>
                                            <span>
                                                <i class="fas fa-eye"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.view"></FormattedMessage></span>
                                        </div>
                                        <div className='like-manga'>
                                            <span>
                                                <i class="fas fa-heart"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.love"></FormattedMessage></span>
                                        </div>
                                        <div className='category-manga'>
                                            <span><FormattedMessage id="homeheader.genre"></FormattedMessage>: <FormattedMessage id="homeheader.through-space"></FormattedMessage>, <FormattedMessage id="homeheader.romance"></FormattedMessage>, <FormattedMessage id="homeheader.rebirth"></FormattedMessage></span>
                                        </div>
                                        <div>
                                            <span><FormattedMessage id="homeheader.status"></FormattedMessage>: Full</span>
                                        </div>
                                    </div>
                                </li>
                                <li className='post-manga'>
                                    <div className='img-manga'>
                                        <div className='bg-manga'
                                            onClick={() => this.redirectoManga6()}
                                        >

                                            <img src={de_vuong_sung_ai} width={'100%'} height={'100%'} />

                                        </div>
                                        <span className='label-manga'></span>
                                    </div>
                                    <div className='info-manga'>
                                        <div className='name-manga'><FormattedMessage id="homeheader.de-vuong-sung-ai"></FormattedMessage></div>
                                        <div className='view-manga'>
                                            <span>
                                                <i class="fas fa-eye"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.view"></FormattedMessage></span>
                                        </div>
                                        <div className='like-manga'>
                                            <span>
                                                <i class="fas fa-heart"></i>
                                            </span>
                                            <span>&nbsp;<FormattedMessage id="homeheader.love"></FormattedMessage></span>
                                        </div>
                                        <div className='category-manga'>
                                            <span><FormattedMessage id="homeheader.genre"></FormattedMessage>: <FormattedMessage id="homeheader.ancient"></FormattedMessage>, <FormattedMessage id="homeheader.swordplay"></FormattedMessage>, <FormattedMessage id="homeheader.romance"></FormattedMessage></span>
                                        </div>
                                        <div>
                                            <span><FormattedMessage id="homeheader.status"></FormattedMessage>: Full</span>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        {/* <h1>Danh sách <FormattedMessage id="homeheader.recommend-story"></FormattedMessage></h1>
                        <div className='list-manga-propose'>
                            <ul className='list-manga'>
                                <li>

                                </li>
                            </ul>
                        </div> */}

                    </div>

                    <h3><FormattedMessage id="homeheader.recommend-story"></FormattedMessage></h3>
                    <div className='manga-propose'>
                        <ul className='list-manga-propose'>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={me_man_vi_em} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.fascinated-by-you"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 240 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={cong_luoc_trai_tim} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.strategy-of-the-heart"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 250 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={co_ay_den_xem_concert_cua_toi} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.she-came-to-my-concert"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 50 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={cay_kho_gap_xuan_ve} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.dry-tree-meets-spring"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 50 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={tue_tue_an} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.tue-tue-an"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 4 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={em_nghe_thay_duoc} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.i-can-hear-it"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 95 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={hon_uoc_keo_ngot} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.candy-engagement"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 61 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={chim_hoang_yen_nuoi_tam_nam_da_bay_di} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.the-Canary-that-was-raised-for-eight-years-flew-away"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 75 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={chi_muon_gan_ben_em} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.just-want-to-be-close-to-you"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 70 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>
                            <li>
                                <div className='info-manga-propose'>
                                    <div className='bg-manga-propose'>
                                        <img src={ban_nang_si_me} width={'100%'} height={'100%'} />
                                    </div>
                                    <div className='name-manga-propose'>
                                        <FormattedMessage id="homeheader.instinctual-infatuation"></FormattedMessage>
                                    </div>
                                </div>
                                <small>
                                    <div className='status-manga-propose'>
                                        Full - 98 Chap
                                    </div>
                                </small>
                                <button className='custom-button'><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                            </li>

                        </ul >
                    </div >
                    <div className='section-share section-outstanding-doctor'>
                        <div className='section-container'>
                            <div className='section-header'>
                                <span className='title-section'>
                                    Tác phẩm nổi bật tuần qua
                                </span>
                                <button className='btn-section'>
                                    <FormattedMessage id="homepage.more-info" />
                                </button>
                            </div>
                            <div className='section-body'>
                                <Slider {...this.props.settings}>
                                    {listStories && listStories.length > 0
                                        && listStories.map((item, index) => {

                                            let imageBase64 = '';
                                            if (item.img) {
                                                imageBase64 = new Buffer(item.img, 'base64').toString('binary');
                                            }
                                            console.log('Huynh check item, index: ', item.id)
                                            return (
                                                <div className='section-customize'
                                                    key={index}

                                                >
                                                    <div className='customize-border' onClick={() => this.redirectToContent(item.id)}>

                                                        {/* <div className='customize-border'
                                                            onClick={(`${item.id}`) => this.redirectToContent(`${item.id}`)}
                                                    > */}
                                                        <div className='outer-bg'>
                                                            <div className='bg-image section-outstanding-doctor'
                                                                style={{ backgroundImage: `url(${imageBase64})` }}

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
                    </div>


                </div >



            </React.Fragment >

        );
    }

}

const mapStateToProps = state => {
    return {
        allCategoriesRedux: state.admin.allCategories,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadCategories: () => dispatch(actions.fetchAllCategories()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
