import {Reel} from "@/typs/reel";
import {Technician} from "@/typs/technician";
import {Company} from "@/typs/company";

export type Machine = {
    id: string
    serialNumber: string
    model?: string
    description?: string
    department?: string
    createdAt: string
    updatedAt?: string
    isActive: boolean
    token?: string
    status: 'online' | 'offline' | 'faulty' | 'unregistered' | 'pending' | 'maintenance_due' | 'needs_service',
    lastHeartbeat: string
    reels: Reel['serialNumber'][]
    company: Company['id']
    assignedTechnicianId: Technician['id']
    location: string
    lastServiceDate: string
    nextMaintenanceDue: string
}