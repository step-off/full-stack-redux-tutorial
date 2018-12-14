import React from 'react';
import {VotingPair} from "./components/VotingPair/VotingPair";

const pair = ['Trainspotting', '28 Days Later'];

export class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <VotingPair pair={pair} />
    }
}