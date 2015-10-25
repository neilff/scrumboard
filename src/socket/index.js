import io from 'socket.io-client';

const socket = io(__SOCKET_IO_SERVER__).connect();

console.info('Socket.io Server :: ', __SOCKET_IO_SERVER__);

export default socket;
