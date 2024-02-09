
<script setup lang="ts">
import { ref } from 'vue';
import {createUserWithEmailAndPassword} from "firebase/auth"

const email = ref('');
const password = ref('');
const {$auth}=useNuxtApp()



const handleSubmit =async () => {
    try {
     const res=   await createUserWithEmailAndPassword($auth,email.value, password.value);
     console.log(res)
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
