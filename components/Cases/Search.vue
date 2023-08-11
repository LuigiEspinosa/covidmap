<template>
  <div class="flex-1 overflow-auto min-h-fit">
    <!-- <div
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
    </div> -->

    <!-- <div class="bg-red mt-12 mb-4">
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
          <img :src="cases.flag" :alt="`${cases.name} Flag`" class="max-w-full" />
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
      </div>
    </div> -->
  </div>
</template>

<script setup>
const countryCard = ref([
  {
    name: "USA",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/2560px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    totalCases: "107,518,785",
    totalDeaths: "1,169,841",
    stats: [
      {
        id: "infection",
        stats: "107,518,785",
        title: "Infections",
      },
      {
        id: "death",
        stats: "1,169,841",
        title: "Deaths",
      },
      {
        id: "recover",
        stats: "105,651,785",
        title: "Recoveries",
      },
      {
        id: "active",
        stats: "697,159",
        title: "Critical",
      },
    ],
  },
  {
    name: "Colombia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1920px-Flag_of_Colombia.svg.png",
    totalCases: "6,376,239",
    totalDeaths: "142,922",
    stats: [
      {
        id: "infection",
        stats: "6,376,239",
        title: "Infections",
      },
      {
        id: "death",
        stats: "142,922",
        title: "Deaths",
      },
      {
        id: "recover",
        stats: "6,190,683",
        title: "Recoveries",
      },
      {
        id: "active",
        stats: "42,634",
        title: "Critical",
      },
    ],
  },
]);
</script>
