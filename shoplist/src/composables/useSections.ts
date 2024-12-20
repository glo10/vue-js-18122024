import { type Ref, ref } from 'vue'
export const useSections = () => {
  const sections : Ref<Array<string>> = ref([
    'cosmetiques',
    'frais',
    'liquide',
    'droguerie',
    'boulangerie',
    'boucherie',
    'surgelé'
  ])
  return {
    sections
  }
}