<template>
<main class="main">
  <div class="row">
    <div class="col-sm-8">
      <div v-for="image in images" v-bind:key="image.id">
        <img :src="image.src" :alt="image.alt" class="float-right" />
        <div v-for="item in items" v-bind:key="item.id">
          <h6>{{ item.title }}</h6>
          <p>{{ item.paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
const image1 = require('../assets/pic-8.jpg')
const image2 = require('../assets/pic-9.jpg')
const image3 = require('../assets/pic-10.jpg')
const image4 = require('../assets/pic-11.jpg')
const image5 = require('../assets/pic-12.jpg')
const image6 = require('../assets/pic-13.jpg')
export default {
  el: '#grid',
  data () {
    return {
      images: [
        {
          src: image1,
          alt: '...'
        },
        {
          src: image2,
          alt: '...'
        },
        {
          src: image3,
          alt: '...'
        },
        {
          src: image4,
          alt: '....'
        },
        {
          src: image5,
          alt: '....'
        },
        {
          src: image6,
          alt: '....'
        }
      ],
      items: [
        {
          title: 'Tasty Recepies'
        },
        {
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, voluptatibus quae veniam ab, quia, rerum, magnam consectetur nam placeat eum maiores.'
        }
      ]
    }
  }
}
</script>
<style/>
