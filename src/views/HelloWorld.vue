<script lang='ts' setup>
  const count = ref<number>(1)
  const add = () => {
    count.value++
  }
</script>

<template>
  <div class="tw-text-3xl tw-font-bold tw-underline">
    <p>Hello Vue3!</p>
    <p>
      <span class="tw-mr-4">count: {{ count }}</span>
      <button @click="add">+1</button>
    </p>
  </div>
</template>

<style lang='less' scoped>
</style>