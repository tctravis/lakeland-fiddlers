<template>
    <div>
        <h1>Tune List</h1>
        <p>List of tunes for the Lakeland Fiddlers.</p>
        <ul>
            <li v-for="tune in tunes" :key="tune.id">
                {{ tune.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; 

const props = defineProps({
  tunes: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>

</style>