import { createApp } from 'vue';
import axios, {isCancel, AxiosError} from 'axios';
import App from './App.vue';

createApp(App)
.mount('#app')
.use(axios, isCancel, AxiosError)
