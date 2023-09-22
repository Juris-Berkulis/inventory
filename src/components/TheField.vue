<script setup lang="ts">
import { inject, type Ref, ref, type ComputedRef, computed } from 'vue';
import FieldCell from './FieldCell.vue';
import TheCurtain from './TheCurtain.vue';
import { selectedCellKey, type SelectedCell, type SelectedCellKey } from '@/composables/keys';
import type { InventoryItem, InventoryObj } from '@/assets/data/data';

interface Props {
    inventoryObj: InventoryObj,
};

const props = defineProps<Props>();

defineEmits(['moveInventory']);

const selectedCellObjFromInject = inject<SelectedCellKey>(selectedCellKey);

const isShowCurtain: Ref<boolean> = ref(false);
const selectedCell: SelectedCell = ref(null);

const changeSelectedCell = (cellIndex: number) => {
    if (props.inventoryObj[cellIndex]) {
        selectedCellObjFromInject?.selecteCell(cellIndex);
        selectedCell.value = cellIndex;
        isShowCurtain.value = true;
    }
};

const inventoryItem: ComputedRef<InventoryItem | null> = computed(() => {
    return selectedCell.value && props.inventoryObj[selectedCell.value] ? props.inventoryObj[selectedCell.value] : null
});
</script>

<template>
<div class="field">
    <FieldCell 
        v-for="cellIndex of 25" 
        :key="cellIndex" 
        @dragenter.prevent=""
        @dragover.prevent="" 
        @drop="(event: DragEvent) => $emit('moveInventory', event, cellIndex)"
        @click="changeSelectedCell(cellIndex)"
        :inventoryItem="inventoryObj[cellIndex]" 
        :cellIndex="cellIndex" 
    />
    <TheCurtain 
        v-model:isShowCurtain="isShowCurtain"
        :inventoryItem="inventoryItem" 
        :selectedCell="selectedCell"
    />
</div>
</template>

<style scoped lang="scss">
.field {
    position: relative;
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

    @media (max-width: 849px) {
        min-width: 100%;
    }
}
</style>
