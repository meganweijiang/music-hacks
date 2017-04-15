import React, { Component } from 'react'
import { render } from 'react-dom'
import Play from 'play'
import Upload from 'upload'

class App extends Component {
	render() {
		return(
			<div>
				<Upload/>
				<Play url="audio/1.mp3" name="1" />
				<Play url="audio/2.mp3" name="2" />
				<Play url="audio/3.mp3" name="3" />
				<Play url="audio/4.mp3" name="4" />
				<Play url="audio/5.mp3" name="5" />
				<Play url="audio/6.mp3" name="6" />
				<Play url="audio/7.mp3" name="7" />
				<Play url="audio/8.mp3" name="8" />
			</div>
		)
	}
}

render(<App/>, document.getElementById('hello'))