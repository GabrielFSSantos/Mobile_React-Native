/**
 * iOS com Emulador: localhost
 * iOS com físico: IP da máquina 
 * 
 * Android com Emulador: localhost (adb reverse tcp:3333 tcp:3333)
 * Android com físico: IP da máquina 
 */

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;