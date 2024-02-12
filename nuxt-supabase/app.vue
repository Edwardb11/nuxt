<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li v-if="user"><nuxt-link to="/protected">Protected</nuxt-link></li>
        <li><nuxt-link to="/auth">Auth</nuxt-link></li>
        <li v-if="user"><button @click="logout">Salir</button></li>
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