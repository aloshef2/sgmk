<template>
    <div>
        Home
    </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  name: "Home",
  setup() {
    const store  = useStore();
    onMounted(async () => {
      try {
      const responce = await fetch('hhttp://localhost:3000/users/user', {
      headers: {'Content-Type': 'application/json',},
      credentials: 'include',
      });
      await store.dispatch('setAuth', true);
      } catch (error) {
      await store.dispatch('setAuth', false);
      }
    });
  }
}
</script>