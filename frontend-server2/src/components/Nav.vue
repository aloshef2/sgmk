<template>
    <v-tabs
    class="d-flex align-center mb-6"
    flat
    height="100"
    >
      <v-tab>
        <router-link to="/" >Главная</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/login" >Войти</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/register" >Регистрация</router-link>
      </v-tab>
    </v-tabs>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav'
}
</script>
