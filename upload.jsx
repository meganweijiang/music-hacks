import React, { Component } from 'react'
import { render } from 'react-dom'
import Dropzone from 'react-dropzone'
 
export default class Upload extends Component {
  constructor(props) {
	  super(props)
  }

  onDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);    
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Add your mp3 file here.</div>
        </Dropzone>
      </div>
    )
  }
}