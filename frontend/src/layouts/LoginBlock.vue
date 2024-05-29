<script setup>
import { ref } from 'vue'
import supabase from '@/boot/supabase'
import { Button } from '@/components/ui/button'

const isAuthenticated = ref(false)

async function onSignIn() {
  const { error } = await supabase.loginWithGithub()
  if (error) {
    console.error(error)
    return
  }
}

async function retrieveSession() {
  const { data } = await supabase.retriveUser()
  if (data.user) {
    isAuthenticated.value = true
  }
}
retrieveSession()
</script>

<template>
  <div
    class="relative"
  >
    <div 
      class="absolute bottom-0 left-0 w-screen h-screen z-10 flex items-center justify-center backdrop-blur-md bg-white/30"
      v-if="!isAuthenticated"
    >
      <Button
        @click="onSignIn"
      >
        Login with Github
      </Button>
    </div>
    <slot></slot>
  </div>
</template>
