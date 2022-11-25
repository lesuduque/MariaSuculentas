const FormularioProveedores = () =>{
    return(
        <section className="registro-proveedores">
            <form className="proveedores" action="">
            <h1 class="titulo">Proveedores</h1>
                <input class="form2_item" type="text" placeholder="Nombre"/>
                <input class="form2_item" type="text" placeholder="Nit"/>
                <input class="form2_item" type="text" placeholder="Correo"/>
                <input class="form2_item" type="text" placeholder="Direccion"/>
                <input class="form2_item" type="text" placeholder="Telefono"/>
                <input class="form2_item" type="text" placeholder="Producto"/>
                <input class="form2_item" type="text" placeholder="Descripcion"/>
                <input id="btnGuardar" class="btnGuardar" type="submit" value="Agregar"/>
            </form>
        </section>
    )
}

export default FormularioProveedores;