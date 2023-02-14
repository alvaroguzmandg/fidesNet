
(function (){
  let bloqueContacto = document.getElementById('bloqueContacto')


  contenidoContacto = 
  `
  <span class="w90 mw1080 centrado" data-aos="fade-up" data-aos-duration="1000">
    <span class="titulo">Dejanos tu mensaje</span>
      <span class="contenidoForm w90 mw900 centrado fontTexto">
        <div class="mb-3">
        <form method="GET" action="https://app.embluemail.com/Online/TriggerUrlExterna.aspx" onsubmit="return validateForm();" novalidate="">
        <input type="hidden" name="key" value="ccc44137-0b8c-4849-be62-1a67f4c64e11">
          <input type="email" class="form-control" id="email" name="email" required="" data-error="Campo requerido|Formato inválido" placeholder="Correo electrónico">

        </div>
        <div class="mb-3">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Dejanos tu mensaje"></textarea>
        </div>
        <span class="d-flex align-items-center justify-content-between">
          <span>
            <input type="checkbox" name="recibir" id="suscribir" value="Quiero suscribirme al newsletter">
            <label>Quiero suscribirme al newsletter</label>
          </span>
          <button type="submit" type="submit" value="">ENVIAR</button>
          </form>
        </span>
      </span>
  </span>
  `


  bloqueContacto.innerHTML = contenidoContacto
  
})()




