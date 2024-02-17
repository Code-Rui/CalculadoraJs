<script setup lang="ts">
import DisplayCalculator from './DisplayCalculator.vue'
import ButtonCalculator from './ButtonCalculator.vue'
import BTNS from './buttons'
import { onMounted, ref } from 'vue'
const buttons = ref()
onMounted(() => {
  buttons.value = BTNS
})
</script>
<template>
  <div class="col-span-2 hidden"></div>
  <div class="rounded-lg p-5 bg-[#0d1b2a] w-[360px]">
    <div class="flex flex-col">
      <DisplayCalculator />
      <div class="mt-4 grid grid-cols-4 gap-4">
        <ButtonCalculator
          v-for="(btn, index) in buttons"
          :key="index + '-btn'"
          :content="btn.value"
          :color="btn.color"
          :class="btn?.value === '=' && 'col-span-2'"
        />
      </div>
    </div>
  </div>
</template>
