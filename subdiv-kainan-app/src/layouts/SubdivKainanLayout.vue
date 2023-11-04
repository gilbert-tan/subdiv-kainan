<template>
  <div>
    <main>
      <SubdivKainanNavigation />
      <slot></slot>
    </main>
    <footer class="bg-gray-800">
      <div class="flex flex-1 mx-auto max-w-7xl sm:px-6 lg:px-8 px-3 py-2">
        <h2 class="text-white px-3 py-2 text-sm font-medium">
          {{ footerText }}
        </h2>
      </div>
    </footer>
  </div>
</template>

<script>
import SubdivKainanNavigation from "@/layouts/SubdivKainanNavigation.vue";

export default {
  name: "SubdivKainanLayout",
  components: { SubdivKainanNavigation },
  props: {
    footerText: {
      type: String,
      default: "2023",
    },
  },
};
</script>

<style></style>
