<script setup>
import { onBeforeUnmount } from 'vue'
import { useRegister } from '@/stores/register'

const store = useRegister()

onBeforeUnmount(store.resetForm)
</script>

<template>
  <form @submit.prevent="store.handleSubmit" novalidate>
    <div class="flex flex-col mx-auto md:w-96 w-full">
      <h1 class="text-2xl font-bold mb-4 text-center">Inscription</h1>
      <div class="flex flex-col gap-2 mb-4">
        <label for="name" class="required">Nom</label>
        <input
          id="name"
          v-model="store.form.name"
          name="name"
          type="text"
          class="form-input"
          autocomplete="name"
          required
        />
        <ValidationError :errors="store.errors" field="name" />
      </div>

      <div class="flex flex-col gap-2 mb-4">
        <label for="email" class="required">Email</label>
        <input
          id="email"
          v-model="store.form.email"
          name="email"
          type="email"
          class="form-input"
          autocomplete="email"
          required
        />
        <ValidationError :errors="store.errors" field="email" />
      </div>

      <div class="flex flex-col gap-2 mb-4">
        <label for="password" class="required">Mot de passe</label>
        <input
          id="password"
          v-model="store.form.password"
          name="password"
          type="password"
          class="form-input"
          autocomplete="new-password"
          required
        />
        <ValidationError :errors="store.errors" field="password" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="password_confirmation" class="required"> Confirmez le mot de passe </label>
        <input
          id="password_confirmation"
          name="password_confirmation"
          v-model="store.form.password_confirmation"
          type="password"
          class="form-input"
          autocomplete="new-password"
          required
        />
        
      </div>

      <div class="border-t h-[1px] my-6"></div>

      <div class="flex flex-col gap-2">
        <button type="submit" class="btn btn-primary">Valider</button>
      </div>
    </div>
  </form>
</template>
