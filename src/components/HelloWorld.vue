<script >
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    msg: {
      type: String,
    }
  },
  data:function() {
    return {count: 0}
  }
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out Rspack which support Vue
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p :class="$style.read_the_docs">Click on the Rspack and Vue logos to learn more</p>
</template>

<style lang="scss" module>
.read_the_docs {
  color: red;
}
</style>
