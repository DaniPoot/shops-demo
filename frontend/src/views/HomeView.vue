<script setup>
import supabase from '@/boot/supabase'

async function retrieveSession() {
  const { data } = await supabase.retriveUser()
  if (data) {
    supabase.setAccessToken()
  }
}
retrieveSession()
</script>


<template>
  <h1>Full Stack Demo App</h1>
  <p>This site is using: </p>
  <ul>
    <li>Vue ecosystem</li>
    <li>Mapbox</li>
    <li>Shadcn/Vue</li>
  </ul>
</template>

<style></style>
