import io from 'socket.io-client';
const socket = io('http://scrumboard.ca:5001').connect();

export default socket;
