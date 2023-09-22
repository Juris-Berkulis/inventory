<script setup lang="ts">
</script>

<template>
<button class="btn">
    <slot>Клик</slot>
</button>
</template>

<style scoped lang="scss">
.btn {
    border-radius: 8px;
    font-family: SF Pro Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
