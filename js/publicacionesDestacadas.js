
(function (){
  let publicacionesDestacadas = document.getElementById('publicacionesDestacadas--contenido')


  contenidoPublicaciones = 
  `
  <span class="contenedorNotas centrado w90 mw900 fontTexto">
    <span class="contenedorNota-bloque" data-aos="fade-up" data-aos-duration="1500">
      <h3 class="nota-titulo">Sistema ingregral de prevención del lavado de activos - SIPLA</h3>
      <h4 class="nota-anticipo">Esta columna analiza la emisión de la Resolución No. 808/2022 por parte de la SSN, que implementa en el ámbito de las entidades aseguradoras y reaseguradoras el “Sistema Integral de Prevención del Lavado de Activos”, conocido por sus siglas como SIPLA. [...]</h4>
      <button type="button" onclick="location.href='https://fidesnet.com.ar/notas/2023/01_03-sistema-integral-de-prevencion-del-lavado-de-activos-sipla.html'" class="nota-seguirLeyendo"> >seguir Leyendo</button>
    </span>

    <span class="contenedorNota-bloque" data-aos="fade-up" data-aos-duration="1500">
      <h3 class="nota-titulo">Feedback sobre matrices de Autoevaluacion de Riesgos de LA/FT</h3>
      <h4 class="nota-anticipo">Esta columna analiza el feedback difundido por la UIF en el documento denominado "Formación UIF 2022 – Análisis de los Informes Técnicos de Autoevaluaciones de Riesgos de los Sujetos Obligados", emitido como resultado de las Jornadas de Retroalimentación [...]</h4>
      <button type="button" onclick="location.href='https://fidesnet.com.ar/notas/2022/11_15-feedback-sobre-matrices-de-autoevaluacion-de-riesgos-de-LA-FT.html'" class="nota-seguirLeyendo"> >seguir Leyendo</button>
    </span>
  </span>
  `


  publicacionesDestacadas.innerHTML += contenidoPublicaciones
  
})()






