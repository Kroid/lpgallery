// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueThinModal from 'vue-thin-modal'
import '~/styles/utils.scss'
import '~/styles/modal.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueThinModal)
  Vue.component('Layout', DefaultLayout)
}
