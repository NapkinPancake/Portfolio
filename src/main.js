import Vue from 'vue'
import App from './App.vue'
import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import Tree from './components/Tree.vue'
import Achievements from './components/Achievements.vue'
import Tools from './components/Tools.vue'
import Projects from './components/Projects.vue'
import Coloboration from './components/Coloboration.vue'
import Footer from './components/Footer.vue'



// Animation On Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

// Modal Window
import VModal from 'vue-js-modal'
Vue.use(VModal)

Vue.component( 'app-preloader' , Preloader )
Vue.component( 'app-header' , Header )
Vue.component( 'app-tree' , Tree )
Vue.component( 'app-achievements' , Achievements)
Vue.component( 'app-tools' , Tools)
Vue.component( 'app-projects' , Projects)
Vue.component( 'app-coloboration' , Coloboration )
Vue.component( 'app-footer' , Footer)


Vue.config.productionTip = false

 new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
 

