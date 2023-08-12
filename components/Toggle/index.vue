<template>
  <div class="flex justify-center items-center">
    <label for="toggleTheme" class="inline-block relative h-8 w-16">
      <input
        id="toggleTheme"
        type="checkbox"
        class="h-0 w-0 opacity-0 dark:bg-white"
        @click="handleToggleDark"
      />

      <div
        class="bg-[#ccc] dark:bg-black absolute bottom-0 left-0 right-0 top-0 rounded-full cursor-pointer dark:before:translate-x-7 toggleTheme"
      />
    </label>
  </div>
</template>

<script setup>
const emitter = useEmitter();

function handleToggleDark() {
  emitter.$emit("toggleDarkMode");
}
</script>
