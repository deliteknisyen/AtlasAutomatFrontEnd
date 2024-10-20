import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {useState} from "react";





const page = ({isVisible=false}: {isVisible: boolean})=>{
    const machineCreated = new CustomEvent('machineCreated')


    const handleCreate = async (e:any)=>{
        e.preventDefault()
        await fetch('http://localhost:3030/api/machines', {
            method: "POST",
            body: JSON.stringify({...form}),
            headers:{"Content-Type":"application/json"}
        }).then(()=>{
            document.dispatchEvent(machineCreated)
        })
    }

    const [form, setForm] = useState({
        serialNumber: "",
        model:"",
        isActive:false,
        status: 'online'
    })

    return <Dialog open={isVisible}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Makine Oluşturma</DialogTitle>
                <DialogDescription className="grid grid-cols-3 gap-6 pt-6">
                    {/*Serial Number*/}
                    <div className="col-span-full flex flex-col space-y-2">
                        <Label htmlFor="email">Seri Numarası</Label>
                        <Input onChange={e => setForm({...form, serialNumber: e.target.value})}/>
                    </div>

                    {/*Model*/}
                    <div className="col-span-full flex flex-col space-y-2">
                        <Label htmlFor="email">Makine Modeli</Label>
                        <Input onChange={e => setForm({...form, model:e.target.value})}/>
                    </div>

                    {/*isActive*/}
                    <div className="col-span-full flex justify-between h-12 items-center w-full border p-2 rounded-md">
                        <Label>Makinenin çalışma durumu</Label>
                        <Switch
                            checked={form.isActive}
                            onCheckedChange={e=>setForm({...form, isActive:e})}
                        />
                    </div>

                    <div className="col-span-full flex justify-end">
                        <Button type="button" onClick={(e)=>handleCreate(e)}>Oluştur</Button>
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}

export default page