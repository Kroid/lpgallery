<template>
  <div class="container">
    <h1 class="text-center">
      {{ $page.landing.id }}
    </h1>
    <div class="thumbnail-container">
      <div class="thumbnail thumbnail-1366x768">
        <div class="text-center modal-resolution">1366x768</div>
        <img
          class=""
          :src="thumbnailUrl($page.landing.id, '1366x768')"
          alt=""
          @click="show($page.landing.id, '1366x768')"
        />
      </div>
      <div class="thumbnail thumbnail-360x640">
        <div class="text-center modal-resolution">360x640</div>
        <img
          class=""
          :src="thumbnailUrl($page.landing.id, '360x640')"
          alt=""
          @click="show($page.landing.id, '360x640')"
        />
      </div>
      <div class="thumbnail thumbnail-768x1024">
        <div class="text-center modal-resolution">768x1024</div>
        <img
          class=""
          :src="thumbnailUrl($page.landing.id, '768x1024')"
          alt=""
          @click="show($page.landing.id, '768x1024')"
        />
      </div>
      <div class="thumbnail thumbnail-1024x1366">
        <div class="text-center modal-resolution">1024x1366</div>
        <img
          class=""
          :src="thumbnailUrl($page.landing.id, '1024x1366')"
          alt=""
          @click="show($page.landing.id, '1024x1366')"
        />
      </div>
      <div class="thumbnail thumbnail-1920x1080">
        <div class="text-center modal-resolution">1920x1080</div>
        <img
          class=""
          :src="thumbnailUrl($page.landing.id, '1920x1080')"
          alt=""
          @click="show($page.landing.id, '1920x1080')"
        />
      </div>
    </div>

    <modal name="landing">
      <figure class="pointer" @click="hide()">
        <div class="text-center modal-resolution">
          {{ modal.resolution }}
        </div>
        <img class="max-width-100 pointer" :src="fullUrl(modal.landing, modal.resolution)" alt="" />
        <div class="text-center modal-resolution">
          {{ modal.resolution }}
        </div>
      </figure>
    </modal>
  </div>
</template>

<page-query>
query($id: ID!) {
  landing(id: $id) {
    id,
    url
  },
  resolutions: allResolutions {
    edges {
      node {
        id,
        width,
        height,
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      modal: {
        landing: null,
        resolution: null,
      },
    }
  },
  methods: {
    show(landing, resolution) {
      this.modal.landing = landing
      this.modal.resolution = resolution
      this.$modal.push('landing')
    },
    hide() {
      this.$modal.pop('landing')
      this.modal.landing = null
      this.modal.resolution = null
    },
    thumbnailUrl(landingId, resolution) {
      return `/landings/${landingId}/${resolution}-cropped.png`
    },
    fullUrl(landingId, resolution) {
      return `/landings/${landingId}/${resolution}.png`
    },
    // thumbnailUrl(landingId, resolutionEdge) {
    //   return `/landings/${landingId}/${resolutionEdge.node.id}-cropped.png`
    // },
    // thumbnaiWidth(edge) {
    //   let width = edge.node.width
    //   while (width > 360) width = width / 2
    //   // if (width > 360) width = width / 2
    //   return width
    // },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-variant: small-caps;
  // text-transform: uppercase;
}

.modal-resolution {
  color: #fff;
  font-size: 120%;
  background: #02020294;
  padding: 10px;
}

.thumbnail-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
}

.thumbnail {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.thumbnail img {
  object-fit: fill;
  width: 100%;
}

.thumbnail-360x640 {
  max-width: 360px;
}

.thumbnail-1366x768 {
  grid-column-start: 1;
  grid-column-end: 4;
}

.thumbnail-768x1024 {
  grid-column-start: 1;
  grid-column-end: 3;
}

.thumbnail-1024x1366 {
  grid-column-start: 3;
  grid-column-end: 5;
}

.thumbnail-1920x1080 {
  grid-column-start: 1;
  grid-column-end: 5;
}

@media (max-width: 360px) {
  .thumbnail-container {
    grid-template-columns: repeat(1, 1fr);
  }

  .thumbnail-360x640 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
  }

  .thumbnail-768x1024 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
  }

  .thumbnail-1024x1366 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
  }

  .thumbnail-1366x768 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 4;
  }

  .thumbnail-1920x1080 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
  }
}
</style>
