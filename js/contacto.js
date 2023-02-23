
(function (){
  let bloqueContacto = document.getElementById('bloqueContacto')


  contenidoContacto = 
  `
  <span class="w90 mw1080 centrado" data-aos="fade-up" data-aos-duration="1000">
  <span class="titulo">Dejanos tu mensaje</span>
    <span class="contenidoForm w90 mw900 centrado fontTexto">
      <div class="mb-3">
        <form method="GET" action="https://app.embluemail.com/Online/TriggerUrlExterna.aspx" onsubmit="return validateForm();" novalidate="">
          <input type="hidden" name="key" value="96728559-8e66-4d22-be6c-fb1df1d4bf9c">
              <input class="form-control" id="email" type="email" placeholder="miemail@miemail.com" name="email" required="" data-error="Campo requerido|Formato inválido">
      </div>
      <div class="mb-3" id="campo-1498318">
        <input id="1498318" type="text" name="1498318" class="form-control" rows="3" placeholder="Dejanos tu mensaje">
      </div>
      <span class="d-flex align-items-center justify-content-between">
        <span>
          <input type="checkbox" name="recibir" id="suscribir" value="Quiero suscribirme al newsletter">
          <label>Quiero suscribirme al newsletter</label>
        </span>
        <button type="submit" type="submit" datos="" value="">ENVIAR</button>
        </form>
      </span>
    </span>
</span>
<script type="text/javascript" src="https://app.embluemail.com/emblue/form_validation.js"></script>
  `


  bloqueContacto.innerHTML = contenidoContacto
  
})()




