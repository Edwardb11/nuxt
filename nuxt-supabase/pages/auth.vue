<template>
    <section>
  <h2>Sign Up</h2>
<form @submit.prevent="signUp">
    <div>
        <label for="email">Email</label>
        <input
        type="email"
        id="email"
        v-model="createUser.email"
        />
    </div>
    <div>
        <label for="password">Password</label>
        <input
        type="password"
        id="password"
        v-model="createUser.password"
        />
    </div>
    <button type="submit">Sign Up</button>
</form>
    </section>
  </template>
  
  <script lang="ts" setup>
import { reactive } from 'vue'


const supabase = useSupabaseClient()

const createUser = reactive({
  email: '',
  password: '',
})
const signUp = async () => {
  const { user, session, error } = await supabase.auth.signUp({
    email: createUser.email,
    password: createUser.password,
  })
error ? console.log(error): navigateTo('/confirm')
}

</script>