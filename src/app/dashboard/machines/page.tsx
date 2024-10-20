'use client'

import { useState, useEffect } from "react";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button";
import CreateDialog from "@/app/dashboard/machines/components/createDialog";
import { Machine } from "@/typs/machine";

export default function Page() {
    const [machines, setMachines] = useState<Machine[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    // Fetch işlemini useEffect ile yapıyoruz
    const fetchMachines = async () => {
        try {
            let response = await fetch('http://localhost:3030/api/machines');
            let data = await response.json();
            setMachines(data);  // machines state'ini güncelliyoruz
        } catch (error) {
            console.error("Veri çekilirken bir hata oluştu:", error);
        }
    };

    // sayfa yüklendiğinde makineleri fetch eder
    useEffect(() => {
        fetchMachines();  // İlk yüklemede veri çekiyoruz
    }, []);

    document.addEventListener('machineCreated', async ()=>{
        setIsVisible(false)
        await fetchMachines()
    })

    return (
        <div className="flex flex-col space-y-6 p-6">
            <div className="flex justify-between items-center">
                <h2>Makineler</h2>
                <Button onClick={() => setIsVisible(true)}>Yeni Ekle</Button>
            </div>
            <div className="">
                <DataTable columns={columns} data={machines} />
            </div>

            <CreateDialog isVisible={isVisible} onCreatedEvent={()=>setIsVisible(false)} />
        </div>
    );
}
