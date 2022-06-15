import './assets/reset.css';

import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from './router'

library.add(faCartShopping);
library.add(faLocationDot);
library.add(faPlus);

createApp(App).use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

