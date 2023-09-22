<script setup lang="ts">
import BaseSkeleton from './base/BaseSkeleton.vue';
import IconCross from './icons/IconCross.vue';
import BaseBtn from './base/BaseBtn.vue';
import type { InventoryItem } from '@/assets/data/data';

interface Props {
    inventoryItem: InventoryItem | null,
    isShowCurtain: boolean,
};

defineProps<Props>();

const emit = defineEmits(['update:isShowCurtain']);

const closeCurtain = (): void => {
    emit('update:isShowCurtain', false);
};
</script>

<template>
<div 
    class="curtain" 
    :class="{open: isShowCurtain && inventoryItem}" 
>
    <img class="img" :src="inventoryItem?.src" :alt="inventoryItem?.name">
    <div class="skeletonsWrapper">
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
        <BaseSkeleton class="skeleton" />
    </div>
    <BaseBtn class="btn">Удалить предмет</BaseBtn>
    <button class="crossBtn" @click="closeCurtain">
        <IconCross />
    </button>
</div>
</template>

<style scoped lang="scss">
.curtain {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 250px;
    padding: 55px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid var(--Primary-Border, #4d4d4d);
    background-color: rgba(38, 38, 38, 0.50);
    backdrop-filter: blur(8px);
    transform: translateX(100%);
    transition: transform 1s linear;

    &.open {
        transform: translateX(0);
    }
}

.img {
    width: 100%;
    max-width: 130px;
    aspect-ratio: 1;
    margin-bottom: 30px;
}

.skeletonsWrapper {
    margin-bottom: 18px;
    padding: 16px 4px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: var(--Primary-Border, #4D4D4D);
    border-right: none;
    border-left: none;
}

.skeleton {
    width: 100%;
    height: 10px;
    margin-bottom: 16px;

    &:first-child {
        height: 30px;
        margin-bottom: 24px;
    }

    &:nth-child(4) {
        width: 180px;
    }

    &:last-child {
        width: 80px;
        margin-bottom: 0;
    }
}

.btn {
    width: 100%;
    padding: 11px;
    border-radius: 8px;
    background-color: var(--Primary-Red, #fa7272);
    color: var(--Primary-White, #ffffff);

    &:hover {
        background-color: var(--Red-Hover, #ff8888);
    }
}

.crossBtn {
    position: absolute;
    top: 8px;
    right: 8px;
    line-height: 0;
    color: #ffffff;
}
</style>
