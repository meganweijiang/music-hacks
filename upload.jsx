import React, { Component } from 'react'
import { render } from 'react-dom'
import Dropzone from 'react-dropzone'
import request from 'superagent'
 
const CLOUDINARY_UPLOAD_PRESET = 'ai6fb6we';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dqblsemgo/upload';

export default class Upload extends Component {
  constructor(props) {
	  super(props)
    this.state = {
      uploadedFileCloundinaryURL: ''
    }
    this.onDrop = this.onDrop.bind(this)
    this.handleSongUpload = this.handleSongUpload.bind(this)
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
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Dropzone 
        multiple={false}
        accept="audio/*" 
        onDrop={this.onDrop}>
          <div>Add your audio file here.</div>
        </Dropzone>
      </div>
    )
  }
}