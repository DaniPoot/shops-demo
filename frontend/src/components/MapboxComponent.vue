<script setup>
import { computed, ref, watch } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import {
  MapPin
} from 'lucide-vue-next'

const props = defineProps({
  shops: {
    type: Array,
    required: true
  },
  editing: {
    type: Boolean,
    default: false
  }
})

const model = defineModel({ 
  type: Object,
  default: { lat: 20.97537, lng: -89.61696 }
})

const emit = defineEmits(['onSelectShop'])

const accessToken = import.meta.env.VITE_MAPBOX

const selectedShop = ref(null)

const shopCoordinates = computed(() => props.shops.filter(shop => {
  if (selectedShop.value === shop._id) {
    return
  }
  return shop.address.coordinates
}).map(shop => {
  const { lat, lng } = shop.address.coordinates

  return {
    id: shop._id,
    coordinates: [lng, lat]
  }
}))

function onSelectShop(shop) {
  if (props.editing) {
    selectedShop.value = shop.id
    newPlace.value = shop.coordinates
  }
  emit('onSelectShop', shop.id)
}

watch(model, () => {
  newPlace.value = [model.value.lng, model.value.lat]
})

const newPlace = ref([-89.61696,20.9753])

function onDragEnd(event) {
  const coordinates = event.target.getLngLat()
  newPlace.value = [coordinates.lng, coordinates.lat]
  model.value = { lat: coordinates.lat, lng: coordinates.lng }
}

</script>

<template>
  <MapboxMap
    class="h-dvh w-full"
    :access-token="accessToken"
    map-style="mapbox://styles/mapbox/streets-v11">
    <MapboxMarker
      v-for="shop in shopCoordinates"
      v-bind:key="shop.id"
      :lng-lat="shop.coordinates"
    >
      <div
        class="group flex h-5 w-5 shrink-0 items-center justify-center gap-2 rounded-full bg-sky-500 text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base cursor-pointer"
        @click="onSelectShop(shop)"
      >
          <MapPin class="h-4 w-4 transition-all group-hover:scale-110"/>
          <span class="sr-only">{{ shop.coordinates }}</span>
      </div>
    </MapboxMarker>
    <template>
      <MapboxMarker
        @mb-dragend="onDragEnd"
        :lng-lat="newPlace"
        draggable
        v-if="editing"
      >
      <div
        class="group flex h-5 w-5 shrink-0 items-center justify-center gap-2 rounded-full bg-green-500 text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base cursor-pointer"
      >
          <MapPin class="h-4 w-4 transition-all group-hover:scale-110"/>
          <span class="sr-only">{{ newPlace }}</span>
      </div>
    </MapboxMarker>
    </template>
  </MapboxMap>
</template>
