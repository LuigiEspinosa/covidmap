<template>
  <div class="flex justify-center items-center">
    <label for="toggleTheme" class="inline-block relative h-8 w-16">
      <input type="checkbox" id="toggleTheme" class="h-0 w-0 opacity-0 toggleInput" />
      <div
        class="bg-[#ccc] dark:bg-black absolute bottom-0 left-0 right-0 top-0 rounded-full cursor-pointer toggleTheme"
      />
    </label>
  </div>
</template>
