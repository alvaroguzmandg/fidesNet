const listadoNews = [
  {
    "id": "1",
    "fecha": "Diciembre 2022",
    "titulo": "ÍNDICE:",
    "file": "Fidesnet_NewsletterMensualDiciembre2022.pdf",
    "descripcion": `
      <span>- Estándares Internacionales en materia de Prevención de Crímenes Financieros</span>
      <span>- Novedades Regulatorias emitidas por U.I.F., B.C.R.A., C.N.V., A.F.I.P., I.N.A.E.S.</span>
      `,
  },
  {
    "id": "2",
    "fecha": "Noviembre 2022",
    "titulo": "ÍNDICE:",
    "descripcion": `
      <span>- Estándares Internacionales en materia de Prevención de Crímenes Financieros</span>
      <span>- Novedades Regulatorias emitidas por U.I.F., B.C.R.A., C.N.V., A.F.I.P., I.N.A.E.S.</span>
      `,
      "file": "Fidesnet_NewsletterMensualNoviembre2022.pdf",
  },
  {
    "id": "3",
    "fecha": "Octubre 2022",
    "titulo": "ÍNDICE:",
    "descripcion": `
      <span>- Estándares Internacionales en materia de Prevención de Crímenes Financieros</span>
      <span>- Novedades Regulatorias emitidas por U.I.F., B.C.R.A., C.N.V., A.F.I.P., I.N.A.E.S.</span>
      `,
      "file": "Fidesnet_NewsletterMensualOctubre2022.pdf",
  }
]


const definirNews = () => {


  listadoProductos.forEach(listadoProductos => {
    let fecha = listadoNews.fecha;
    let titulo = listadoNews.titulo;
    let descripcion = listadoNews.descripcion;
    let file = listadoNews.file;
  })

  //Se muestran los productos por orden alfabético
  mostrarNews(listadoNews)

}



function mostrarNews(listadoNews) {
  let bloqueNews = document.getElementById('contenedor-bloqueNews')
  listadoNews.forEach((listadoNews) => {

      let newsBloque = document.createElement('div');
      newsBloque.classList.add("news-bloque");
      htmlString = `
        <span class="news-bloque--image">
          <img src="../../images/newslettersBack-${listadoNews.id}.png" alt="Imagen background newsletter">
        </span>
        <span class="news-bloque--info">
          <span class="news-bloque--info--fecha fontTitulo colorDestacado">${listadoNews.fecha}</span>
          <!--<span class="news-bloque--info--titulo fontTexto">${listadoNews.titulo}</span>-->
          <!--<span class="news-bloque--info--descripcion fontTexto">${listadoNews.descripcion}</span>-->
          <span class="news-bloque-links fontTexto colorDestacado">
            <a href="files/${listadoNews.file}" target="_blank">
              <button class="news-bloque-links-icono"><img src="../../images/ic-ver.png" alt="Icono Ver"></button> 
              Ver newsletter
            </a>
          </span>
        </span>
          `
      newsBloque.innerHTML = htmlString
      bloqueNews.append(newsBloque);


  })
}

mostrarNews(listadoNews)