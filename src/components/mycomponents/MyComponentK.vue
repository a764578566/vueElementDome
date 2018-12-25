<template>
  <a v-bind:href="url" class="nav-link">
    <slot>测试</slot>
  </a>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {};
  }
};
</script>
