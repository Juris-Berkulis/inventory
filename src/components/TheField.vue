<script setup lang="ts">
import type { InventoryObj } from '@/assets/data/data';
import FieldCell from './FieldCell.vue';

interface Props {
    inventoryObj: InventoryObj,
};

defineProps<Props>();

defineEmits(['moveInventory']);
</script>

<template>
<div class="field">
    <FieldCell 
        v-for="cellIndex of 25" 
        :key="cellIndex" 
        @dragenter.prevent=""
        @dragover.prevent="" 
        @drop="(event: DragEvent) => $emit('moveInventory', event, cellIndex)"
        :inventoryItem="inventoryObj[cellIndex]" 
        :cellIndex="cellIndex" 
    />
</div>
</template>

<style scoped lang="scss">
.field {
    width: 100%;
    max-width: 525px;
    min-height: 500px;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
    border-radius: 12px;
    border: 1px solid var(--Primary-Border, #4d4d4d);
    background-color: var(--Seondary-BG, #262626);
    overflow: hidden;
}
</style>
