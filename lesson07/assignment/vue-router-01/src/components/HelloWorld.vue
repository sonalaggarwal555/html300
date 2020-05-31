<script>
const image1 = require('../assets/cover.jpg')
const image2 = require('../assets/cover2.jpg')
export default {
  data () {
  return {
  features: [{
  title: 'title-1,desc: This the description..',
  image: image1,
  alt:'img1'
  },
  {
  title: 'title-2,desc: This the description..',
  image: image2,
  alt:'img2'
  }
  ]
  }
  }
}
</script>

<template>
<main class="main">
  <div v-for="feature in features" class="jumbotron jumbotron-fluid" v-bind:key="feature.id">
    <div class="container">
      <h3 class="display-4">{{feature.title}}</h3>
      <p class="lead">{{feature.desc}}</p>
      <img :src="feature.image" class="img-fluid" :alt="feature.alt">
    </div>
  </div>
</main>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 95%;
  margin: 1rem;
  padding: 1rem;
}

.img-fluid {
  margin-bottom: 1rem;
  width: 70%;
}

img {
  width: 50%;
}
</style>
