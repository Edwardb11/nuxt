<template>
    <section class="flex justify-center items-center h-screen">
      <div class="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg flex">
        <div class="w-1/2 mr-2 pr-4 border-r border-gray-300">
          <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
          <form @submit.prevent="signUp">
            <div class="mb-4">
              <label for="email" class="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                v-model="createUser.email"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                v-model="createUser.password"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Sign Up</button>
          </form>
        </div>
  
        <div class="w-1/2 ml-2 pl-4">
          <h2 class="text-2xl font-bold mb-4">Login</h2>
          <form @submit.prevent="login">
            <div class="mb-4">
              <label for="email" class="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                v-model="loginUser.email"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                v-model="loginUser.password"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Login</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
    const supabase = useSupabaseClient()
  
  const createUser = reactive({
    email: '',
    password: '',
  })
  const loginUser = reactive({
    email: '',
    password: '',
  })
  const signUp = async () => {
    const {  error } = await supabase.auth.signUp({
      email: createUser.email,
      password: createUser.password,
    })
    error ? alert(error): navigateTo('/confirm')
  }
  
  const login = async () => {
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email: loginUser.email,
      password: loginUser.password,
    })
    error ? alert(error): navigateTo('/protected')
  }
  </script>
  