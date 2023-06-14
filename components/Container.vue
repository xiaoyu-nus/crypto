<template lang="">
  <div class="container px-10 py-10 bg-gray-50 h-screen w-full max-w-full">
    <div class="max-w-screen-2xl mx-auto">
      <div class="space-y-2 pb-10">
        <div class="text-3xl font-semibold">
          {{ title }}
        </div>
        <div class="text-xl">
          {{ subtitle }}
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
    required: false,
  },
  subtitle: {
    type: String,
    default: "",
    required: false,
  },
});
</script>
<style lang=""></style>
