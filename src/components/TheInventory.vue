<script setup lang="ts">
import { data, type Data, type InventoryItem } from '@/assets/data/data';
import TheField from './TheField.vue';
import TheMain from './TheMain.vue';
import { provide, reactive, ref } from 'vue';
import TheFooter from './TheFooter.vue';
import { selectedCellKey, type SelectedCell, type SelecteCell } from '@/composables/keys';

const dataObj: Data = reactive(data);
const selectedCell: SelectedCell = ref(null);

const selecteCell: SelecteCell = (newSelectedCell) => {
    selectedCell.value = newSelectedCell;
};

provide(selectedCellKey, {selectedCell, selecteCell});

const moveInventory = (event: DragEvent, newCellIndex: number): void => {
    if (event.dataTransfer) {
        const oldCellIndex: number = parseInt(event.dataTransfer.getData('oldCellIndex'));

        if (!dataObj.inventoryObj[newCellIndex]) {
            if (selectedCell.value === oldCellIndex) {
                selectedCell.value = newCellIndex;
            }
            
            const movedInventoryItem: InventoryItem = dataObj.inventoryObj[oldCellIndex];
            delete dataObj.inventoryObj[oldCellIndex];
            dataObj.inventoryObj[newCellIndex] = movedInventoryItem;
        }
    }
};
</script>

<template>
<div class="inventory">
    <div class="top">
        <TheMain :main="dataObj.main" />
        <TheField :inventoryObj="dataObj.inventoryObj" @moveInventory="moveInventory" />
    </div>
    <TheFooter />
</div>
</template>

<style scoped lang="scss">
.inventory {
    min-height: 100vh;
    padding: 32px max(32px, calc((100% - 785px) / 2));
    background-color: #1d1d1d;
}

.top {
    margin-bottom: 24px;
    display: flex;
    gap: 24px;

    @media (max-width: 849px) {
        flex-direction: column;
    }
}
</style>
