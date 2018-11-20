import {List, Map} from "immutable/dist/immutable";
import {next} from "../next";
import {expect} from "chai";

describe('next', () => {

	it('takes the next two entries under vote', () => {
		const state = Map({
			entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
		});
		const nextState = next(state);
		expect(nextState).to.equal(Map({
			vote: Map({
				pair: List.of('Trainspotting', '28 Days Later')
			}),
			entries: List.of('Sunshine')
		}));
	});

	it('puts winner of current vote back to entries', () => {
		const state = Map({
			vote: Map({
				pair: List.of('Trainspotting', '28 Days Later'),
				tally: Map({
					'Trainspotting': 4,
					'28 Days Later': 2
				})
			}),
			entries: List.of('Sunshine', 'Millions', '127 Hours')
		});
		const nextState = next(state);
		expect(nextState).to.equal(Map({
			vote: Map({
				pair: List.of('Sunshine', 'Millions')
			}),
			entries: List.of('127 Hours', 'Trainspotting')
		}));
	});

	it('puts both from tied vote back to entries', () => {
		const state = Map({
			vote: Map({
				pair: List.of('Trainspotting', '28 Days Later'),
				tally: Map({
					'Trainspotting': 3,
					'28 Days Later': 3
				})
			}),
			entries: List.of('Sunshine', 'Millions', '127 Hours')
		});
		const nextState = next(state);
		expect(nextState).to.equal(Map({
			vote: Map({
				pair: List.of('Sunshine', 'Millions')
			}),
			entries: List.of('127 Hours', 'Trainspotting', '28 Days Later')
		}));
	});

	it('sets winner when just one entry left', () => {
		const state = Map({
			vote: Map({
				pair: List.of('Trainspotting', '28 Days Later'),
				tally: Map({
					'Trainspotting': 4,
					'28 Days Later': 2
				})
			}),
			entries: List()
		});
		const nextState = next(state);
		expect(nextState).to.equal(Map({
			winner: 'Trainspotting'
		}));
	});

});