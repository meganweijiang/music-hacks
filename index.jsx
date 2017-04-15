import React, { Component } from 'react'
import { render } from 'react-dom'
import Play from 'play'
import Upload from 'upload'

class App extends Component {
	render() {
		return(
			<div>
				<h1>Meow Mixer</h1>
				<Upload/>
				<div className="wrapper">
				<Play url="audio/1.mp3" name="&#x1f431;" iden="cat1"/>
				<Play url="audio/2.mp3" name="&#x1f431;" iden="cat2"/>
				<Play url="audio/3.mp3" name="&#x1f431;" iden="cat3"/>
				<Play url="audio/4.mp3" name="&#x1f431;" iden="cat4"/>
				<Play url="audio/5.mp3" name="&#x1f431;" iden="cat5"/>	
				<Play url="audio/6.mp3" name="&#x1f431;" iden="cat6"/>
				<Play url="audio/7.mp3" name="&#x1f431;" iden="cat7"/>
				<Play url="audio/8.mp3" name="&#x1f431;" iden="cat8"/>
				</div>
			</div>
		)
	}
}

render(<App/>, document.getElementById('hello'))