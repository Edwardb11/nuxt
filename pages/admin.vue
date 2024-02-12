<template>
    <h1>Admin page{RUTA PROTEGIDA}</h1>
    <UButton @click="logout">Salir</UButton>
</template>

<script setup lang="ts">

const { logout } = useFirebaseAuth()


</script>