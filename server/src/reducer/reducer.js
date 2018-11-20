import {setEntries} from "../core/setEntries";
import {next} from "../core/next";
import {vote} from "../core/vote";
import {INITIAL_STATE} from "../core/initialState";

export function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_ENTRIES':
			return setEntries(state, action.entries);
		case 'NEXT':
			return next(state);
		case 'VOTE':
			const voteState = vote(state.get('vote', new Map()), action.entry);

			return state.update('vote', () => voteState);
		default:
			return state;
	}
}