<template>
  <h1>基本用法</h1>
  <Button>Default</Button>
  <Button normal>Normal</Button>
  <Button primary>primary</Button>
  <Button icon="power">Icon</Button>
  <Button icon="power" position="right">Icon</Button>
  <Button icon="power" loading primary>Click me!</Button>
</template>

<script>
import Button from '../packages/button/Button.vue'
export default {
  components: { Button }
}
</script>
