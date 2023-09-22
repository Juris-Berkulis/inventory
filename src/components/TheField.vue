<script setup lang="ts">
import type { InventoryObj } from '@/assets/data/data';

interface Props {
    inventoryObj: InventoryObj,
};

defineProps<Props>();

defineEmits(['moveInventory']);

const saveOldCellIndex = (event: DragEvent, oldCellIndex: number): void => {
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('oldCellIndex', oldCellIndex.toString());
    }
};
</script>

<template>
<div class="field">
    <div 
        class="cell" 
        v-for="cellIndex of 25" 
        :key="cellIndex" 
        @dragenter.prevent=""
        @dragover.prevent="" 
        @drop="(event: DragEvent) => $emit('moveInventory', event, cellIndex)"
    >
        <img 
            class="img"
            v-if="inventoryObj[cellIndex]" 
            draggable 
            @dragstart="(event: DragEvent) => saveOldCellIndex(event, cellIndex)" 
            :src="inventoryObj[cellIndex].src" 
            :alt="inventoryObj[cellIndex].name"
        >
    </div>
</div>
</template>

<style scoped lang="scss">
.field {
    width: 100%;
    max-width: 525px;
    min-height: 500px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-radius: 12px;
    border: 1px solid var(--Primary-Border, #4d4d4d);
    background-color: var(--Seondary-BG, #262626);
    overflow: hidden;
}

.cell {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--Primary-Border, #4d4d4d);
}

.img {
    width: 100%;
    max-width: 54px;
}
</style>
