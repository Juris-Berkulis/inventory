<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';
import BaseSkeleton from '@/components/base/BaseSkeleton.vue';
import BaseBtn from '@/components/base/BaseBtn.vue';
import IconCross from '@/components/icons/IconCross.vue';
import type { InventoryItem } from '@/assets/data/data';
import { deleteInventoryKey, type DeleteInventoryKey } from '@/composables/keys';

interface Props {
    inventoryItem: InventoryItem | null,
    isShowCurtain: boolean,
    selectedCell: number | null,
};

const props = defineProps<Props>();

const emit = defineEmits(['update:isShowCurtain']);

const deleteInventory = inject<DeleteInventoryKey>(deleteInventoryKey);

const isShowConfirmation: Ref<boolean> = ref(false);
const countForDelete: Ref<string> = ref('');

const resetConfirmationWindow = (): void => {
    countForDelete.value = '';
    isShowConfirmation.value = false;
};

const closeCurtain = (): void => {
    resetConfirmationWindow();
    emit('update:isShowCurtain', false);
};

const deleteSelectedCountOfInventories = (): void => {
    if (deleteInventory && props.selectedCell) {
        const success = deleteInventory(props.selectedCell, countForDelete.value);

        if (success) {
            resetConfirmationWindow();
        }
    }
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
    <BaseBtn class="deleteBtn" @click="isShowConfirmation = true">Удалить предмет</BaseBtn>
    <button class="crossBtn" @click="closeCurtain">
        <IconCross />
    </button>
    <div class="confirmationWrapper" :class="{open: isShowConfirmation}">
        <input 
            class="input" 
            v-model.trim="countForDelete" 
            type="number" 
            placeholder="Введите количество" 
            min="0" 
            :max="inventoryItem?.count"
        >
        <BaseBtn class="cancelBtn" @click="isShowConfirmation = false">Отмена</BaseBtn>
        <BaseBtn class="okBtn" @click="deleteSelectedCountOfInventories">Подтвердить</BaseBtn>
    </div>
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

.deleteBtn {
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

.confirmationWrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    transition: transform 1s linear;
    padding: 20px 21px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 1px solid var(--Primary-Border, #4d4d4d);
    background-color: rgba(38, 38, 38, 0.60);
    backdrop-filter: blur(8px);

    &.open {
        transform: translateY(0);
    }
}

.input {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid var(--Primary-Border, #4D4D4D);
    background-color: var(--Seondary-BG, #262626);
    color: #ffffff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    outline: none;

    &::placeholder {
        opacity: 0.4;
    }
}

.cancelBtn {
    width: 100%;
    max-width: 88px;
    padding: 8px;
    background-color: var(--Primary-White, #ffffff);
    color: var(--Primary-Black, #2d2d2d);

    &:hover {
        background-color: #cccccc;
    }
}

.okBtn {
    width: 100%;
    max-width: 112px;
    padding: 8px;
    background-color: var(--Primary-Red, #fa7272);
    color: var(--Primary-White, #ffffff);

    &:hover {
        background-color: var(--Red-Hover, #ff8888);
    }
}
</style>
