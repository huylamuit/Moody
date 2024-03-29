import Vue from 'vue'
import App from './App.vue'
import Track from './pages/Track.vue'
import MusicApp from './pages/MusicApp.vue'
import Artist from './pages/Artist.vue'
import Search from './pages/SearchPage.vue'
import Section from './pages/section.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faVolumeLow } from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import { faList } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { faHome } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faBackwardStep)
library.add(faForwardStep)
library.add(faPause)
library.add(faPlay)
library.add(faVolumeHigh)
library.add(faVolumeLow)
library.add(faVolumeMute)
library.add(faHeart)
library.add(faMagnifyingGlass)
library.add(faHome)

library.add(faList)
library.add(faMicrophone)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const NotFound = { template: '<p>Không tìm thấy</p>' }
const routes = {
  '/': App,
  '/music-app':MusicApp,
  '/music-app/track': Track,
  '/music-app/artist': Artist,
  '/music-app/search': Search,
  '/music-app/section': Section
}
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})  