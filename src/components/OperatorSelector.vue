<template >
  <div class="operators">
    <div @click="$emit('changeOperator', '+')" class="box">
      <p>Addition</p>
      <p>+</p>
    </div>
    <div @click="$emit('changeOperator', '-')" class="box">
      <p>Subtraction</p>
      <p>-</p>
    </div>
    <div @click="$emit('changeOperator', '/')" class="box">
      <p>Division</p>
      <p>/</p>
    </div>
    <div @click="$emit('changeOperator', '*')" class="box">
      <p>Multiplication</p>
      <p>*</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>