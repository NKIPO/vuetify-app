<template>
  <v-container>
    <PhotoCard
    v-for="photo in photos"
    :key="photo.id"
    v-bind:photo="photo"
    />
  </v-container>
</template>

<script>
import PhotoCard from "@/components/photo/Photo";
export default {
  name: "PhotoPage",
  components: {PhotoCard},
  data: () => ({
    photos:[
      {
        id:1,
        title:'photo1'
      },
      {
        id:2,
        title:'photo2'
      },
      {
        id:3,
        title:'photo3'
      },
      {
        id:4,
        title:'photo4'
      },
    ]
  }),
  mounted() {

  }
}
</script>

<style scoped>

</style>