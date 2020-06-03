<template>
  <button @click="handleClick">{{name}}</button>
</template>

<script>
export default{
  props: ['name', 'handleClick']
}
</script>
