import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import ApiServices from '@/service/ApiService'
import axios from '@/boot/axios'

export const useShopStore = defineStore('shop', () => {
  const shopApi = new ApiServices({ 
    path: 'shop',
    axios, 
  })
  const shop = ref(null)
  const shops = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  async function getShops() {
    try {
      isLoading.value = true
      const response = await shopApi.getAll()
      shops.value = response.data.data
    } catch (error) {
      error.value = 'Error fetching shops'
    } finally {
      isLoading.value = false
    }
  }

  async function updateShop(newShop) {
    try {
      isLoading.value = true
      const response = await shopApi.update({ id: newShop._id, shop: newShop })
      shops.value = shops.value.map(s => {
        if (s._id === newShop._id) {
          s = response.data
        }
        return s
      })
    } catch (error) {
      error.value = 'Error updating shop'
    } finally {
      isLoading.value = false
    }
  }

  async function addShop(newShop) {
    try {
      isLoading.value = true
      const response = await shopApi.create(newShop)
      shops.value.push(response.data)
    } catch (error) {
      error.value = 'Error adding a shop'
    } finally {
      isLoading.value = false
    }
  }

  async function deleteShop(id) {
    try {
      isLoading.value = true
      await shopApi.delete(id)
      shops.value = shops.value.filter(s => s._id !== id)
    } catch (error) {
      error.value = 'Error deliting a shop'
    } finally {
      isLoading.value = false
    }
  }

  function selectShop(id) {
    shop.value = shops.value.find(s => s._id === id)
  }

  getShops()

  return {
    shop,
    shops,
    getShops,
    addShop,
    updateShop,
    deleteShop,
    selectShop,
    isLoading
  }
})
