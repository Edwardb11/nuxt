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
    <section>
  <h2>login</h2>
<form @submit.prevent="login">
    <div>
        <label for="email">Email</label>
        <input
        type="email"
        id="email"
        v-model="loginUser.email"
        />
    </div>
    <div>
        <label for="password">Password</label>
        <input
        type="password"
        id="password"
        v-model="loginUser.password"
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
const loginUser = reactive({
  email: '',
  password: '',
})
const signUp = async () => {
  const { user, session, error } = await supabase.auth.signUp({
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
