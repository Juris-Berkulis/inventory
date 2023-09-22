import type { InjectionKey, Ref } from 'vue';

export type SelectedCell = Ref<number | null>;
export type SelecteCell = (newSelectedCell: number) => void;

export interface SelectedCellKey {
    selectedCell: SelectedCell,
    selecteCell: SelecteCell,
};

export const selectedCellKey = Symbol() as InjectionKey<SelectedCellKey>;

export type DeleteInventoryKey = (cellIndex: number, deletedCountStr: string) => boolean;

export const deleteInventoryKey = Symbol() as InjectionKey<DeleteInventoryKey>;
