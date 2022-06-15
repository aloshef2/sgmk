<template>
  <v-card width="600" class="mx-auto py-12" >
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="data.email"
        type="email"
        label="E-mail"
        required
        class="mx-auto px-12"
        placeholder="E-mail"
      ></v-text-field>
      <v-text-field
        v-model="data.password"
        label="Пароль"
        type="password"
        required
        class="mx-auto px-12"
        placeholder="Пароль"
      ></v-text-field>

      <v-btn
        class="mx-auto px-12 ml-12"
        @click="submit"
      >
        Войти
      </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  setup () {
    const data = reactive({
      email: '',
      password: ''
    })

    const router = useRouter()

    const submit = async () => {
      const login = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(data)
      })
      if (login.ok) {
        router.push('/')
      }
    }
    return {
      data,
      submit
    }
  }
}
</script>
