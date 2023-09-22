<script setup lang="ts">
import type { InventoryItem } from '@/assets/data/data';

interface Props {
    inventoryItem: InventoryItem | undefined,
    cellIndex: number,
};

defineProps<Props>();

const saveOldCellIndex = (event: DragEvent, oldCellIndex: number): void => {
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('oldCellIndex', oldCellIndex.toString());
    }
};
</script>

<template>
<div class="cell" :class="{full: inventoryItem}">
    <img 
        class="img"
        v-if="inventoryItem" 
        draggable 
        @dragstart="(event: DragEvent) => saveOldCellIndex(event, cellIndex)" 
        :src="inventoryItem.src" 
        :alt="inventoryItem.name"
    >
    <div class="count" v-if="inventoryItem">{{ inventoryItem?.count }}</div>
</div>
</template>

<style scoped lang="scss">
.cell {
    position: relative;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--Primary-Border, #4d4d4d);

    &.full {
        cursor: pointer;

        &:hover {
            background-color: var(--Hover-BG, #2f2f2f);
        }
    }
}

.img {
    width: 100%;
    max-width: 54px;
}

.count {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 16px;
    height: 16px;
    border-radius: 6px 0px 0px 0px;
    border: 1px solid var(--Primary-Border, #4d4d4d);
    background-color: var(--Seondary-BG, #262626);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Primary-White, #ffffff);
    opacity: 0.4;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>
