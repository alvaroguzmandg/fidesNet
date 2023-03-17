
(function (){
  let headerMenu = document.getElementById('menuHeader')


  contenidoMenu = 
  `<nav class="navbar navbar-expand-lg" style="background-color: #fff;">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://fidesnet.com.ar/">
      <img src="https://fidesnet.com.ar/images/logoFides.png" alt="Logo - FIDESnet" width="220px">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="https://fidesnet.com.ar/profesionales">Profesionales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://fidesnet.com.ar/servicios">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://fidesnet.com.ar/clientes">Clientes</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="https://fidesnet.com.ar/tendencias">Tendencias</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://fidesnet.com.ar/tendencias#publicacionesDestacadas">Notas y Artículos</a></li>
            <li><a class="dropdown-item" href="https://fidesnet.com.ar/tendencias/calendario">Calendario</a></li>
            <li><a class="dropdown-item" href="https://fidesnet.com.ar/tendencias/newsletters">Newsletter</a></li>
          </ul>

        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://fidesnet.com.ar/nosotros">Acerca de</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>`


  headerMenu.innerHTML = contenidoMenu
  
})()




