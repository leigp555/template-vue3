<template>
  <div class="wrapper">
    <div class="login" v-if="state === 'login'">
      <Login v-model:state="state" />
    </div>
    <div class="register" v-else-if="state === 'register'">
      <Register v-model:state="state" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const state = ref<'login' | 'register'>('login')
</script>

<style lang="scss" scoped></style>
