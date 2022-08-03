import './assets/reset.css';

import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from 'pinia'
import router from './router'

library.add(faCartShopping);
library.add(faXmark);
library.add(faLocationDot);
library.add(faAngleLeft);
library.add(faPlus);

createApp(App)
    .use(router)
    .use(createPinia())
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
    

