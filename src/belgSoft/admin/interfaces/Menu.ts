export interface Menu {
    menuId: string;
    categoryId: string;
    category: string;
    name: string;
    description: string;
    price: number;
    image: string | null;
    isAvailable: boolean;
    quantity: number;
}