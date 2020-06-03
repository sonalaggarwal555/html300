<script>
import photos from './photos.vue'
import mixins from './mixins'
import Button from './Button.vue'

var card1 = require('../assets/pic-1.jpg')
var card2 = require('../assets/pic-2.jpg')
var card3 = require('../assets/pic-3.jpg')
var card4 = require('../assets/pic-4.jpg')
var card5 = require('../assets/pic-5.jpg')
var card6 = require('../assets/pic-6.jpg')

export default {
  name: 'Images',
  mixins: [mixins],
  components: {
    photos,
    'my-button': Button
  },
  data () {
    return {
      images: [
        {src: card1, alt: '...', caption: 'Classic Red: Our most popular tulip.'},
        {src: card2, alt: '...', caption: 'Fire on the Mountain: With petals that look like flames.'},
        {src: card3, alt: '...', caption: 'Amethyst: If you love a splash of purple.'},
        {src: card4, alt: '...', caption: 'Peach Sunrise: One of our rare varieties.'},
        {src: card5, alt: '...', caption: 'Scarlett Letter: This head-turner is great in a mixed bouquet.'},
        {src: card6, alt: '...', caption: 'Snow Top: Can brighten up any room.'}
      ]
    }
  }
}
</script>

<template>
<div id="app">
  <!-- First Prop -->
  <div>
    <h1>My first post</h1>
    <p>This is a post for props</p>
    <my-button name="Share"></my-button>
    <my-button name="Like"></my-button>
    <my-button name="Comment"></my-button>
  </div>
  <!-- Display images -->
  <div class="container" v-if="images">
  <photos
    v-for="image in images"
    :image="image"
    :key="image.src"
    />
  </div>
  <!--Button mixin to remove border from image-->
  <section v-if="images">
    <button v-if="myVal" @click="myMethod()">
      Remove border !
    </button>
  </section>
</div>
</template>

<style scoped>
button {
border-style: solid;
}
.card {
width: 30rem;
margin-left: 20rem;
margin-bottom: 2rem;
}
.caption {
padding: 1rem;
}
</style>
