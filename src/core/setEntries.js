import {List} from "immutable/dist/immutable";

export function setEntries(state, entries) {
	return state.set('entries', List(entries));
}