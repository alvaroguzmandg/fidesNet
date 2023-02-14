
(function (){
  let headerMenu = document.getElementById('menuHeader')


  contenidoMenu = 
  `<nav class="navbar navbar-expand-lg" style="background-color: #fff;">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://alvaroguzmandg.github.io/fidesNet">
      <img src="https://alvaroguzmandg.github.io/fidesNet/images/logoFides.png" alt="Bootstrap" width="220px">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="https://alvaroguzmandg.github.io/fidesNet/profesionales">Profesionales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://alvaroguzmandg.github.io/fidesNet/servicios">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://alvaroguzmandg.github.io/fidesNet/clientes">Clientes</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="https://alvaroguzmandg.github.io/fidesNet/tendencias">Tendencias</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://alvaroguzmandg.github.io/fidesNet/tendencias#publicacionesDestacadas">Notas y Artículos</a></li>
            <li><a class="dropdown-item" href="https://alvaroguzmandg.github.io/fidesNet/tendencias/calendario">Calendario</a></li>
            <li><a class="dropdown-item" href="https://alvaroguzmandg.github.io/fidesNet/tendencias/newsletters">Newsletter</a></li>
          </ul>

        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://alvaroguzmandg.github.io/fidesNet/nosotros">Acerca de</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>`


  headerMenu.innerHTML = contenidoMenu
  
})()




