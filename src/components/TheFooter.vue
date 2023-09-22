<script setup lang="ts">
import BaseSceleton from '@/components/base/BaseSkeleton.vue';
import IconCross from '@/components/icons/IconCross.vue';
</script>

<template>
<footer class="footer">
    <BaseSceleton class="skeleton" />
    <button class="crossBtn">
        <IconCross />
    </button>
</footer>
</template>

<style scoped lang="scss">
.footer {
    position: relative;
    width: 100%;
    height: 72px;
    padding: 18px 68px 18px 18px;
    border-radius: 12px;
    border: 1px solid var(--Primary-Border, #4d4d4d);
    background-color: var(--Seondary-BG, #262626);
}

.skeleton {
    height: 100%;
}

.crossBtn {
    position: absolute;
    top: 8px;
    right: 8px;
    line-height: 0;
    color: #ffffff;
}
</style>
