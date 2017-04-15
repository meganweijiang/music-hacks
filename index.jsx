import React, { Component } from 'react'
import { render } from 'react-dom'
import Cat from 'cat'

class App extends Component {
	render() {
		let someName = "meowgan"
		return(
			<div>
				<Cat name={someName}/>
				<p>Hello, world!</p>
				<Cat/>
			</div>
		)
	}
}

render(<App/>, document.getElementById('hello'))