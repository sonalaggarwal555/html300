<template>
<body>
  <div class="container">
    <div v-for="image in images" class="card" v-bind:key="image.id">
      <img :src="image.src" :alt="image.alt" class="card-img-top img-fluid">
      <div class="caption"> {{ image.caption }} </div>
    </div>
  </div>
</body>
</template>

<script>
var card1 = require('../assets/pic-1.jpg')
var card2 = require('../assets/pic-2.jpg')
var card3 = require('../assets/pic-3.jpg')
var card4 = require('../assets/pic-4.jpg')
var card5 = require('../assets/pic-5.jpg')
var card6 = require('../assets/pic-6.jpg')
export default {
  name: 'Images',
  data () {
    return {
      images: [{
        src: card1,
        alt: '...',
        caption: 'Classic Red: Our most popular tulip, this classic is the quintessential sign of spring.'
      },
      {
        src: card2,
        alt: '...',
        caption: 'Fire on the Mountain: With petals that look like flames, this tulip is only for the bold.'
      },
      {
        src: card3,
        alt: '...',
        caption: 'Amethyst: If you love a splash of purple, this one is for you.'
      },
      {
        src: card4,
        alt: '...',
        caption: 'Peach Sunrise: One of our rare varieties, this tulip only makes an appearance every few years.'
      },
      {
        src: card5,
        alt: '...',
        caption: 'Scarlett Letter: This head-turner is great in a mixed bouquet for a vibrant pop of color.'
      },
      {
        src: card6,
        alt: '...',
        caption: 'Snow Top: Can brighten up any room or corner of your garden.'
      }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  width: 30rem;
  margin-left: 20rem;
  margin-bottom: 2rem;
}

.caption {
  padding: 1rem;
}
</style>
