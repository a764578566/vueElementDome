<template>
  <div>
    <my-component-e title="我的组件E，title传入的值32233"></my-component-e>
    <my-component-f my-title="我的组件F，my-title传入的值"></my-component-f>



    <my-component-g name="周建荣" age="18" sex="true"></my-component-g>
    
    <my-component-g v-bind:name="name" v-bind:age="age" :sex="sex"></my-component-g>

    <my-component-g v-bind="person"></my-component-g>

    <my-component-h v-bind:person="person"></my-component-h>
    
  </div>
</template>

<script>
import MyComponentG from "@/components/mycomponents/MyComponentG";
import MyComponentH from "@/components/mycomponents/MyComponentH";

export default {
  data() {
    return {
      name: "周建荣",
      age: 18,
      sex: true,
      person: {
        name: "周建荣2",
        age: 19,
        sex: false
      }
    };
  },
  components: {
    MyComponentG,
    MyComponentH
  }
};
</script>
