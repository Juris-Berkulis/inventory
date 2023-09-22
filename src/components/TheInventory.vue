<script setup lang="ts">
import { data, type Data, type InventoryItem } from '@/assets/data/data';
import TheField from './TheField.vue';
import { reactive } from 'vue';

const dataObj: Data = reactive(data);

const moveInventory = (event: DragEvent, newCellIndex: number): void => {
    if (event.dataTransfer) {
        const oldCellIndex: number = parseInt(event.dataTransfer.getData('oldCellIndex'));

        if (!dataObj.inventoryObj[newCellIndex]) {
            const movedInventoryItem: InventoryItem = dataObj.inventoryObj[oldCellIndex];
            delete dataObj.inventoryObj[oldCellIndex];
            dataObj.inventoryObj[newCellIndex] = movedInventoryItem;
        }
    }
};
</script>

<template>
<div>
    <TheField :inventoryObj="dataObj.inventoryObj" @moveInventory="moveInventory" />
</div>
</template>

<style scoped lang="scss">
</style>
