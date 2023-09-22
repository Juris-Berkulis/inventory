export interface Main {
    description: string,
    src: string,
};

export interface InventoryItem {
    id: number,
    name: string,
    description: string,
    src: string,
    count: number,
};

export interface InventoryObj {
    [cellIndex: number]: InventoryItem;
};

export interface Data {
    main: Main,
    inventoryObj: InventoryObj,
};

export const data: Data = {
    main: {
        description: 'Описание блока main',
        src: `/assets/img/main.png`,
    },
    inventoryObj: {
        1: {
            id: 1,
            name: 'green subject',
            description: 'Зелёный предмет',
            src: '/assets/img/inventory/green.png',
            count: 4,
        },
        2: {
            id: 2,
            name: 'yellow subject',
            description: 'Жёлтый предмет',
            src: '/assets/img/inventory/yellow.png',
            count: 2,
        },
        3: {
            id: 3,
            name: 'violet subject',
            description: 'Фиолетовый предмет',
            src: '/assets/img/inventory/violet.png',
            count: 5,
        },
    },
};
