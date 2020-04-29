<template>
  <div class="">
    {{ $page }}
  </div>
</template>

<page-query>
query {
  landing(id: "stripe") {
    id,
    url
  }
}
</page-query>

<script>
export default {}
</script>

<style lang="css" scoped></style>
