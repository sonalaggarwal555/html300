<script>
export default {
  name: 'photos',
  props: {
    image: {
      src: String,
      alt: String,
      title: String
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="card">
      <img :src="image.src" :alt="image.alt" id="border" class="frame card-img-top img-fluid rounded">
      <div class="caption">{{ image.caption }}</div>
      <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right">Click Here</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.card {
  width: 30rem;
  margin: 0.3rem;
}
.frame {
  padding: 0.3rem;
  background-color: #e4cece;
}
.img{
  width: 20%;
}
</style>
