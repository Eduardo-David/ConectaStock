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
                            <input type="text" name="name" id="name" class="mt-2 text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" required=""/>
                        </div>
                        <div class="w-full">
                            <label htmlFor="brand" class=" text-sm font-medium text-white">Marca</label>
                            <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                        </div>
                        <div class="w-full">
                            <label htmlFor="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                            <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
                        </div>
                        <div>
                            <label htmlFor="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Select category</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (kg)</label>
                            <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/>
                        </div>
                        <div class="sm:col-span-2">
                            <label htmlFor="description" class="block text-sm font-medium text-white">Description</label>
                            <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="inline-flex items-center text-sm font-medium text-center text-white rounded-lg">
                        Add product
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