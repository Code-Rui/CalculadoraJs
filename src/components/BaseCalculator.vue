<script setup lang="ts">
import DisplayCalculator from './DisplayCalculator.vue'
import ButtonCalculator from './ButtonCalculator.vue'
import BTNS from './buttons'
import { onMounted, ref } from 'vue'
import {useOperationsStore} from '../store/operations.store'
import { storeToRefs } from 'pinia'
import { toast } from 'vue3-toastify'
const operationsStore=useOperationsStore();
const { display, view_result } = storeToRefs(operationsStore);
const { CONCATENATE, CLEAR_DISPLAY, DELETE_LAST, TO_HISTORY } = operationsStore;

const buttons = ref()
onMounted(() => {
  buttons.value = BTNS
})

function handleClick(value: string) {
  if (view_result.value) CLEAR_DISPLAY();
  if (value === "=") {
    TO_HISTORY();
    return;
  }
  if (value === "DE") {
    DELETE_LAST();
    return;
  } // operadores
  let operators = ["+", "-", "*", "/"];
  // verificamos si el valor es un operador se esta repitiendo
  // volvemos un array de string display
  let displayArray = display.value.split(""); // ["4","5","6","/"] // length=4
  // validar el ultimo valor del display
  let lastValue = displayArray[displayArray.length - 1]; //  /

  // validamos si el ultimo valor es un punto y el valor actual es un punto entonces retornamos
  if (value === "." && display.value.includes(".")) {
    toast.error("No se puede agregar dos puntos");
    return;
  }

  if (value === "00" && display.value === "0") {
    value === "00" && toast.error("No se puede agregar 00");
    return;
  }

  if (lastValue === "0" && operators.includes(value)) {
    value === "/" && toast.error("No se puede dividir por 0");
    value === "*" && toast.error("No se puede multiplicar por 0");
    value === "+" && toast.error("No se puede sumar 0");
    value === "-" && toast.error("No se puede restar 0");
    return;
  }
  // validamos si el ultimo caracter es un operador
  if (operators.includes(lastValue) && operators.includes(value)) {
    // si el ultimo valor es un operador y el valor actual es un operador
    // reemplazamos el ultimo valor por el valor actual
    displayArray[displayArray.length - 1] = value;
    CLEAR_DISPLAY();
    // unimos el array en un string
    CONCATENATE(displayArray.join(""));
    return;
  }
  // ----------------------------------------------
  CONCATENATE(value);
  if (value === "AC") CLEAR_DISPLAY();
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

