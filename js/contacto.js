
(function (){
  let bloqueContacto = document.getElementById('bloqueContacto')


  contenidoContacto = 
  `
  <span class="w90 mw1080 centrado" data-aos="fade-up" data-aos-duration="1000">
    <span class="titulo">Dejanos tu mensaje</span>
      <span class="contenidoForm w90 mw900 centrado fontTexto">
        <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo electrónico">
        </div>
        <div class="mb-3">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Dejanos tu mensaje"></textarea>
        </div>
        <span class="d-flex align-items-center justify-content-between">
          <span>
            <input type="checkbox" name="recibir" id="suscribir" value="Quiero suscribirme al newsletter">
            <label>Quiero suscribirme al newsletter</label>
          </span>
          <button type="submit">ENVIAR</button>
        </span>
      </span>
  </span>
  `


  bloqueContacto.innerHTML = contenidoContacto
  
})()




