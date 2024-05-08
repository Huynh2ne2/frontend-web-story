import React, { Component } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getContentByStory, getChapByStory } from '../../services/userService';
import './Story_Content.scss';
import { LANGUAGES } from '../../utils';
import * as actions from '../../store/actions';
import { useSpeechSynthesis } from "react-speech-kit";
import { words } from 'lodash';
import LikeAndShare from '../HomePage/SocialPlugin/Like&Share';
import Comment from '../HomePage/SocialPlugin/Comment';
import { ReactMic } from 'react-mic';


class Story_Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailStory: [],
            chapStory: [],
            contentHTML: '',
            contentMarkdown: '',
            isOpen: false,
            chapValue: [],
            stop: true,
            utterance: null,
            highlightedWordIndex: null,
            words: [],

            preview: [],
            playInLoop: false,

        }
    }

    // handleSpeak = () => {
    //     let { contentMarkdown } = this.state;
    //     let value = new SpeechSynthesisUtterance(contentMarkdown);
    //     value.lang = 'vi-VN';
    //     window.speechSynthesis.speak(value);
    //     // console.log('Huynh check speak: ', contentMarkdown)
    // }


    handleSpeak = () => {
        const { contentMarkdown, stop } = this.state;
        let value = new SpeechSynthesisUtterance(contentMarkdown);
        value.lang = 'vi-VN';
        value.voice = speechSynthesis.getVoices().find(voice => voice.name === "Microsoft An - Vietnamese (Vietnam)");
        if (stop) {
            window.speechSynthesis.speak(value);
            this.setState({ stop: false });
        } else {
            window.speechSynthesis.cancel();
            this.setState({ stop: true });
        }

    }


    splitTextIntoWords = (text) => {
        this.setState({ words: text.split(".") });
    };

    cancelSpeech = () => {
        window.speechSynthesis.cancel();
        this.setState({ highlightedWordIndex: null });
    };

    wait = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    speakAllWords = async () => {
        let { words } = this.state;
        let utterance = new SpeechSynthesisUtterance();
        utterance.lang = 'vi-VN';
        utterance.text = words;
        window.speechSynthesis.speak(utterance);
        for (let i = 0; i < words.length; i++) {
            this.setState({ highlightedWordIndex: i });
            utterance.text = words[i];
            // utterance.rate = 1.25;
            await this.wait(words[i].length * 56); // Adjust the multiplier for better synchronization
        }

        this.setState({ highlightedWordIndex: null });


    };

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id1 = this.props.match.params.id;
            // console.log('')
            let resData = await getChapByStory(id1);
            console.log('Huynh check data: resData:  ', resData)
            if (resData && resData.errCode === 0) {
                this.setState({
                    chapStory: resData.chapId,
                    chapValue: resData.chapValues
                })
            }
            let { chapStory } = this.state;
            console.log('Huynh check state: chapStory: ', chapStory)
            let res = await getContentByStory(id1, chapStory);
            console.log('huynh check res: ', res)
            if (res && res.errCode === 0 && res.content) {
                this.setState({
                    detailStory: res.content,
                    preview: res.content.preview
                })

                if (res.markdown) {
                    this.setState({
                        contentHTML: res.markdown.contentHTML,
                        contentMarkdown: res.markdown.contentMarkdown
                    })
                }
            }
        }
        let { preview } = this.state;
        this.splitTextIntoWords(preview)
        // this.setState({
        //     words: contentMarkdown
        // })
        // console.log('Huynh check splitTextIntoWords: ', this.state.words)


    }

    async componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.language !== prevProps.language) {
            let { chapStory, chapValue } = this.state;

            if (chapStory && chapValue) {
                this.setState({
                    chapStory: this.state.chapStory,
                    chapValue: this.state.chapValue,
                });
            }
        }


    }

    handleReadContent = () => {
        console.log('huynh check state in handleReadContent: ', this.state)
        this.setState({
            isOpen: !this.state.isOpen,
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown
        })
        console.log('huynh check set state in handleReadContent: ', this.state)
    }
    handleRedirectStoryByChap = async (chap) => {

        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id1 = this.props.match.params.id;
            if (this.props.history) {
                this.props.history.push(`/content-by-storyId/${id1}/${chap}`)
                let res = await getContentByStory(id1, chap);
                console.log('huynh check res: ', res)
                if (res && res.errCode === 0 && res.content) {
                    this.setState({
                        detailStory: res.content,

                    })

                    if (res.markdown) {
                        this.setState({
                            contentHTML: res.markdown.contentHTML,
                            contentMarkdown: res.markdown.contentMarkdown
                        })
                    }
                }
            }
            console.log('Huynh check handleRedirectStoryByChap:id1: chap: ', id1, chap)
        }


    }

    handleViewAuthor = (item) => {
        if (this.props.history) {
            return this.props.history.push(`/view-author/${item}`)
        }
    }


    render() {
        let { detailStory, isOpen, preview, contentHTML, voice, audioLink, words, contentMarkdown, chapStory, chapValue, highlightedWordIndex } = this.state;
        console.log('Check state: ', this.state)
        let language = this.props.language;
        console.log('Huynh check props: ', this.props.language)
        console.log('Huynh check localhost: ', process.env.REACT_APP_IS_LOCALHOST, typeof process.env.REACT_APP_IS_LOCALHOST)
        let currentURL = +process.env.REACT_APP_IS_LOCALHOST === 1 ?
            "https://www.youtube.com/watch?v=0JePgrZ5zxs&list=RDMM0JePgrZ5zxs&start_radio=1" : window.location.href;

        //console.log('Huynh check currentURL ', window.location.href)
        return (
            <React.Fragment>
                <div className='story-detail-container'>
                    <h2>Thông tin truyện</h2>
                    <hr style={{ width: '30%' }}></hr>
                    <div className='intro-story'>
                        <div className='content-left'
                            style={{ backgroundImage: `url(${detailStory.img})` }}
                        >
                        </div>
                        <div className='content-right'>
                            <div className='up'>
                                {detailStory.storyName}<br />
                                {/* {detailStory && detailStory.authorData && detailStory.authorData.id
                                    &&
                                    <span>
                                        {detailStory.authorData.id}
                                    </span>
                                } */}
                                {detailStory && detailStory.authorData && detailStory.authorData.firstName
                                    && <span>
                                        <i class="fas fa-user" style={{ color: 'green', marginRight: '10px' }}>   </i>
                                        <a
                                            onClick={() => this.handleViewAuthor(`${detailStory.authorData.id}`)}
                                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                                        >
                                            {detailStory.authorData.firstName}
                                        </a>

                                    </span>
                                }
                            </div>
                            {/* {detailStory.Markdown.contentMarkdown} */}
                            <div className='down'>
                                <i class="fas fa-book" style={{ color: 'orange' }}></i>
                                <span style={{ marginLeft: '10px', fontFamily: 'monospace', userSelect: 'none' }}

                                >
                                    {words.map((word, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                marginLeft: '10px', fontFamily: 'monospace',
                                                backgroundColor:
                                                    index === highlightedWordIndex ? "yellow" : "transparent",
                                            }}
                                        >
                                            {word}{"."}
                                        </span>
                                    ))}
                                    <button className='btn btn-success'
                                        style={{ margin: ' 15px 2px' }}
                                        onClick={() => this.speakAllWords()}>Speak preview</button>&nbsp;
                                    <button className='btn btn-primary' onClick={() => this.cancelSpeech()}>Stop</button>
                                </span>
                                <br />
                                <LikeAndShare
                                    dataHref={currentURL}
                                />
                                <center>
                                    <button className='read-now'
                                        onClick={() => this.handleReadContent()}
                                    >
                                        Đọc  ngay
                                    </button>


                                </center>
                            </div>
                        </div>
                    </div>
                    {isOpen == true
                        &&
                        <>
                            <span
                                style={{ float: 'right', cursor: 'pointer' }}
                                onClick={() => this.handleSpeak()}
                            >
                                <i className="fas fa-volume-up"></i>


                            </span>
                            <div className='detail-info'>
                                {contentHTML &&
                                    <div dangerouslySetInnerHTML={{ __html: contentHTML }}


                                        style={{ userSelect: 'none' }}>

                                    </div>

                                }
                            </div>



                        </>


                    }
                    <div className='chap-story'
                        style={{ display: 'block', height: 'auto' }}
                    >

                        {chapStory && chapValue && chapStory.length > 0 && chapValue.length > 0 && (
                            <ul>
                                {chapStory.map((id, index) => (
                                    <a
                                        href="#"
                                        onClick={() => this.handleRedirectStoryByChap(id)}
                                        key={index}>
                                        {/* <strong>Chap {id}</strong>: */}
                                        <div>
                                            {language === LANGUAGES.VI && (
                                                <p>{chapValue[index].valueVi}</p>
                                            )}
                                        </div>
                                        <div>
                                            {language === LANGUAGES.EN && (
                                                <p>{chapValue[index].valueEn}</p>
                                            )}
                                        </div>
                                    </a>
                                ))}
                            </ul>
                        )}



                    </div>

                    <div className='comment-story'>
                        <Comment
                            dataHref={currentURL}
                            width={"100%"}
                        />
                    </div>
                </div>



                <div
                    style={{ height: '200px' }}
                >

                </div>
            </React.Fragment >

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
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Story_Content);
