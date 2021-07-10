<template>
  <div id="app">
    <h1 class="title">Math Quiz App Test hello actinsss</h1>

    <OperatorQuiz @onBack="clearOperator" v-if="operator" :operator="operator" />
    <OperatorSelector v-else @changeOperator="changeOperator" />
  </div>
</template>

<script>
import OperatorSelector from "./components/OperatorSelector";
import OperatorQuiz from "./components/OperatorQuiz";

export default {
  name: "App",
  data() {
    return {
      operator: null,
    };
  },
  components: {
    OperatorSelector,
    OperatorQuiz,
  },
  methods: {
    changeOperator(operator) {
      this.operator = operator;
      console.log(this.operator);
    },
    clearOperator() {
      this.operator = null;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 4rem;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: turquoise;
  color: white;
  font-size: 1.5rem;
  width: 10rem;
  max-width: 10rem;
  cursor: pointer;
  padding: 10px 0;
  min-height: 5rem;
}
.operators {
  display: flex;
  width: 50%;
  min-width: 41rem;
  justify-content: space-around;
  align-items: center;
  height: 10rem;
}
</style>
