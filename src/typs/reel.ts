import {Machine} from "@/typs/machine";
import {Product} from "@/typs/product";

export interface Reel{
    serialNumber: string
    machineId: Machine['id']
    productCount: number
    compartments: boolean[]
    isActive: boolean
    reorderLevel: number
    product: Product
    createdAt: string
}