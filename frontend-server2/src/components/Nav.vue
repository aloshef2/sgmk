<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Домашняя</router-link>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/login" class="nav-link" >Войти</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link" >Регистрация</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'Nav'
}
</script>
