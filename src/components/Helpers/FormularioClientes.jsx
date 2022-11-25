const FormularioClientes = () => {
    return(
        <section className="registro-clientes">
        <form className="clientes" action="">
        <h1>Clientes</h1>
        <input id="nombre" class="form-item" placeholder="Nombre" type="text"/>
        <input id="documento" class="form-item" placeholder="Documento" type="text"/>
        <input id="correo" class="form-item" placeholder="Correo" type="email"/>
        <input id="direccion" class="form-item" placeholder="Dirección" type="text"/>
        <input id="direccion" class="form-item" placeholder="Barrio" type="text"/>
        <input id="telefono" class="form-item" placeholder="Telefono" type="tel"/>
        <input id="btnGuardar" class="btnGuardar" type="submit" value="Agregar"/>
        </form>
       
        </section>
    )
}

export default FormularioClientes;