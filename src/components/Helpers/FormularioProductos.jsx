const FormularioProductos = ( ) =>{
    return(
<section className="registro-productos">
<form className="productos" action="">
            <h1 class="titulo">Productos</h1>
                <input class="form3_item" type="text" placeholder="Nombre"/>
                <input class="form3_item" type="text" placeholder="Sexo"/>
                <input class="form3_item" type="text" placeholder="Referencia"/>
                <input class="form3_item" type="text" placeholder="Tamaño"/>
                <input class="form3_item" type="text" placeholder="Cantidad"/>
                <input class="form3_item" type="text" placeholder="Descripción"/>
                <input id="btnGuardar" class="btnGuardar" type="submit" value="Agregar"/>
            </form>
</section>
    )
}

export default FormularioProductos;