import React, { Component } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllStoriesByCategory } from '../../services/userService';
import './Story_ByCategory.scss';
import moment from 'moment';
import { withRouter } from 'react-router';
import '@fortawesome/fontawesome-free';
import _ from 'lodash';

class Story_ByCategory_HD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listStory: [],
            changecolor: false,
            sortBy: "asc",
            sortField: "storyName",
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id1 = this.props.match.params.id;
            let res = await getAllStoriesByCategory(id1);
            if (res && res.errCode === 0) {
                this.setState({
                    listStory: res.data
                })
            }
        }

    }
    redirectToContent = async (story) => {
        this.props.history.push(`/content-by-storyId/${story.id}`)

    }

    changeColor = () => {
        this.setState({
            changecolor: !this.state.changecolor
        })
    }

    handleSort = (sortBy, sortField) => {
        let { listStory } = this.state;
        this.setState({
            sortBy: sortBy,
            sortField: sortField
        })

        let clonelistStory = _.cloneDeep(listStory);
        clonelistStory = _.orderBy(clonelistStory, [sortField], [sortBy]);
        //console.log('Check sort by , sort field: ', sortBy, sortField)
        // console.log('Check sort clonelistStory: ', clonelistStory)
        this.setState({
            listStory: clonelistStory
        })


    }



    render() {
        let { listStory } = this.state;
        //console.log('Check props: ', this.props)
        console.log('Check state: ', this.state)

        // console.log('Huynh check state load story by category: ', this.state);
        // console.log('this.props.match.params.id: ', this.props.match.params.id)
        return (
            <React.Fragment>
                <div class="dropdown"
                    style={{ float: 'right', margin: '20px' }}
                >
                    <button class="dropbtn">Sort</button>
                    <div class="dropdown-content">
                        <a href="#"
                            onClick={() => this.handleSort("asc", "storyName")}
                        >
                            Sort name by <i class="fa-solid fa-arrow-down-a-z"></i>
                        </a>
                        <a href="#"
                            onClick={() => this.handleSort("desc", "storyName")}
                        >
                            Sort name by <i class="fa-solid fa-arrow-up-a-z"></i>

                        </a>
                    </div>
                </div>


                <div className='list-story'>
                    <center>
                        <h3>Danh sách truyện </h3>
                    </center>

                    <ul className='stories'>


                        {listStory && listStory.length > 0
                            && listStory.map((item, index) => {
                                //console.log('check item, index', item, index);
                                let imageBase64 = '';
                                if (item.img) {
                                    imageBase64 = new Buffer(item.img, 'base64').toString('binary');
                                }
                                return (


                                    <li>
                                        <div className='stories-item' key={index}>
                                            <div className='story-top'>
                                                <div className='bg-img'
                                                    style={{ backgroundImage: `url(${imageBase64})` }}
                                                >

                                                </div>
                                            </div>
                                            <div className='story-info-general' key={index}>
                                                <div className='story-info'>
                                                    <div className='title-story'>
                                                        {item.storyName}
                                                    </div>
                                                    <span>
                                                        Thể loại: {item.categoryData.categoryName}
                                                    </span>

                                                    <span

                                                    >
                                                        <i class="fas fa-eye" ></i>&nbsp;Lượt xem
                                                    </span>
                                                    <span
                                                        onClick={() => this.changeColor()}
                                                    >
                                                        <i className={this.state.changecolor ? 'fas fa-heart' : 'fas fa-heart color'}></i>&nbsp;Yêu thích
                                                    </span>
                                                    <span>
                                                        Ngày dự kiến:&nbsp;{item.createdAt}
                                                    </span>
                                                </div>
                                                <div className='view-now'
                                                    key={index}
                                                    onClick={() => this.redirectToContent(item)}
                                                >
                                                    Xem ngay
                                                </div>
                                            </div>
                                        </div>
                                    </li>






                                )
                            })
                        }
                    </ul>
                </div>
            </React.Fragment >

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Story_ByCategory_HD));
