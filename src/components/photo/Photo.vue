<template>
  {{photo.id + " " + photo.title + " "}}
</template>

<script>
export default {
  name:'PhotoCard',
  props:{
    photo:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>