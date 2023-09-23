<script setup lang="ts">
import BaseSkeleton from '@/components/base/BaseSkeleton.vue';
import type { Main } from '@/assets/data/data';

interface Props {
    main: Main,
};

defineProps<Props>();
</script>

<template>
<div class="main">
    <img class="img" :src="main.src" :alt="main.description">
    <div class="skeletonsWrapper">
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
    </div>
</div>
</template>

<style scoped lang="scss">
.main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 18px 14px 24px;
    border-radius: 12px;
    border: 1px solid #4d4d4d;
    background-color: var(--Seondary-BG, #262626);

    @media (max-width: 849px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
}

.img {
    width: 100%;

    @media (max-width: 849px) {
        width: 50%;
        min-width: 20px;
    }
}

.skeletonsWrapper {
    width: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.skeleton {
    width: 100%;
    height: 10px;
    margin-top: 16px;

    &:first-child {
        height: 26px;
        margin-top: 0;
    }

    &:nth-child(2),
    &:last-child {
        margin-top: 24px;
    }

    &:nth-child(2) {
        width: 155px;
    }

    &:nth-child(4) {
        width: 170px;
    }

    &:nth-child(5) {
        width: 160px;
    }

    &:nth-child(6) {
        width: 140px;
    }

    &:last-child {
        width: 80px;
    }
}
</style>
