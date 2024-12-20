export interface OpenFoodFactType { 
  code: string
  brands: string
  categories: string
  creator?: string
  created_at?: string
  image_url: string
  ingredients?: string
  packaging_materials?: string
  nutriscore_grade: string
  product_name: string
  sources: Array<{url: string}>
}