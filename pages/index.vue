<template>
  <section :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-[#15202b]">
      <div class="min-h-full">
        <div class="flex mx-auto sm:px-4 lg:space-x-4 justify-between content-around flex-wrap">
          <SidebarLeft :dark="darkMode" />
          <Chart />
          <SidebarRight :dark="darkMode" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const darkMode = ref(true);
</script>
