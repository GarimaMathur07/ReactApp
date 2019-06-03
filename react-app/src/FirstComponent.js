import React, { Component } from 'react';
export default class FirstComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const element = <div>Text from Element</div>;
		return (
			<div className="comptext">
				<h1>First Component</h1>
				{this.props.displaytext}
				{element}
			</div>
		);
	}
}
