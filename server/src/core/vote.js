export function vote(voteState, entry) {
	return voteState.updateIn(
		['tally', entry],
		0,
		tally => tally + 1
	);
}