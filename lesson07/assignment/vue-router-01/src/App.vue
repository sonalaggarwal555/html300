<template>
<div id="app">

  <div class="row">
    <div class="col-sm-2">
      <ul class="nav flex-sm-column">
        <li class="nav-item">
          <router-link to="/" class="nav-link">HelloWorld</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/images" class="nav-link">Images</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/accordion" class="nav-link">Accordion</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/grid" class="nav-link">Grid system</router-link>
        </li>
      </ul>
    </div>
    <!-- Main content -->
    <div class="col-sm-10">
      <router-view />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
