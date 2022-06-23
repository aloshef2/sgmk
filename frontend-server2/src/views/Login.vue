<template>
    <form @submit.prevent="submit">
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
import { reactive } from '@vue/reactivity';
import {  useRouter } from 'vue-router';
export default {
  name: "Login",
  setup() {
    const data = reactive({
    email: '',
    password: ''
    });

    const router = useRouter();

    const submit = async () => {
        const login = await fetch('http://localhost:3000/users/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        credentials: 'include',
        mode: "cors",
        body: JSON.stringify(data),
        });
        if(login.ok){
            router.push('/');
        }
    }
    return { data, submit }
  }
}
</script>