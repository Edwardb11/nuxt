
<script setup lang="ts">
import { ref } from 'vue';
const email = ref('');
const password = ref('');

const {register}= useFirebaseAuth()

const handleSubmit =async () => {
    try {
        await register(email.value, password.value);
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <h1>Register page</h1>
    <form @submit.prevent="handleSubmit">
        <input label="Email" type="email" v-model="email" />
        <input label="Password" type="password" v-model="password" />
        <button type="submit">Registro</button>
    </form>
</template>
