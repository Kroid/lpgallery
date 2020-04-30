<template>
  <Layout>
    <div class="thumbnail-container">
      <g-link :to="'/landing/' + edge.node.id + '/'" class="thumbnail" v-for="edge in $page.landings.edges">
        <!-- <div class="text-center resolution">1366x768</div> -->
        <div class="text-center resolution">{{ edge.node.id }}</div>
        <g-image class="" :src="thumbnailUrl(edge.node.id, '1366x768')" alt="" />
        <!-- <img class="" :src="thumbnailUrl(edge.node.id, '1366x768')" alt="" /> -->
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  landings: allLanding {
    edges {
      node {
        id
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  methods: {
    thumbnailUrl(landingId, resolution) {
      return `/landings/${landingId}/${resolution}-cropped.png`
    },
  },
}
</script>

<style scoped>
.resolution {
  /* color: #fff; */
  /* background: #000; */
  color: #363636;
  /* background: #dadada; */
  font-size: 120%;
  /* background: #02020294; */
  padding: 10px;
}
.thumbnail-container {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
}

.thumbnail {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  border: 1px solid #dadada;
}

.thumbnail img {
  object-fit: fill;
  width: 100%;
}

@media (min-width: 1900px) {
  .thumbnail-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1366px) {
  .thumbnail-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .thumbnail-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .thumbnail-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 360px) {
  .thumbnail-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
