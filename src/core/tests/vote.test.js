import {List, Map} from "immutable/dist/immutable";
import {vote} from "../vote";
import {expect} from "chai";

describe('vote', () => {
	it('creates a tally for the voted entry', () => {
		const state = Map({
			pair: List.of('Trainspotting', '28 Days Later')
		});
		const nextState = vote(state, 'Trainspotting');
		expect(nextState).to.equal(Map({
			pair: List.of('Trainspotting', '28 Days Later'),
			tally: Map({
				'Trainspotting': 1
			})
		}));
	});

	it('adds to existing tally for the voted entry', () => {
		const state = Map({
			pair: List.of('Trainspotting', '28 Days Later'),
			tally: Map({
				'Trainspotting': 3,
				'28 Days Later': 2
			})
		});
		const nextState = vote(state, 'Trainspotting');
		expect(nextState).to.equal(Map({
			pair: List.of('Trainspotting', '28 Days Later'),
			tally: Map({
				'Trainspotting': 4,
				'28 Days Later': 2
			})
		}));
	});
})