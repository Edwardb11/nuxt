
<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleSubmit = () => {
    console.log({ email: email.value, password: password.value })
};
</script>

<template>
    <h1>Register page</h1>
    <form @submit.prevent="handleSubmit">
        <input label="Email" type="email" v-model="email" />
        <input label="Password" type="password" v-model="password" />
        <input type="submit">Register</input>
    </form>
</template>
