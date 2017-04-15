import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Cat extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: this.props.name,
		}
	}
	render() {
		return(
			<p>Meow! {this.state.name}</p>
		)
	}
}

