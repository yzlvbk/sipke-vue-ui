<template>
  <h1>基本用法</h1>
  <Button>Default</Button>
  <Button normal>Normal</Button>
  <Button primary>primary</Button>
  <Button icon="power">Icon</Button>
  <Button icon="power" position="right">Icon</Button>
  <Button icon="power" loading primary>Click me!</Button>

  <h1>按钮组</h1>
  <ButtonGroup>
    <Button>选项一</Button>
    <Button>选项二</Button>
    <Button>选项三</Button>
    <Button>选项四</Button>
  </ButtonGroup>
</template>

<script>
import Button from '../packages/button/Button.vue'
import ButtonGroup from '../packages/button/ButtonGroup.vue'
export default {
  components: { Button, ButtonGroup }
}
</script>
