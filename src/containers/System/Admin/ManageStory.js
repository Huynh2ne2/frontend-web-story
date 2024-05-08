
// import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import * as actions from '../../../store/actions';
// import MarkdownIt from 'markdown-it';
// import MdEditor from 'react-markdown-editor-lite';
// // import style manually
// import 'react-markdown-editor-lite/lib/index.css';
// import './ManageStory.scss';
// import Select from 'react-select';
// import { CRUD_ACTIONS, LANGUAGES } from '../../../utils';
// import { getContentByStory } from '../../../services/userService';


// const mdParser = new MarkdownIt();





// class ManageStory extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             contentMarkdown: '',
//             contentHTML: '',
//             selectedStory: '',
//             listStory: [],
//             listChapter: [],

//             selectedChapter: '',
//             hasOldata: false,
//         }
//     }

//     buildDataInputSelect = (inputData, type) => {
//         console.log('Huynh check type: ', type)
//         let result = [];
//         let { language } = this.props;
//         if (inputData && inputData.length > 0) {
//             if (type === 'STORIES') {
//                 inputData.map((item, index) => {
//                     let object = {};
//                     object.label = `${item.storyName}`;
//                     object.value = item.id;
//                     result.push(object)
//                 })
//                 console.log('Huynh check inputData type Truyện: ', inputData)
//             }
//             if (type === 'CHAP') {
//                 inputData.map((item, index) => {
//                     console.log('Huynh check item, index: ', item, index)
//                     let object = {};
//                     let labelVi = `${item.valueVi}`;
//                     let labelEn = `${item.valueEn}`;
//                     object.label = language === LANGUAGES.VI ? labelVi : labelEn;
//                     object.value = item.keyMap;
//                     result.push(object)
//                 })
//             }
//         }
//         console.log('Huynh check result: ', result)
//         return result;

//     }


//     componentDidMount() {
//         this.props.fetchAllStoriesRedux();
//         this.props.fetchChapterStartRedux();
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.allStories !== this.props.allStories) {
//             let dataSelect = this.buildDataInputSelect(this.props.allStories, 'STORIES')
//             this.setState({
//                 listStory: dataSelect
//             })
//         }
//         if (prevProps.language !== this.props.language) {
//             let resChap = this.props.chapter;
//             let dataSelect = this.buildDataInputSelect(this.props.allStories, 'STORIES');
//             let dataSelectChap = this.buildDataInputSelect(resChap, 'CHAP');

//             this.setState({
//                 listStory: dataSelect,
//                 listChapter: dataSelectChap
//             })
//         }
//         if (prevProps.chapter !== this.props.chapter) {
//             let resChap = this.props.chapter;
//             let dataSelectChap = this.buildDataInputSelect(resChap, 'CHAP');

//             this.setState({
//                 listChapter: dataSelectChap
//             })
//         }
//     }

//     handleEditorChange = ({ html, text }) => {
//         this.setState({
//             contentMarkdown: text,
//             contentHTML: html,
//         })
//     }

//     handleSaveContentMarkdown = () => {
//         let { hasOldata } = this.state;

//         this.props.saveDetailStoryRedux({

//             contentHTML: this.state.contentHTML,
//             contentMarkdown: this.state.contentMarkdown,
//             storyId: this.state.selectedStory.value,
//             action: hasOldata === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
//             selectedChapter: this.state.selectedChapter.value
//         })
//     }


//     handleChangeSelect = async (selectedStory, selectedChapter) => {
//         this.setState({ selectedStory, selectedChapter });
//         //console.log('Huynh check state lisChapter: ', this.state.listChapter)
//         let { listChapter } = this.state;
//         //console.log('Huynh check state in handleChangeSelect: ', this.state)
//         let res = await getContentByStory(selectedStory.value, 'CHAP1');
//         console.log('Huynh check res res.data.Markdown: ', res);
//         if (res && res.data && res.data.Markdown) {
//             let markdown = res.data.Markdown;

//             let chap_Id = '', selectedChapter = '';
//             if (res.data.storyChapData) {
//                 console.log('Huynh check res.data.storyChapData: ', res.data.storyChapData)
//                 let data = res.data.storyChapData;
//                 data.map((item, index) => {
//                     console.log('Huynh check lấy data nhiều của chương: ', item.chapId)
//                     return (
//                         <span key={index}>
//                             {item.chapId}
//                         </span>
//                     )
//                 })
//                 chap_Id = data;
//                 console.log('Huynh check tiếp hàm handleChangeSelect: chapId: ', chap_Id)


//                 selectedChapter = listChapter.find(item => {
//                     //console.log('Huynh check item handleChangeSelect: ', item.value)
//                     return item && item.value === chap_Id;
//                     //console.log('Huynh check item handleChangeSelect: ', item.value)
//                 })
//                 this.setState({
//                     contentHTML: markdown.contentHTML,
//                     contentMarkdown: markdown.contentMarkdown,
//                     hasOldata: true,
//                     selectedChapter: selectedChapter
//                 })
//                 console.log('Huynh check tiếp hàm handleChangeSelect: selectedChapter: ', selectedChapter)
//             }

//             this.setState({
//                 contentHTML: markdown.contentHTML,
//                 contentMarkdown: markdown.contentMarkdown,
//                 hasOldata: true,
//                 selectedChapter: selectedChapter
//             })
//             console.log('Huynh check state trong hàm handleChangeSelect: ', this.state)
//         } else {
//             this.setState({
//                 contentHTML: '',
//                 contentMarkdown: '',
//                 hasOldata: false,
//                 selectedChapter: ''
//             })
//         }
//     };

//     handleChangeSelectStoryInfor = async (selectedStory, name) => {
//         let statement = name.name;
//         let statecopy = { ...this.state };
//         statecopy[statement] = selectedStory;
//         this.setState({
//             ...statecopy
//         })
//     }
//     handleChangeSelectChap = async (selectedChapter, name) => {
//         let statement = name.name;
//         let statecopy = { ...this.state };
//         statecopy[statement] = selectedChapter;
//         this.setState({
//             ...statecopy
//         })
//     }

//     render() {
//         console.log('Huynh check prop: ', this.props)
//         let { hasOldata } = this.state;
//         console.log('Huynh check value state list doctors: ', this.state)
//         return (
//             <div className='manage-doctor-container'>
//                 <div className='manage-doctor-title'>
//                     Welcome page manage story
//                 </div>
//                 <div className='more-infor'>
//                     <div className='content-left'>
//                         <label>Chọn stories</label>
//                         <Select
//                             value={this.state.selectedStory}
//                             onChange={this.handleChangeSelect}
//                             options={this.state.listStory}
//                         />
//                     </div>

//                 </div>
//                 <div className='more-infor-extra'>
//                     <div className='row'>
//                         <div className='col-4 form-group'>
//                             <label>
//                                 Chương
//                             </label>
//                             <Select
//                                 value={this.state.selectedChapter}
//                                 onChange={this.handleChangeSelect}
//                                 options={this.state.listChapter}
//                                 placeholder={'enter'}
//                                 name='selectedChapter'
//                             />
//                         </div>
//                     </div>

//                 </div>
//                 <div className='manage-doctor-editor'>
//                     <MdEditor
//                         style={{ height: '500px' }}
//                         renderHTML={text => mdParser.render(text)}
//                         onChange={this.handleEditorChange}
//                         value={this.state.contentMarkdown}
//                     />
//                 </div>
//                 <button
//                     className={hasOldata === true ? 'save-content-doctor' : 'create-content-doctor'}
//                     onClick={() => this.handleSaveContentMarkdown()}
//                 >
//                     {hasOldata === true ?
//                         <span>Lưu thông tin</span> : <span>Tạo thông tin</span>

//                     }
//                 </button>
//             </div>

//         );
//     }

// }

// const mapStateToProps = state => {
//     return {
//         language: state.app.language,
//         allStories: state.admin.allStories,
//         chapter: state.admin.chapter
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchAllStoriesRedux: () => dispatch(actions.fetchAllStories()),
//         saveDetailStoryRedux: (data) => dispatch(actions.saveDetailInforStory(data)),
//         fetchChapterStartRedux: () => { dispatch(actions.fetchChapterStart()) }
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ManageStory);









//chỉnh lại



import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import './ManageStory.scss';
import Select from 'react-select';
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils';
import { getContentByStory } from '../../../services/userService';
import _ from 'lodash';



const mdParser = new MarkdownIt();





class ManageStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedStory: '',
            listStory: [],
            listChapter: [],

            selectedChapter: '',
            hasOldata: false,
        }
    }

    buildDataInputSelect = (inputData, type) => {
        console.log('Huynh check type: ', type)
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            if (type === 'STORIES') {
                inputData.map((item, index) => {
                    let object = {};
                    object.label = `${item.storyName}`;
                    object.value = item.id;
                    result.push(object)
                })
                console.log('Huynh check inputData type Truyện: ', inputData)
            }
            if (type === 'CHAP') {
                inputData.map((item, index) => {
                    console.log('Huynh check item, index: ', item, index)
                    let object = {};
                    let labelVi = `${item.valueVi}`;
                    let labelEn = `${item.valueEn}`;
                    object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                    object.value = item.keyMap;
                    result.push(object)
                })
            }
        }
        console.log('Huynh check result: ', result)
        return result;

    }


    componentDidMount() {
        this.props.fetchAllStoriesRedux();
        this.props.fetchChapterStartRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allStories !== this.props.allStories) {
            let dataSelect = this.buildDataInputSelect(this.props.allStories, 'STORIES')
            this.setState({
                listStory: dataSelect
            })
        }
        if (prevProps.language !== this.props.language) {
            let resChap = this.props.chapter;
            let dataSelect = this.buildDataInputSelect(this.props.allStories, 'STORIES');
            let dataSelectChap = this.buildDataInputSelect(resChap, 'CHAP');

            this.setState({
                listStory: dataSelect,
                listChapter: dataSelectChap
            })
        }
        if (prevProps.chapter !== this.props.chapter) {
            let resChap = this.props.chapter;
            let dataSelectChap = this.buildDataInputSelect(resChap, 'CHAP');

            this.setState({
                listChapter: dataSelectChap
            })
        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    handleSaveContentMarkdown = () => {
        let { hasOldata } = this.state;

        this.props.saveDetailStoryRedux({

            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            storyId: this.state.selectedStory.value,
            action: hasOldata === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
            selectedChapter: this.state.selectedChapter.value
        })
    }


    handleChangeSelect = async (selectedStory, selectedChapter) => {
        this.setState({ selectedStory, selectedChapter });
        console.log('Huynh check state: ', selectedChapter)
        let { listChapter } = this.state;
        let res = await getContentByStory(selectedStory.value, selectedChapter.value);
        console.log('Huynh check res res.data.Markdown: ', res);
        if (res && res.errCode === 0 && res.content) {
            if (res.markdown) {
                this.setState({
                    contentHTML: res.markdown.contentHTML,
                    contentMarkdown: res.markdown.contentMarkdown,
                    hasOldata: true
                });
            }
            else {
                this.setState({
                    contentHTML: '',
                    contentMarkdown: '',
                    hasOldata: false
                });
            }

        }
        else {
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                hasOldata: false
            });
        }
        console.log('Huynh check state in handleChangeSelect: ', this.state)
    };

    // handleChangeSelectStoryInfor = async (selectedStory, name) => {
    //     let statement = name.name;
    //     let statecopy = { ...this.state };
    //     statecopy[statement] = selectedStory;
    //     this.setState({
    //         ...statecopy
    //     })
    // }

    render() {
        console.log('Huynh check prop: ', this.props)
        let { hasOldata } = this.state;
        console.log('Huynh check value state list stories: ', this.state)
        return (
            <div className='manage-doctor-container'>
                <div className='manage-doctor-title'>
                    Welcome page manage story
                </div>
                <div className='more-infor'>
                    <div className='content-left'>
                        <label>Chọn stories</label>
                        <Select
                            value={this.state.selectedStory}
                            onChange={selectedStory => this.handleChangeSelect(selectedStory, this.state.selectedChapter)}
                            options={this.state.listStory}
                        />
                    </div>

                </div>
                <div className='more-infor-extra'>
                    <div className='row'>
                        <div className='col-4 form-group'>
                            <label>
                                Chương
                            </label>
                            <Select
                                value={this.state.selectedChapter}
                                onChange={selectedChapter => this.handleChangeSelect(this.state.selectedStory, selectedChapter)}
                                options={this.state.listChapter}
                                placeholder={'enter'}
                                name='selectedChapter'
                            />
                        </div>
                    </div>

                </div>
                <div className='manage-doctor-editor'>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <button
                    className={hasOldata === true ? 'save-content-doctor' : 'create-content-doctor'}
                    onClick={() => this.handleSaveContentMarkdown()}
                >
                    {hasOldata === true ?
                        <span>Lưu thông tin</span> : <span>Tạo thông tin</span>

                    }
                </button>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allStories: state.admin.allStories,
        chapter: state.admin.chapter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllStoriesRedux: () => dispatch(actions.fetchAllStories()),
        saveDetailStoryRedux: (data) => dispatch(actions.saveDetailInforStory(data)),
        fetchChapterStartRedux: () => { dispatch(actions.fetchChapterStart()) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageStory);
