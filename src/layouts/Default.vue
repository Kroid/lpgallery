<template>
  <div class="layout">
    <header>
      <h1 class="text-center">
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </h1>
      <p class="text-center">Collection of screenshots from various landing pages with different screen sizes.</p>
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
    </header>
    <slot />

    <div>
      <mailchimp-form></mailchimp-form>
      <p class="text-center">
        Do you have any questions?
        <a href="/feedback">Contact me</a>
      </p>
    </div>

    <footer class="text-center">
      © 2020
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import mailchimpForm from '@/components/mailchimp-form'
export default {
  components: {
    mailchimpForm,
  },
}
</script>

<style lang="scss" scoped>
header {
  margin: 1rem;

  h1 {
    margin-bottom: 1rem;
  }

  a {
    color: #363636;
  }
}

footer {
  margin-top: 1rem;
}
</style>
