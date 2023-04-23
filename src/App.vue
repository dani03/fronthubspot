<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuth } from '@/stores/auth'

const auth = useAuth()
</script>

<template>
  <header class="py-6 bg-gray-100 shadow">
    <div class="container md:px-2 px-4 mx-auto">
      <nav class="flex gap-4 justify-between">
        <div class="flex gap-4 items-center">
          <h2 class="text-xl font-bold">
            <div
              class="inline-flex items-center justify-center bg-indigo-600 w-6 h-6 text-center text-white rounded"
            >
              K
            </div>
            affe!n
          </h2>
          <template v-if="auth.check">
            <RouterLink class="router-link" :to="{ name: 'companies.index' }">
              companies
            </RouterLink>
          </template>
          <template v-else>
            <RouterLink class="router-link" :to="{ name: 'home' }"> Home </RouterLink>
          </template>
        </div>
        <div class="flex gap-4 items-center">
          <template v-if="auth.check">
            <button @click="auth.logout" class="router-link">deconecte toi</button>
          </template>
          <template v-else>
            <RouterLink class="router-link" :to="{ name: 'login' }"> se connecter </RouterLink>
            <RouterLink class="router-link" :to="{ name: 'register' }"> inscription </RouterLink>
          </template>
        </div>
      </nav>
    </div>
  </header>

  <div class="container md:px-2 px-4 pt-8 md:pt-16 mx-auto">
    <RouterView />
  </div>
</template>
