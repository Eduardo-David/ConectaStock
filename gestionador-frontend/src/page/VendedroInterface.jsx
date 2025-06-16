import { useEffect, useState } from "react";
import { svgInterface } from "../assets/icons";
import VendedorTabs from "../components/VendedorTabs";

function VendedorInterface() {

    const [tab, setTab] = useState(0);

    return (
        <main className="grid grid-cols-4 grid-rows-4 bg-gray-600 h-screen w-screen">
            <section className="col-start-2 row-start-1 row-span-4 col-span-3 m-4 border-amber-50 border-2 rounded-2xl
            flex justify-center items-center">
                {tab === 0 && VendedorTabs.Inicio()}
                {tab === 1 && VendedorTabs.VenderProducto()}
                {tab === 2 && VendedorTabs.AñadirProducto()}
                {tab === 3 && VendedorTabs.ActualizarProducto()}
                {tab === 4 && VendedorTabs.Inventario()}
            </section>
            <section className="grid grid-cols-1 grid-rows-5 col-start-1 row-start-1 row-span-4 m-4 border-amber-50 border-2 rounded-2xl">
                <button className=" flex cursor-pointer h-auto w-auto italic font-bold font-mono text-base col-start-1 row-start-1 justify-self-center self-center"
                    onClick={() => { setTab(0) }}>{svgInterface.inicio()}Inicio</button>
                <button className=" flex cursor-pointer h-auto w-auto italic font-bold font-mono text-base col-start-1 row-start-2 justify-self-center self-center" onClick={() => { setTab(1) }}>{svgInterface.venta()}Vender producto</button>
                <button className="flex cursor-pointer h-auto w-auto italic font-bold font-mono text-base col-start-1 row-start-3 justify-self-center self-center" onClick={() => { setTab(2) }}>{svgInterface.addProducto()}Añadir Producto</button>
                <button className="flex cursor-pointer h-auto w-auto italic font-bold font-mono text-base col-start-1 row-start-4 justify-self-center self-center " onClick={() => { setTab(3) }}>{svgInterface.updateProducto()}Actualizar producto</button>
                <button className="flex cursor-pointer h-auto w-auto font-bold font-mono text-base col-start-1 row-start-5 justify-self-center self-center " onClick={() => { setTab(4) }}>{svgInterface.inventario()}Inventario</button>
            </section>
        </main>
    )
}
export default VendedorInterface;