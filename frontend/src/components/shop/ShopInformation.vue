<script setup>
import {
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  LocateIcon
} from 'lucide-vue-next'

defineProps({
  shop: {
    type: Object,
  }
})

</script>

<template>
<div class="bg-white p-4 rounded-lg shadow-sm dark:bg-gray-950 m-auto overflow-hidden">
  <div class="space-y-4">
    <template v-if="shop">
      <div class="flex items-center gap-4">
        <div>
          <h3 class="font-medium">{{ shop.name }}</h3>
          <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <LocateIcon class="w-4 h-4" />
            <span>{{ shop.address.street }}, {{ shop.address.city }} {{ shop.address.state }} {{ shop.address.postalCode }},  {{ shop.address.country }}</span>
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <h4 class="font-medium">Contact</h4>
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <PhoneIcon class="w-4 h-4" />
          <span>{{ shop.phone }}</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <MailIcon class="w-4 h-4" />
          <span>{{ shop.email }}</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <GlobeIcon class="w-4 h-4" />
          <span class="truncate w-full">{{ shop.website }}</span>
        </div>
      </div>
      <div class="space-y-2">
        <h4 class="font-medium">Description</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ shop.description }}
        </p>
      </div>
    </template>
    <div v-else>
      <p class="text-center text-gray-500 dark:text-gray-400">Select a shop to view information</p>
    </div>
  </div>
</div>
</template>
