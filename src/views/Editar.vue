<template>
    <div>
        <h1>Editar id: route.params</h1>
        <form @submit.prevent="handleSubmit()">
            <input type="text" placeholder="Ingrese URL" v-model="url">
            <button type="submit">Editar</button>
        </form>
    </div>
</template>

<script setup>
import { async } from '@firebase/util';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '../stores/database'

const route = useRoute()
const dataBaseStore = useDatabaseStore()

//console.log(route.params);
const handleSubmit = () => {
    // TODO: Validaciones 
    dataBaseStore.updateUrl(route.params.id, url.value)
}

const url = ref('')
onMounted(async () => {
    url.value = await dataBaseStore.leerUrl(route.params.id)
})
</script>