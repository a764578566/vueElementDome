<template>
  <div>
    <h3>我的局部组件D 嵌套组件C</h3>
    <my-component-c></my-component-c>
  </div>
</template>

<script>
import MyComponentC from "@/components/mycomponents/MyComponentC";

export default {
  data() {
    return {};
  },
  components: {
    MyComponentC
  }
};
</script>
