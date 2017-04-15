import React, { Component } from 'react'
import { render } from 'react-dom'
import Sound from 'react-sound'
 
export default class Music extends Component {
  constructor(props) {
	  super(props)
	  this.state = {
	  	playStatus: Sound.status.STOPPED
	  }
	  this.playSong = this.playSong.bind(this)
  }

  playSong() {
  	this.setState({playStatus: Sound.status.PLAYING})
  }
  render() {
    return (
	  <div>
      <Sound 
        url={this.props.url}
        playStatus={this.state.playStatus} />
      	<button onClick={this.playSong}>{this.props.name}</button>
    </div>
    )
  }
}