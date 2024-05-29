<script setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <div class="grid h-screen w-full">
    <div class="flex flex-col">
      <main class="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <slot name="aside"></slot>
        </div>
        <div class="lg:col-span-2" >
          <div class="flex-1" />
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>
