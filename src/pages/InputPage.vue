<template>
  <div style="width: 300px;">
    <s-input />
    <s-input placeholder="请输入用户名" />
    <s-input icon="user" placeholder="请输入用户名" />
    <h2>disabled</h2>
    <s-input icon="user" disabled placeholder="请输入用户名" />
    <h2>v-model</h2>
    <s-input icon="lock" v-model:value="someString" placeholder="请输入用户名" />
    <p>{{someString}}</p>
    <h2>error</h2>
    <s-input icon="lock" error value="error" />

    <h2>textarea</h2>
    <s-input type="textarea" v-model:value="someString" />
    <s-input type="textarea" resize />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import sInput from '../packages/input/Input.vue'

export default defineComponent({
  setup() {
    const someString = ref('someString')

    return { someString }
  },
  components: { sInput }
})
</script>

<style scoped>
</style>