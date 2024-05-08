import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageStory.scss';
import * as actions from '../../../store/actions';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}


class TableManageStory extends Component {
    //khai báo chuẩn react
    constructor(props) {
        super(props);
        //khởi tạo các biến muốn dùng trong state
        //this này có nghĩa là class
        this.state = {
            storyRedux: []
        }
    }
    componentDidMount() {
        this.props.fetchAllStoriesRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listStories !== this.props.listStories) {
            this.setState({
                storyRedux: this.props.listStories
            })
        }
    }

    handleDeleteStoryRedux = (story) => {
        this.props.deleteStoryRedux(story.id);
    }

    handleEditstory = (story) => {
        console.log('Huynh check story edit: ', story);
        this.props.handleEditstoryFromParentKey(story);
    }

    render() {
        let arrStories = this.state.storyRedux;
        return (
            <React.Fragment>
                <table id="TableManageStory">
                    <tbody>
                        <tr>
                            <th>Story name</th>
                            <th>Category id</th>
                            <th>Author id</th>
                            <th>Preview</th>
                            <th>Action</th>
                        </tr>

                        {arrStories && arrStories.length > 0 &&
                            arrStories.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.storyName}</td>
                                        <td>{item.categoryId}</td>
                                        <td>{item.authorId}</td>
                                        <td>{item.preview}</td>
                                        <td>
                                            <button
                                                className="btn-edit"
                                                onClick={() => this.handleEditstory(item)}
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button
                                                className="btn-delete"
                                                onClick={() => this.handleDeleteStoryRedux(item)}
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
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
            </React.Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
        listStories: state.admin.allStories,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllStoriesRedux: () => dispatch(actions.fetchAllStories()),
        deleteStoryRedux: (id) => dispatch(actions.deleteStory(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageStory);
