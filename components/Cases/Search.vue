<template>
  <div class="flex-1 overflow-auto min-h-fit">
    <div
      class="items-center bg-[#ccc] dark:bg-[#262439] rounded-lg flex mb-4 relative w-full pl-4 pr-2"
    >
      <div
        class="text-black dark:text-white rounded-sm text-xs left-px mt-2 py-1 absolute top-full w-[calc(100%_-_4px)] z-0"
      >
        <span class="ml-[6px]">Covid-19 Cases</span>
        <span class="float-right">Today's Stats</span>
      </div>

      <input
        type="text"
        autocomplete="off"
        placeholder="Search by Country"
        class="bg-transparent border-none text-black dark:text-white flex-1 text-base h-10 outline-0"
      />
    </div>

    <div class="bg-red mt-12 mb-4">
      <div
        v-for="cases in countryCard"
        class="rounded-lg border border-transparent cursor-pointer w-full h-16 flex flex-none justify-between items-center relative group"
      >
        <div
          class="bg-[#ccc] dark:bg-[#262439] rounded-lg bottom-0 cursor-pointer flex left-0 max-w-0 group-hover:max-w-full overflow-hidden absolute right-0 top-0 transition-all z-10"
        >
          <div class="overlayBlocks">
            {{ cases.name }}
          </div>

          <div v-for="stats in cases.stats" :id="stats.id" class="overlayBlocks">
            <span class="casesStats">
              {{ stats.stats }} <br />
              {{ stats.title }}
            </span>
          </div>
        </div>

        <div class="w-[30px] mr-4">
          <!-- <img
            :src="cases.flag"
            :alt="`${cases.name} Flag`"
            class="max-w-full"
          /> -->
        </div>

        <div
          class="items-start flex flex-1 flex-col justify-start min-h-[25px] overflow-hidden whitespace-nowrap w-1/2"
        >
          <div
            class="text-black dark:text-white text-[1em] min-h-[15px] overflow-hidden relative text-ellipsis whitespace-nowrap w-full"
          >
            {{ cases.name }}
          </div>
          <div
            class="text-[#62626f] text-sm min-h-[12px] overflow-hidden text-ellipsis whitespace-nowrap w-full"
          >
            <span class="text-[#a57af2] font-semibold">{{ cases.totalCases }} Cases</span>
            <span class="text-[#5f5f88] mx-1">&</span>
            <span class="text-[#ea536f] font-semibold">{{ cases.totalDeaths }} Deaths</span>
          </div>
        </div>

        <div class="flex flex-col font-semibold text-xs mr-2 text-right">
          <span class="text-[#a57af2] mb-2">{{ cases.newCases }} Cases</span>
          <span class="text-[#ea536f]">{{ cases.newDeaths }} Deaths</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const countryCard = ref([
  {
    name: "USD",
    flag: "",
    totalCases: "2,653,392",
    newCases: "+16,315",
    totalDeaths: "128,566",
    newDeaths: "+129",
    stats: [
      {
        id: "infection",
        stats: "2,329,651",
        title: "Infections",
      },
      {
        id: "death",
        stats: "160,721",
        title: "Deaths",
      },
      {
        id: "recover",
        stats: "595,433",
        title: "Recoveries",
      },
      {
        id: "active",
        stats: "26,719",
        title: "Critical",
      },
    ],
  },
  {
    name: "Colombia",
    flag: "",
    totalCases: "2,653,392",
    newCases: "+16,315",
    totalDeaths: "128,566",
    newDeaths: "+129",
    stats: [
      {
        id: "infection",
        stats: "2,329,651",
        title: "Infections",
      },
      {
        id: "death",
        stats: "160,721",
        title: "Deaths",
      },
      {
        id: "recover",
        stats: "595,433",
        title: "Recoveries",
      },
      {
        id: "active",
        stats: "26,719",
        title: "Critical",
      },
    ],
  },
]);
</script>
