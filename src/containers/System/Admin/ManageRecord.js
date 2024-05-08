import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils';
import { ReactMic } from 'react-mic';


class ManageRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voice: false,
            audioLink: '',
        }
    }

    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

    }
    startHandle = () => {
        this.setState({
            voice: true
        })
    }
    stopHandle = () => {
        this.setState({
            voice: false
        })
    }
    clearHandle = () => {
        this.setState({
            voice: false,
            audioLink: ''
        })
    }
    onStop = (blob) => {
        console.log('Huynh check blob: ', blob)
        this.setState({
            audioLink: blob.blobURL
        })
    }

    render() {
        let { voice, audioLink } = this.state;

        return (
            <div >
                {/* Recording */}
                <div className='recorder'>
                    <h4 className='text-[18px]'>React recorder</h4>
                    <ReactMic
                        className='w-full mt-4 mb-3'
                        record={voice}
                        onStop={(blob) => this.onStop(blob)}
                    />
                    <div className=''>
                        {audioLink ?
                            <button
                                className='btn btn-light'
                                onClick={() => this.clearHandle()}
                            >Clear</button>
                            :
                            ''
                        }

                    </div>
                    <div className=''>
                        {this.state.voice === false ?
                            <button
                                className='btn btn-success'
                                onClick={() => this.startHandle()}
                            >Start</button>
                            :
                            <button
                                className='btn btn-danger'
                                onClick={() => this.stopHandle()}
                            >Stop</button>
                        }


                    </div>
                    <div className='mt-4'>
                        {audioLink ?
                            <audio controls src={audioLink} className='mt-6' />
                            :
                            ''
                        }

                    </div>


                </div>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecord);
