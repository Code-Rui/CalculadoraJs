<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isCalculator = computed(() => route.path === '/calculator')
</script>

<template>
  <nav class="border-b-2 border-orange-200 absolute w-screen bg-zinc-600">
    <ul class="flex justify-around text-white py-4">
      <li>
        <a href="/" class="hover:text-orange-400 hover:bg-orange-950 py-4 px-6"
          >Inicio</a
        >
      </li>
      <li>
        <a
          href="/blog"
          class="hover:text-orange-400 hover:bg-orange-950 py-4 px-6"
          >Blog</a
        >
      </li>
      <li>
        <a
          href="/contact"
          class="hover:text-orange-400 hover:bg-orange-950 py-4 px-6"
          >Contacto</a
        >
      </li>
      <li>
        <a
          href="/calculator"
          class="hover:text-orange-400 hover:bg-orange-950 py-4 px-6"
          >Caluculadora</a
        >
      </li>
    </ul>
  </nav>
  <main
    class="text-stone-200 h-screen pt-14"
    :class="isCalculator ? 'bg-fondo' : 'bg-stone-600'"
  >
    <RouterView />
  </main>

  <footer
    class="text-slate-300 absolute w-full bottom-0 py-3 text-xs bg-zinc-700 border-t-2 border-orange-300"
  >
    <div class="flex justify-evenly bg-">
      <div>Mi blog</div>
      <div>&copy; Derechos Reservados 2024</div>
    </div>
  </footer>
</template>
<style scoped>
.bg-fondo {
  background-color: #6dc3fc;
}
</style>
