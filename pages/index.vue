<template>
  <section :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-[#15202b]">
      <div class="min-h-full">
        <div class="flex mx-auto sm:px-4 lg:space-x-4 justify-between content-around flex-wrap">
          <SidebarLeft />
          <Chart />
          <SidebarRight />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const emitter = useEmitter();

const darkMode = ref(true);

emitter.$on("toggleDarkMode", () => (darkMode.value = !darkMode.value));
</script>
