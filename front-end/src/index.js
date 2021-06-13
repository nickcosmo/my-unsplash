import vueApp from './app/app.js';
import appImage from './app/components/app-image.js';
import uploadArea from './app/components/upload-area.js';

const app = Vue.createApp(vueApp);

app.component('upload-area', uploadArea);

app.component('app-image', appImage);

app.mount('#app');
