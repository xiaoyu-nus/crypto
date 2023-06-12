<template lang="">
  <div class="container px-10 py-10 bg-gray-50 h-screen w-full max-w-full">
    <div class="space-y-2 max-w-screen-2xl mx-auto pb-10">
      <div class="text-3xl font-semibold">
        {{ title }}
      </div>
      <div class="text-xl">
        {{ subtitle }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    title: String,
    subtitle: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
