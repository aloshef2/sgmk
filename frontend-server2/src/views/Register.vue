<template>
    <form @submit.prevent="submit">
      <div class="form-floating">
        <input v-model="data.name" class="form-control" id="floatingLogin" placeholder="login">
        <label for="floatingLogin">Login</label>
      </div>
      <div class="form-floating">
        <input v-model="data.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating">
        <input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Пароль</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Запомнить меня
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
    </form>
</template>

<script lang="ts">
import { reactive } from 'vue';
import {  useRouter } from 'vue-router';

export default {
  name: "Register",
  setup() {
    const data = reactive({
      name: '',
      email: '',
      password: ''
    });
    const router = useRouter();
    const submit = async () => {
      await fetch('http://localhost:3000/users/register',{
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        mode: 'cors',
        body: JSON.stringify(data),
      });
      await router.push('/login');
    }
    return {
      data,
      submit
    }
  }
}
</script>