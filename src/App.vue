<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('qe')
    let mailchimpScript = document.createElement('script')
    mailchimpScript.setAttribute('src', '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js')
    mailchimpScript.setAttribute('config', 'usePlainJson: true, isDebug: false')
    document.head.appendChild(mailchimpScript)
  },
}
</script>
