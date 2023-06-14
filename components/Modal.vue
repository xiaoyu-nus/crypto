<template lang="">
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex flex-col mx-auto min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 my-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start flex flex-col">
              <div class="mt-3 w-full text-center sm:mt-0">
                <h3
                  class="text-lg font-semibold leading-6 text-gray-900 mb-4"
                  id="modal-title"
                >
                  {{ title }}
                </h3>
                <div class="mt-2 text-center">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              :disabled="!canProceed"
              @click="$emit('confirmed')"
              :class="
                canProceed
                  ? 'bg-blue-600 hover:bg-blue-500'
                  : 'bg-blue-400 cursor-not-allowed'
              "
              class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
            >
              Confirm
            </button>
            <button
              type="button"
              @click="$emit('canceled')"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  canProceed: {
    type: Boolean,
    default: true,
  },
});
</script>
<style lang=""></style>
