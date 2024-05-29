<script setup>
import { ref, watch, watchEffect, nextTick, onMounted } from 'vue'
import MapLayout from '@/layouts/MapLayout.vue';
import MapboxComponent from '../components/MapboxComponent.vue'
import { useShopStore } from '@/stores/shop'
import ShopInformation from '@/components/shop/ShopInformation.vue';
import { storeToRefs } from 'pinia'

const store = useShopStore()
const { shop, shops } = storeToRefs(store)

</script>

<template>
  <MapLayout>
    <template #aside>
      <ShopInformation :shop="shop" />
    </template>
    <MapboxComponent
      :shops="shops"
      @onSelectShop="store.selectShop"
    />
  </MapLayout>
</template>

<style></style>
