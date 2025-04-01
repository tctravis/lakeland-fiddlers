<template>
    <div class="space-y-4">
       <div class="flex flex-wrap gap-2">
          <label for="tuneTitle" class="w-full sm:w-auto">Filter by tune title: </label>
          <input class="w-full sm:w-auto" name="tuneTitle" type="text" v-model="titleFilter" placeholder="Search for a tune..." />
          <button @click="titleFilter = ''" class="bg-red-500 text-white px-2 py-1 rounded">Clear</button>
        </div>
        
        <ul class="space-y-2">
            <li v-for="tune in filteredTunes" :key="tune.id">
                <a class="underline" :href="`/tunes/${tune.id}/`">{{ tune.data.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'; 

const props = defineProps({
  tunes: {
    type: Array,
    required: true
  }
})

const tunes = ref([...props.tunes]);

const titleFilter = defineModel('titleFilter', {
  type: String,
  default: ''
});

const filteredTunes = computed(() => {
      if (titleFilter.value === '') {
        return tunes.value;
      }
      return tunes.value.filter((tune) => {
        return tune.data.title.toLowerCase().includes(titleFilter.value.toLowerCase())
      });
    });
</script>

<style lang="scss" scoped>

</style>