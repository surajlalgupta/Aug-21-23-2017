import React, { Component } from 'react';
import $ from "jquery";

class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			text: ""
		}
	}
	componentDidMount(){
		//TALK TO SERVER
		let self = this
		$.ajax({
			url: "/welcome.txt",
			method: "GET",
			beforeSend(){
				self.setState({
					text: "Loading..."
				})
			},
			success(response){
				self.setState({
					text: response
				})
			}
		})

	}
	  render() {
	    return (
			<div>
				<h1>{this.props.message}</h1>
				<h2>{this.state.text}</h2>
			</div>
	    );
	  }
}

export default Header;