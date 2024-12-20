import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFilter } from '@/composables/useFilter'
import { useOpenFoodFact } from '@/composables/useOpenFoodFact'
import { useArticle } from '@/composables/useArticle'
export const useShopStore = defineStore('store:shop', () => {
  // use article
  const items = ref([])
  const itemsFiltered = ref([]);
  const criteria = ref(null);
  const alertUser = ref(null)
  const sections = [
    'cosmetiques',
    'frais',
    'liquide',
    'droguerie',
    'boulangerie',
    'boucherie',
    'surgelé'
  ]
  const products = ref([])
  const codes = ref([
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
  const addItem = (item) => {
    const isExist = items.value.find(i => i.label === item.label)
    if (isExist === undefined && 'label' in item && 'section' in item && 'isBought' in item) {
      items.value.push(item);
    }
    else {
      alertUser.value = `article ${item.label} existe déjà dans la liste ou incomplète`
    }
  };

  // useFilter
  const progress = computed(() => {
    let count = 0;
    if (items.value.length > 0) {
      items.value.forEach((item) => {
        if (item.isBought) count++;
      });
    }
    return {
      bought: count,
      total: items.value.length,
      percent: Math.round((progress.bought / progress.total) * 100),
    };
  });

  const changeCriteria = (param) => {
    criteria.value = {...criteria.value, ...param};
  };

watch(criteria, (newCriteria, oldValue) => {
  if(oldValue && newCriteria.isBought === null) {
    delete newCriteria.isBought
    console.log('watcher de null isBought', newCriteria)
    criteria.value = newCriteria
  }
  if(oldValue && newCriteria.section === 'all') {
    delete newCriteria.section
    criteria.value = newCriteria
  }
}, { immediate: true })
  watchEffect(() => {
    itemsFiltered.value = items.value.filter((item) => {
      if (criteria.value === null) return items.value;
      return Object.keys(criteria.value).every((key) => {
        const k = key;
        return criteria.value[k] === undefined || item[k] === criteria.value[k];
      });
    });
  });

  const displayCriteria = computed(() => {
    if (criteria.value) {
      let filters = ''
      for (const [k, v] of Object.entries(criteria.value)) {
        const key = k
          .replace(/section/i, "rayon")
          .replace(/isbought/i, "achêté");
        let value = v;
        if (value === true) {
          value = "Oui";
        } else if (value === false) {
          value = "Non";
        }
        if(Object.entries(criteria.value).length > 1) filters += ' et '
        filters += `${key} : ${value}`;
      }
      return filters
    }
    return null;
  });

  // use openfood
  onMounted(() => {
    codes.value.forEach((code) => {
      fetch(`https://fr.openfoodfacts.org/api/v1/produit/${code}`)
      .then(res => {
        if(res.ok) return res.json()
        throw new Error('can\'t get data from OpenFoodFact API')
      })
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
})
