<template>
  <div>
    <slot>Text in Slots Example</slot>
    <slot name="title"></slot>
    <slot name="body"></slot>
  </div>
</template>
<style>
  h1{
    color: blue;
  }
</style>
