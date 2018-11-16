import {List, Map} from "immutable/dist/immutable";
import {setEntries} from "../setEntries";
import {expect} from "chai";

describe('setEntries', () => {

	it('adds the entries to the state', () => {
		const state = Map();
		const entries = List.of('Trainspotting', '28 Days Later');
		const nextState = setEntries(state, entries);
		expect(nextState).to.equal(Map({
			entries: List.of('Trainspotting', '28 Days Later')
		}));
	});

	it('converts to immutable', () => {
		const state = Map();
		const entries = ['Trainspotting', '28 Days Later'];
		const nextState = setEntries(state, entries);
		expect(nextState).to.equal(Map({
			entries: List.of('Trainspotting', '28 Days Later')
		}));
	});

});