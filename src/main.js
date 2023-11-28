import Vue from 'vue'


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


/* add icons to the library */
library.add(faUserSecret)
library.add(faBackwardStep)
library.add(faForwardStep)
library.add(faPause)
library.add(faPlay)
library.add(faVolumeHigh)
library.add(faVolumeLow)
library.add(faVolumeMute)


library.add(faList)
library.add(faMicrophone)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
import App from './App.vue'
import Track from './pages/Track.vue'
import MusicApp from './pages/MusicApp.vue'
const NotFound = { template: '<p>Không tìm thấy</p>' }
const routes = {
  '/': App,
  '/music-app':MusicApp,
  '/music-app/track': Track
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