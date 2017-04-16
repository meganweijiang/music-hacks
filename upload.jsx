import React, { Component } from 'react'
import { render } from 'react-dom'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import ReactPlayer from 'react-player'
import Recorder from 'react-recorder'
var fileDownload = require('react-file-download')
 
const CLOUDINARY_UPLOAD_PRESET = 'ai6fb6we';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dqblsemgo/upload';

export default class Upload extends Component {
  constructor(props) {
	  super(props)
    this.state = {
      uploadedFile: '',
      uploadedFileCloundinaryURL: '',
      playing: false,
      hidden: true,
      loop: true,
      onStart: false,
      command: 'pause',
      blobOpts: {type: 'audio/mp3'}
    }
    this.onDrop = this.onDrop.bind(this)
    this.handleSongUpload = this.handleSongUpload.bind(this)
    this.playMusic = this.playMusic.bind(this)
    this.startRecording = this.startRecording.bind(this)
    this.stopRecording = this.stopRecording.bind(this)
    this.stopIt = this.stopIt.bind(this)
  }

  onDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);    
    this.setState({
      uploadedFile: acceptedFiles[0]
    })
    this.handleSongUpload(acceptedFiles[0])
  }

  handleSongUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryURL: response.body.secure_url
        });
        this.refs.play.toggleVisible()
      }
    });
  }

  playMusic() {
    this.setState({playing: !this.state.playing})
  }

  startRecording() {
    this.setState({command: 'start'})
  }

  stopRecording(blob) {
    console.log(blob)
    fileDownload(blob, 'music.mp3')
  }

  stopIt(){
    this.setState({command: 'stop'})
  }

  render() {
    return (
      <div>
        <div className="FileUpload">
          <Dropzone 
            className="uploader"
            multiple={false}
            accept="audio/*" 
            onDrop={this.onDrop}>
              <p>Add your audio file here.</p>
          </Dropzone>
          <ReactPlayer 
            url = {this.state.uploadedFileCloudinaryURL}
            playing={this.state.playing} hidden={this.state.hidden} 
            loop={this.state.loop} />
          <Button
            ref="play"
            text="&#9654;||"
            action={this.playMusic}/>  
          <Recorder 
            onStop={this.stopRecording}
            command={this.state.command}
            blobOpts={this.state.blobOpts}/>
            <button onClick={this.startRecording} className="record" id="start">Record</button> 
            <button onClick={this.stopIt} className="record" id="stop">Stop</button>
        </div>
      </div>
    )
  }
}

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.toggleVisible = this.toggleVisible.bind(this)
  }
  toggleVisible() {
    this.setState({visible: !this.state.visible})
  }
  render() {
    if (this.state.visible) {
      return <div className="wrapper"><button onClick={this.props.action} className="controls">{this.props.text}</button></div> 
    }
    return null
  }
}