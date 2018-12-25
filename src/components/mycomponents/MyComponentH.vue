<template>
  <div>
    <h3>{{person.name}}</h3>
    <h3>{{person.age}}</h3>
    <h3>{{person.sex}}</h3>
  </div>
</template>
<script>
export default {
  props:{
      person:Object,
  },
  data() {
    return {};
  }
};
</script>
