<template>
  <div>
    <my-component-k url="#/page3">
      <div>小明</div>
      Logged in as {{ user.name }}
    </my-component-k>


    
    <my-component-j>
       <p slot="footer">Here's some contact info</p>
      <h1 slot="header">Here might be a page title</h1>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

     
    </my-component-j>
  </div>
</template>

<script>
import MyComponentJ from "@/components/mycomponents/MyComponentJ";
import MyComponentK from "@/components/mycomponents/MyComponentK";

export default {
  data() {
    return {
      user: {
        name: "周建荣"
      }
    };
  },
  components: {
    MyComponentJ,
    MyComponentK
  }
};
</script>