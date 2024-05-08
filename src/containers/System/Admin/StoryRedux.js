import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import './StoryRedux.scss';
import * as actions from '../../../store/actions';
import TableManageStory from './TableManageStory';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { toast } from "react-toastify";

class StoryRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authorArr: [],
            categoryArr: [],
            previewImgUrl: '',
            isOpen: false,

            storyName: '',
            categoryId: '',
            authorId: '',
            preview: '',
            avatar: '',

            action: '',
            storyEditId: '',
        }
    }




    async componentDidMount() {
        this.props.fetchAllCategoriesRedux();
        this.props.fetchAllAuthorRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.categoryRedux !== this.props.categoryRedux) {
            let arrCategories = this.props.categoryRedux;
            this.setState({
                categoryArr: arrCategories,
                categoryId: arrCategories && arrCategories.length > 0 ? arrCategories[0].id : ''
            })
        }
        if (prevProps.authorRedux !== this.props.authorRedux) {
            let arrAuthors = this.props.authorRedux;
            this.setState({
                authorArr: arrAuthors,
                authorId: arrAuthors && arrAuthors.length > 0 ? arrAuthors[0].id : ''
            })
        }

        if (prevProps.listStories !== this.props.listStories) {
            let arrCategories = this.props.categoryRedux;
            let arrAuthors = this.props.authorRedux;
            this.setState({
                storyName: '',
                ccategoryId: arrCategories && arrCategories.length > 0 ? arrCategories[0].id : '',
                authorId: arrAuthors && arrAuthors.length > 0 ? arrAuthors[0].id : '',
                preview: '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                previewImgUrl: '',
            })
        }
    }




    OnChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }


    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['storyName', 'categoryId', 'authorId', 'preview']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                toast.info('Missing input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid
    }


    handleOnchangeimage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: objectUrl,
                avatar: base64
            })
        }
    }
    openPreviewImage = () => {
        if (!this.state.previewImgUrl) {
            return;
        }
        this.setState({
            isOpen: true
        })
    }

    handleSaveStory = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) {
            return;
        }
        let { action } = this.state;
        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewStory({
                storyName: this.state.storyName,
                categoryId: this.state.categoryId,
                authorId: this.state.authorId,
                preview: this.state.preview,
                avatar: this.state.avatar
            })
        } if (action === CRUD_ACTIONS.EDIT) {
            this.props.editStoryRedux({
                id: this.state.storyEditId,
                storyName: this.state.storyName,
                categoryId: this.state.categoryId,
                authorId: this.state.authorId,
                preview: this.state.preview,
                avatar: this.state.avatar
            })
        }
    }


    handleEditstoryFromParent = (story) => {
        let imageBase64 = '';
        if (story.img) {
            imageBase64 = new Buffer(story.img, 'base64').toString('binary');
        }
        this.setState({
            storyName: story.storyName,
            categoryId: story.categoryId,
            authorId: story.authorId,
            preview: story.preview,
            avatar: '',

            action: CRUD_ACTIONS.EDIT,
            storyEditId: story.id,
            previewImgUrl: imageBase64
        })

    }
    render() {
        console.log('Check state: ', this.state);
        let language = this.props.language;
        let categories = this.state.categoryArr;
        let authors = this.state.authorArr;
        let { storyName, categoryId, authorId, preview, avatar } = this.state;
        return (
            <div className='user-redux-container'>
                <div className="title" >CRUD story by redux</div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'>
                                thêm story
                            </div>
                            <div className='col-3'>
                                <label>
                                    Story Name
                                </label>
                                <input className='form-control' type='text'
                                    value={storyName}
                                    onChange={(event) => this.OnChangeInput(event, 'storyName')}
                                />
                            </div>


                            <div className='col-3'>
                                <label>
                                    Category Name
                                </label>
                                <select className="form-control"
                                    onChange={(event) => this.OnChangeInput(event, 'categoryId')}
                                    value={categoryId}
                                >
                                    {categories && categories.length > 0 &&
                                        categories.map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>
                                                    {item.categoryName}
                                                </option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className='col-3'>
                                <label>
                                    Author name
                                </label>
                                <select className="form-control"
                                    onChange={(event) => this.OnChangeInput(event, 'authorId')}
                                    value={authorId}
                                >
                                    {authors && authors.length > 0 &&
                                        authors.map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>
                                                    {item.firstName}
                                                </option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className='col-3'>
                                <label>
                                    Preview
                                </label>
                                <input className='form-control' type='text'
                                    value={preview}
                                    onChange={(event) => this.OnChangeInput(event, 'preview')}
                                />
                            </div>

                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id="manage-user.image" />
                                </label>
                                <div className='preview-img-container'>
                                    <input id="previewImg" type='file' hidden
                                        onChange={(event) => this.handleOnchangeimage(event)}

                                    />
                                    <label className='label-upload' htmlFor='previewImg'>
                                        <FormattedMessage id="manage-user.upload-image" /> <i className="fas fa-upload"></i>
                                    </label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImgUrl})` }}
                                        onClick={() => this.openPreviewImage()}
                                    >

                                    </div>
                                </div>

                            </div>
                            <div className='col-12 my-3'>
                                <button className={this.state.action === CRUD_ACTIONS.EDIT ? 'btn btn-warning' : 'btn btn-primary'}
                                    onClick={() => this.handleSaveStory()}
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT ?
                                        <FormattedMessage id="manage-user.edit" />
                                        :
                                        <FormattedMessage id="manage-user.save" />
                                    }
                                </button>
                            </div>
                            <div className='col-12 mb-5'>
                                <TableManageStory
                                    handleEditstoryFromParentKey={this.handleEditstoryFromParent}
                                    action={this.state.action}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgUrl}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }

            </div >

        )
    }
}




const mapStateToProps = state => {
    return {
        genderRedux: state.admin.genders,
        language: state.app.language,
        authorRedux: state.admin.allAuthors,
        isLoadingGender: state.admin.isLoadingGender,
        listStories: state.admin.allStories,
        categoryRedux: state.admin.allCategories,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllAuthorRedux: () => dispatch(actions.fetchAllAuthor()),
        fetchAllStoriesRedux: () => dispatch(actions.fetchAllStories()),
        //thêm , sửa, xóa story
        createNewStory: (data) => dispatch(actions.createNewStory(data)),
        editStoryRedux: (data) => dispatch(actions.editStory(data)),
        fetchAllCategoriesRedux: () => dispatch(actions.fetchAllCategories()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryRedux);
