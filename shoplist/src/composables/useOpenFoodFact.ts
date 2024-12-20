import type { OpenFoodFactType } from '@/types/OpenFoodFactType'
import { ref, type Ref, onMounted } from 'vue'
export const  useOpenFoodFact = () => {
  const products : Ref<Array<OpenFoodFactType>> = ref([])
  const codes : Ref<Array<string>> = ref([
    '3017620425035',
    '3274080005003',
    '5449000214911',
    '8002270014901',
    '7613034626844',
    '737628064502',
    '3228857000906',
    '87157215',
    '3124480191182',
    '80052760',
    '8715035110106'
  ])
  onMounted(() => {
    codes.value.forEach((code: string) => {
      fetch(`https://fr.openfoodfacts.org/api/v3/produit/${code}`)
      .then(res => res.json())
      .then(res => {
        const { 
          code,
          brands,
          categories,
          creator,
          created_at,
          image_url,
          ingredients,
          packaging_materials,
          nutriscore_grade,
          product_name,
          sources
        } = res.product
        products.value.push({
          code,
          brands,
          categories,
          creator,
          created_at,
          image_url,
          ingredients,
          packaging_materials,
          nutriscore_grade,
          product_name,
          sources
        })
      })
      .catch((error) => console.error('error', error))
    })
  })

  return {
    codes,
    products
  }
}
