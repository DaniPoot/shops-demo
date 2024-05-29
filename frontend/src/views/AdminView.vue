<script setup>
import { ref } from 'vue'
import MapLayout from '@/layouts/MapLayout.vue'
import LoginBlock from '@/layouts/LoginBlock.vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useShopStore } from '@/stores/shop'
import { storeToRefs } from 'pinia'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import MapboxComponent from '@/components/MapboxComponent.vue'

defineProps({
  shop: Object,
  default: null
})

const state = useShopStore()
const { isLoading } = storeToRefs(state)
const isNewShop = ref(true)

const form = useForm({
  validationSchema: yup.object({
    _id: yup.string(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    address: yup.object({
      street: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      postalCode: yup.string().required(),
      country: yup.string().required(),
      coordinates: yup.object({
        lat: yup.number().required(),
        lng: yup.number().required()
      })
    }),
    description: yup.string().required(),
    website: yup.string().url().required()

  }),
  initialValues: {
    address: {
      coordinates: {
      lat: 20.97537,
      lng: -89.61696
      }
    }
  }
})

const onSubmit = form.handleSubmit((values) => {
  if (!isNewShop.value) {
    state.updateShop(values)
    isNewShop.value = true
  } else {
    state.addShop(values)
  }
  form.resetForm({ values: {} })
})

function onSelectShop(shopId) {
  isNewShop.value = false
  const shop = state.shops.find(shop => shop._id === shopId)
  form.setValues(shop)
}

function onDeleteShop() {
  state.deleteShop(form.values._id)
  form.resetForm()
  isNewShop.value = true
}

</script>

<template>
<LoginBlock>
  <MapLayout>
    <template #aside>
      <div class="text-center pb-2" v-if="!isNewShop">
        <Button @click="isNewShop = true">Add new shop</Button>
      </div>
      <form class="grid w-full items-start gap-6 h-screen overflow-auto px-5" @submit="onSubmit">
        <fieldset class="grid gap-6 rounded-lg border p-4">
          <legend class="-ml-1 px-1 text-sm font-medium">
            {{ isNewShop ? 'Add a new shop' : 'Edit a shop' }}
          </legend>
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="shadcn" v-bind="componentField" />
              </FormControl>
              <FormDescription>
                This is the name of the place.
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="shadcn" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="phone">
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="string" placeholder="9991078976" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="website">
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input type="string" placeholder="www.google.com" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="grid grid-cols-2 gap-4">
            <FormField v-slot="{ componentField }" name="address.street">
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input type="string" placeholder="" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="address.city">
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input type="string" placeholder="" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <FormField v-slot="{ componentField }" name="address.state">
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input type="string" placeholder="" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="address.postalCode">
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input type="string" placeholder="" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <FormField v-slot="{ componentField }" name="address.country">
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input type="string" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="grid grid-cols-2 gap-4">
            <FormField v-slot="{ componentField }" name="address.coordinates.lat">
              <FormItem>
                <FormLabel>Lat</FormLabel>
                <FormControl>
                  <Input disabled type="string" placeholder="" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="address.coordinates.lng">
              <FormItem>
                <FormLabel>Lng</FormLabel>
                <FormControl>
                  <Input disabled type="string" placeholder="" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <FormField v-slot="{ componentField }" name="description">
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  class="resize-none"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button
            type="submit"
            :disabled="isLoading"
          >
            Submit
          </Button>
          <Button
            variant="destructive"
            @click.prevent="onDeleteShop"
            v-if="!isNewShop"
            :disabled="isLoading"
          >
            Delete shop
          </Button>
        </fieldset>
      </form>
    </template>
    <MapboxComponent
      :shops="state.shops"
      v-model="form.values.address.coordinates"
      @onSelectShop="onSelectShop"
      @update:modelValue="form.setFieldValue('address.coordinates', $event)"
      editing
    />
  </MapLayout>
</LoginBlock>
</template>

<style></style>
