import {ProductCategory} from "@/typs/product-category";

export interface Product {
    id: string;
    productName: string;
    productCode: string;
    stockQuantity: number
    category: ProductCategory
    purchasePrice: number
    salePrice: number
    lastSaleDate: string
    lastPurchaseDate: string
    lastPurchaseMachine: string
}