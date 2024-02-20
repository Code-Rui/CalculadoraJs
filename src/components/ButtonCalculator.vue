<script setup lang="ts">
defineProps<{
  content: string;
  color?: string;
}>();
</script>
<template>
  <div
    :class="
      color === 'red'
        ? 'text-red-300'
        : color === 'blue'
        ? 'text-blue-300'
        : 'text-stone-200'
    "
    class="border border-[#1f3a59b3] h-[60px] flex justify-center items-center rounded-lg text-2xl hover:bg-[#1f4068] cursor-pointer transition-all duration-400 ease-in-out hover:text-stone-200"
  >
    {{ content }}
  </div>
</template>
