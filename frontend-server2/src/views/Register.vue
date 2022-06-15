<template>
  <v-card width="600" class="mx-auto py-12" >
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="data.name"
        :counter="10"
        label="Login"
        required
        class="mx-auto px-12"
        placeholder="Имя"
      ></v-text-field>
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
        Регистрация
      </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  components: {
  },
  setup () {
    const data = reactive({
      name: '',
      email: '',
      password: ''
    })

    const router = useRouter()

    const submit = async () => {
      console.log(data)
      await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(data)
      })

      await router.push('/login')
    }

    return {
      data,
      submit
    }
  }
}
</script>
