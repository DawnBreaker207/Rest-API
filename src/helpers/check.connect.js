import mongoose from 'mongoose';
import os from 'os';
import process from 'process';
const _SECONDS = 5000;
// Check how many connect in system
export const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

// Check overload

export const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum number of connection based on number osf cores
    const maxConnection = numCores * 5;

    console.log(`Active connect: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnection) {
      console.log(`Connection overload detected`);
      // notify,send(...)
    }
    
  }, _SECONDS); //Monitor every 5 seconds
};