<template>
  <div>
    <h3>{{name}}</h3>
    <button v-on:click="age += 1">Add 1</button>
    <h3>{{age}}</h3>
    <button v-on:click="input">Add 1->myAge</button>
    <h3>{{myAge}}</h3>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    age: [Number, String],
    sex: { type: Boolean, required: true }
  },
  methods: {
    input: function(e) {
      this.myAge++;
      console.log(this.myAge);
    }
  },
  data() {
    return {
      myAge: 1
    };
  },
};
</script>
