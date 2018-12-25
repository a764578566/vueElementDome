<template>
  <div>
    <div>
      <my-component-a></my-component-a>
      <my-component-b></my-component-b>
    </div>
    <div>
      <my-component-c></my-component-c>
      <my-component-d></my-component-d>
    </div>
  </div>
</template>

<script>
import MyComponentC from "@/components/mycomponents/MyComponentC";
import MyComponentD from "@/components/mycomponents/MyComponentD";

export default {
  data() {
    return {};
  },
  components: {
    MyComponentC,
    MyComponentD
  }
};
</script>
