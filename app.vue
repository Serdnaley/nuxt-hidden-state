<script setup>
import { useAsyncData } from '#app'

const dataStore = useDataStore()

await useAsyncData('data', async () => {
  const data = await $fetch('/api/data')

  dataStore.setData(data)

  return true
})
</script>

<template>
  <h1>Hello here</h1>
  <p v-for="item in dataStore.data" :key="item.id">{{ item.text }}</p>
</template>
