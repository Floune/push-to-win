<template>
  <v-app>
    <v-toolbar color="indigo" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Push to Win</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    Nothing here for this moment....
    <router-view>
  
    </router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
  
      }
    }
  }
</script>
