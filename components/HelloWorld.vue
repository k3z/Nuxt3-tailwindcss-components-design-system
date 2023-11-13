<script setup lang="ts">
const props = defineProps({
  msg: { type: String, default: 'Hello World' },
});
</script>
<template>
  <div class="text-base">{{ msg }}</div>
</template>
