import React from 'react';
import {VotingEntity} from "../VotingEntity/VotingEntity";

export class VotingPair extends React.Component{
	render() {
		return this.props.pair.map(entity => <VotingEntity entity={entity} />);
	}
}