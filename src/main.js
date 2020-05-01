// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueThinModal from 'vue-thin-modal'
import '~/styles/global.scss'
import '~/styles/utils.scss'
import '~/styles/modal.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueThinModal)
  Vue.component('Layout', DefaultLayout)

  router.afterEach((to, from) => {
    if (isClient) {
      var interval = setInterval(function() {
        if (typeof window.dojoRequire !== 'undefined' && !window.mailchimpInitialized) {
          window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
            L.start({
              baseUrl: 'mc.us8.list-manage.com',
              uuid: '9c9d79402355b38121d6060c9',
              lid: '7968226263',
              uniqueMethods: true,
            })
          })
          window.mailchimpInitialized = true
          clearInterval(interval)
        }
      }, 50)
    }
  })
}
