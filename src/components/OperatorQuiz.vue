<template>
  <div class="operator-questions">
    <div v-if="isQuizStarted" class="answers">
      <h2 class="question">
        {{ operandLeft }}{{ operator }}{{ operandRight }}
      </h2>
      <div
        v-for="(item, index) in answers"
        :key="index"
        @click="selectAnswer(item)"
        class="box"
      >
        <p>{{ item.toFixed(3) }}</p>
      </div>

      <div class="box next" @click="startQuiz"><p>Next</p></div>
    </div>
    <div v-else>
      <div class="box" @click="startQuiz"><p>Start</p></div>
    </div>
    <div class="box" @click="$emit('onBack')"><p>Back</p></div>
  </div>
</template>
<script>
export default {
  props: ["operator"],
  data() {
    return {
      operandLeft: null,
      operandRight: null,
      isQuizStarted: false,
      expectedAnswer: null,
      answers: [],
    };
  },
  methods: {
    startQuiz() {
      this.isQuizStarted = true;
      this.operandLeft = parseInt(Math.random() * 13);
      this.operandRight = parseInt(Math.random() * 13);

      const methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
      };
      const methodToUse = methods[this.operator];
      this.answers = [];
      this.answers.push(methodToUse(this.operandLeft, this.operandRight + -1));
      this.answers.push(methodToUse(this.operandLeft, this.operandRight + 1));
      this.answers.push(methodToUse(this.operandLeft, this.operandRight + 5));
      this.answers.push(methodToUse(this.operandLeft, this.operandRight - 2));
      const expectedAnswer = methodToUse(this.operandLeft, this.operandRight);
      this.answers[
        parseInt(Math.random() * this.answers.length)
      ] = expectedAnswer;
      this.expectedAnswer = expectedAnswer;
    },
    selectAnswer(answer) {
      if (answer !== this.expectedAnswer) {
        alert("Wrong Answer!!!");
      } else {
        this.startQuiz();
      }
    },
  },
};
</script>
<style scope>
.operator-questions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 60vh;
}
.answers {
  display: flex;
  width: 50%;
  min-width: 41rem;
  justify-content: space-around;
  align-items: center;
  height: 18rem;
  position: relative;
}
.question {
  position: absolute;
  top: 3rem;
}
.next {
  position: absolute;
  bottom: 0;
}
</style>