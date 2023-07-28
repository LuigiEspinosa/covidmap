<template>
  <section :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:mx-w-7xl lg:px-8 lg:gap-5"
        >
          <SidebarLeft :dark="darkMode" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const darkMode = ref(true);
</script>
