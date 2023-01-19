import {io} from 'socket.io-client'



export const initSocket=async()=>{
    const options={
        'force new connection':true,
        reconnectionAttempt:'Infinity',
        timeout:10000,
        transports:['websocket']
    };

    return io(process.env.React_APP_BACKEND_URL,options)
}