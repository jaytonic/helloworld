import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import App from './App.vue';
import router from './router';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';

createApp(App)
  .use(router)
  .use(PrimeVue)
  .component('TabView', TabView)
  .component('TabPanel', TabPanel)
  .component('Card', Card)
  .component('InputText', InputText)
  .component('Button', Button)
  .component('Divider', Divider)
  .mount('#app');
