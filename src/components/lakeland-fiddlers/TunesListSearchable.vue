<template>
  <div class="space-y-4">
    <div class="bg-stone-200 space-y-4 p-2 not-prose">
      <h3 class="font-bold">Filter tunes by:</h3>
      <div class="flex flex-wrap items-center gap-2">
        <label for="tuneTitle" class="w-full sm:w-auto">Title: </label>
        <input class="w-full sm:w-auto" name="tuneTitle" type="text" v-model="titleFilter"
          placeholder="Search for a tune..." />
        <button @click="titleFilter = ''" class="bg-red-500 text-white px-2 py-0 rounded">Clear</button>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <label for="cumbrianMsTunes">Cumbrian fiddler's manuscript tunes only</label>
        <input type="checkbox" name="cumbrianMsTunes" v-model="cumbrianMsTunes" />
      </div>
    </div>
    <ul class="space-y-2">
      <li v-for="tune in filteredTunes" :key="tune.id">
        <a class="underline" :href="`/tunes/${tune.id}/`">{{ tune.data.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

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

const cumbrianMsTunes = ref(false)

const filteredTunes = computed(() => {
  let filteredTunes = tunes.value;
  if (titleFilter.value !== '') {
    filteredTunes = filteredTunes.filter((tune) => {
      return tune.data.title.toLowerCase().includes(titleFilter.value.toLowerCase());
    });
  }
  if (cumbrianMsTunes.value) {
    filteredTunes = filteredTunes.filter((tune) => {
      return tune.data.tuneMeta.region === 'Cumbria'
    });
  }
  return filteredTunes
});

onMounted(() => {
  titleFilter.value = '';
  cumbrianMsTunes.value = false;
});
</script>

<style lang="scss" scoped></style>