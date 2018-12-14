import React from 'react';

export class VotingEntity extends React.Component{
	render() {
		const entity = this.props.entity;

		return (
			<button key={entity}>
				<h1>{entity}</h1>
			</button>
		)
	}
}