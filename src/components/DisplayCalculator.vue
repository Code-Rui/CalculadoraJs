<script setup lang="ts">
import { storeToRefs } from "pinia";
import {useOperationsStore} from "../store/operations.store";

const operationsStore = useOperationsStore();
const { history,display}= storeToRefs(operationsStore);
</script>
<template>
  <div class="h-[70px] bg-[#202e3d] w-full rounded-sm p-2 text-right font-sans">
    <div class="text-sm text-[#d3d4d0]">{{ history.join("") }}</div>
    <div class="text-3xl text-[#e0e1dd]">{{ display }}</div>
  </div>
</template>
