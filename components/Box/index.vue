<template>
  <div
    :class="custom"
    class="flex flex-col justify-start rounded-lg bg-[#ccc] dark:bg-[#262439] py-6 px-[clamp(1rem,_5%,_3rem)] mb-4"
  >
    <slot name="box"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  custom: {
    type: String,
    default: "",
  },
});
</script>
