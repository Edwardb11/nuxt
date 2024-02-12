<template>
  <div>
    <nav class="bg-gray-800 text-white py-4">
      <ul class="flex justify-between items-center max-w-4xl mx-auto">
        <li><nuxt-link to="/" class="hover:text-gray-300">Home</nuxt-link></li>
        <li v-if="user"><nuxt-link to="/protected" class="hover:text-gray-300">Protected</nuxt-link></li>
        <li><nuxt-link to="/auth" class="hover:text-gray-300">Auth</nuxt-link></li>
        <li v-if="user">
          <button @click="logout" class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">Salir</button>
        </li>
      </ul>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
let logout = async() => {
  let { error } = await supabase.auth.signOut()
  if (error) {
    alert(error.message)
  }
  navigateTo('/')
}

</script>