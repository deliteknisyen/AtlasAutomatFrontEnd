"use client"

import { ColumnDef } from "@tanstack/react-table"
import {Machine} from "@/typs/machine";

export const machines : Machine[] = [
    {
        id: 'ss',
        serialNumber: "123456",
        createdAt: "",
        isActive: false,
        status: "online",
        lastHeartbeat: "",
        reels: [],
        company: "123",
        assignedTechnicianId: "",
        location: "",
        lastServiceDate: "",
        nextMaintenanceDue: ""
    }
]

export const columns: ColumnDef<Machine>[] = [
    {
        accessorKey: "serialNumber",
        header: "Seri No",
    },
    {
        accessorKey: "company",
        header: "Müşteri",
    }
]
