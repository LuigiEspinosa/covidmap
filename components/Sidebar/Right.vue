<template>
  <section class="w-full lg:w-auto flex flex-col h-screen">
    <div class="block w-full xl:w-[350px] max-h-screen">
      <div class="h-full min-h-full flex flex-col px-2 lg:px-0">
        <div
          class="flex lg:hidden justify-between items-center gap-8 max-w-full lg:max-w-[80%] mx-0 lg:mx-auto p-2 mt-4 mb-2 h-auto"
        >
          <Logo />
          <Toggle />
        </div>

        <div class="hidden lg:flex justify-end my-4">
          <Toggle />
        </div>

        <CasesWorldwide />
        <CasesSearch />
      </div>
    </div>
  </section>
</template>
