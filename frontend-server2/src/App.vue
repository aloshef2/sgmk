<template>
  <v-app>
    <v-app-bar app>
      <Nav/>
    </v-app-bar>
    <v-main class="mx-auto my-12">
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '@/components/Nav.vue'

export default defineComponent({
  name: 'App',
  components: { Nav },
  data () {
    return {
      //
    }
  }
})
</script>
