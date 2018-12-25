<template>
  <div>
    <my-component-i v-bind="person"></my-component-i>
  </div>
</template>

<script>
import MyComponentI from "@/components/mycomponents/MyComponentI";

export default {
  data() {
    return {
      person: {
        name: "周建荣",
        age: 18,
        sex: true
      }
    };
  },
  components: {
    MyComponentI
  }
};
</script>

