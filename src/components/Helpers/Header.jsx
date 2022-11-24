const Header = () => {
    return(
        <header>
            <nav class="navbar bg-success.bg-gradient">
            <section class="container-fluid">
            
            <img src="https://www.thecolvinco.com/es/c/wp-content/uploads/2020/06/2b-768x768.jpg" alt="Logo" width="70" height="70" class="d-inline-block align-text-top rounded-circle " />
            <h1 class="text-light position-absolute top-50 start-50 translate-middle"> Maria Suculentas </h1>
            
          
            <form className="buscar" class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
             
  </section>
</nav>
        
        </header>
    )
}

export default Header;