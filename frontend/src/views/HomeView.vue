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
  <div class="text-center text-2xl">
    <h1 class="text-7xl font-semibold m-3">Full Stack Demo App</h1>
    <p>This site is using: </p>
    <ul class="text-xl list-disc">
      <li>Vue ecosystem</li>
      <li>Mapbox</li>
      <li>Shadcn/Vue</li>
    </ul>
  </div>
</template>

<style></style>
