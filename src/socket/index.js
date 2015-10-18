import io from 'socket.io-client';

const socket = io(__SOCKET_IO_SERVER__).connect();

export default socket;
