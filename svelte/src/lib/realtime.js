import ioClient from "socket.io-client";

const url = "http://localhost:5000";

const io = ioClient(import.meta.env.DEV ? url : "/");

export const socket = io;
