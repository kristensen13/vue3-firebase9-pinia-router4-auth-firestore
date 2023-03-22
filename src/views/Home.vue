<template>
    <div>
        <h1>Home</h1>
        <p>{{ userStore.userData?.email }}</p>
        <form @submit.prevent="handleSubmit()">
            <input type="text" placeholder="Ingrese URL" v-model="url">
            <button type="submit">Agregar</button>
        </form>
        <p v-if="dataBaseStore.loadingDoc">Loading Docs...</p>
        <ul v-else>
            <li v-for="item of dataBaseStore.documents" :key="item.id">
                {{ item.id }} - {{ item.name }}
                <br>
                {{ item.short }}
                <br>
                <button @click="dataBaseStore.deleteUrl(item.id)">Eliminar</button>
                <button @click="router.push(`/editar/${item.id}`)">Editar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useDatabaseStore } from '../stores/database';
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
const dataBaseStore = useDatabaseStore()
const url = ref('')
const handleSubmit = ()=>{
    // TODO: validaciones de url
    dataBaseStore.addUrl(url.value)
}
const router = useRouter()

dataBaseStore.getUrls()
</script>
