<script setup lang="ts">
import DisplayCalculator from './DisplayCalculator.vue'
import ButtonCalculator from './ButtonCalculator.vue'
import BTNS from './buttons'
import { onMounted, ref } from 'vue'
import {useOperationsStore} from '../store/operations.store'
import { storeToRefs } from 'pinia'
import { toast } from 'vue3-toastify'
const operationsStore=useOperationsStore();
const {display}=storeToRefs(operationsStore)
const {CONCATENATE,CLEAR_DISPLAY} = operationsStore;

const buttons = ref()
onMounted(() => {
  buttons.value = BTNS
})

function handleClick(value:string){

//operadores 
let operators =["+","-","*","/"];

 
let displayArray=display.value.split("");

let LastValue = displayArray[displayArray.length -1]

  if(LastValue==="0" && operators.includes(value)) {
    toast.error("Debe ingreasr un numero diferente a 0")
    return;
  }
  CONCATENATE(value);
 if (value=== "AC") {
  CLEAR_DISPLAY();
 }
 
 

}
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
          @click="handleClick(btn.value)"
        />
      </div>
    </div>
  </div>
</template>
