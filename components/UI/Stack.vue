<template>
  <ul class="grid logos">
    <LogoNuxt />
    <LogoTailwind />
    <LogoNews />
    <LogoChart />
    <LogoCovid />
  </ul>
</template>

<style lang="scss" scope>
.grid {
  --min: 10ch;
  --gap: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);

  & > * {
    flex: 1 1 var(--min);
  }
}

.logos {
  --min: 15rem;
  --aspect-ratio: 4/3;
  --gap: 4rem;

  li {
    height: 12rem;

    @supports (aspect-ratio: 1) {
      li {
        aspect-ratio: var(--aspect-ratio);
        height: auto;
      }
    }

    img,
    svg {
      display: block;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    img {
      mix-blend-mode: difference;
    }
  }
}
</style>
