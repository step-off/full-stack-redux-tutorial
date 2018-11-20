import {Map} from "immutable";

export function next(state) {
	const winners = getWinners(state.get('vote'));
	const entries = state.get('entries').concat(winners);

	if (entries.size === 1) {
		return state.remove('vote')
			.remove('entries')
			.set('winner', entries.first());
	}

	return state.merge({
		vote: Map({pair: entries.take(2)}),
		entries: entries.skip(2)
	});
}

function getWinners(vote) {
	if (!vote) {
		return [];
	}
	const [a, b] = vote.get('pair');
	const aVotes = vote.getIn(['tally', a], 0);
	const bVotes = vote.getIn(['tally', b], 0);

	if (aVotes > bVotes) {
		return [a];
	} else if (aVotes < bVotes) {
		return [b];
	} else {
		return [a, b];
	}
}