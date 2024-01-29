<template>
  <v-container fluid class="mb-10">
    <v-app-bar
        color="orange"
        dark
    >
      <v-spacer></v-spacer>
      <v-btn outlined class="mr-4">

        <router-link to="/">Главная</router-link>
      </v-btn>
      <v-btn outlined class="mr-4">
      <router-link to="/photo">Фото</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>

</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

</style>


