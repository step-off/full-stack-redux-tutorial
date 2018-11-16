import Server from 'socket.io';

export default function startServer(store) {
	const io = new Server().attach(8000);

	store.subscribe(
		() => io.emit('stateChange', store.getState().toJS())
	);

	io.on('connection', (socket) => {
		socket.emit('stateChange', store.getState().toJS());
		socket.on('action', store.dispatch.bind(store));
	});
}