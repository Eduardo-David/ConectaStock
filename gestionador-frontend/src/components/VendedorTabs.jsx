function Inicio() {
    return (
        <h1 className="font-bold text-3xl text-amber-50">componente del inicio</h1>
    )
}
function AñadirProducto() {
    return (
        <section class="grid grid-cols-3 grid-rows-3 h-full w-full">
            
                <h2 class="text-xl font-bold text-white col-start-1 row-start-1 m-3">Añadiendo nuevo producto</h2>
                <form action="#" className="col-start-2 row-start-1 row-span-3 self-center justify-self-center h-auto w-auto">
                    <div class="grid grid-cols-2 gap-6">
                        <div class="col-span-2">
                            <label htmlFor="name" class="text-sm font-medium text-white">Nombre del Producto</label>
                            <input type="text" name="name" id="name" class="mt-2 text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="ingrese nombre del producto" required=""/>
                        </div>
                        <div class="w-full">
                            <label htmlFor="brand" class=" text-sm font-medium text-white">Marca</label>
                            <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="marca del producto" required=""/>
                        </div>
                        <div class="w-full">
                            <label htmlFor="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                            <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="9999" required=""/>
                        </div>
                        <div>
                            <label htmlFor="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                            <input type="text" name="categoria" id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ingrese texto" required=""/>
                        </div>
                    
                    </div>
                    <button type="submit" class="inline-flex items-center text-sm font-medium text-center text-black bg-green-500 rounded-lg border-2 p-3 mt-2">
                        Añadir Producto
                    </button>
                </form>
           
        </section>
    )
}
function VenderProducto() {
    return (
        <h1 className="font-bold text-3xl text-amber-50">componente para Vender producto</h1>
    )
}
function ActualizarProducto() {
    return (
        <h1 className="font-bold text-3xl text-amber-50">componente para Actualizar producto</h1>
    )
}
function Inventario() {
    return (
        <h1 className="font-bold text-3xl text-amber-50">componente para consultar inventario</h1>
    )
}

const VendedorTabs = { Inicio, AñadirProducto, VenderProducto, ActualizarProducto, Inventario }
export default VendedorTabs;