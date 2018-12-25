<template>
  <div>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{sex}}</h3>
  </div>
</template>



<script>
export default {
  props: {
    name: String,
    age: Number,
    sex: Boolean
  }
};
</script>
