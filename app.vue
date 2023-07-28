<template>
  <section :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div
          class="flex mx-auto sm:px-4 sm:space-x-4 justify-between content-around flex-wrap"
        >
          <SidebarLeft :dark="darkMode" />

          <div class="flex-1">
            <Chart />
          </div>

          <div class="block w-[220px] xl:w-[350px] max-h-screen">
            Right Sidebar
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const darkMode = ref(true);
</script>
