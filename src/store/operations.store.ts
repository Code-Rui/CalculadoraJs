import { defineStore } from "pinia";

export const useOperationsStore = defineStore("operations", {
  state: () => ({
    num1: 0 as number,
    num2: 0 as number,
    result: 10 as number,
    history: [] as string[],
    display: "0" as string,
    lastOperator: "" as string,
  }),
  actions: {
    ADD(): void {
      this.lastOperator = "+";
      this.num1 = parseFloat(this.display);
      this.CLEAR_DISPLAY();
    },
    SUBTRACT(): void {
      this.lastOperator = "-";
      this.num1 = parseFloat(this.display);
      this.CLEAR_DISPLAY();
    },
    MULTIPLY(): void {
      this.lastOperator = "*";
      this.num1 = parseFloat(this.display);
      this.CLEAR_DISPLAY();
    },
    DIVISION(): void {
      this.lastOperator = "/";
      this.num1 = parseFloat(this.display);
      this.CLEAR_DISPLAY();
    },
    CLEAR_DISPLAY(): void {
      this.display = "0";
    },
    CONCATENATE(value: string): void {
      if (this.display === "0") {
        this.display = value;
      } else {
        this.display += value;
      }
    }
    ,
    DELETE_LAST(): void {
      this.display = this.display.slice(0, -1);
    },
    EQUALS(): void {
      this.history=[];
      
      this.num2 = parseFloat(this.display);
      switch (this.lastOperator) {
        case "+":
          this.result = this.num1 + this.num2;
          break;
        case "-":
          this.result = this.num1 - this.num2;
          break;
        case "*":
          this.result = this.num1 * this.num2;
          break;
        case "/":
          this.result = this.num1 / this.num2;
          break;
      }
      this.display = this.result.toString();
      this.history.push(`${this.num1} ${this.lastOperator} ${this.num2} = ${this.result}`);
      this.CLEAR_DISPLAY();
      
    },
  },
});
