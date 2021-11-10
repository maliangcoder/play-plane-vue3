import App from './App.vue'
import {createApp} from './runtime-canvas'
import {getRootContainer} from './game'

console.warn = () => {}
createApp(App).mount(getRootContainer())