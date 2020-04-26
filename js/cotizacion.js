(function() {

  var proteccion = document.getElementById('proteccion');
  var pareja = document.getElementById('pareja');
  var hijos = document.getElementById('hijos');
  proteccion.addEventListener('change', function() {
    if(proteccion.value === 'mi y mi pareja') {
      pareja.classList.remove('ocultar');
      hijos.classList.add('ocultar');
    } else if (proteccion.value === 'mi, mi pareja e hijos') {
      pareja.classList.remove('ocultar');
      hijos.classList.remove('ocultar');
    } else if (proteccion.value === 'mi y mis hijos') {
      hijos.classList.remove('ocultar');
      pareja.classList.add('ocultar');
    } else { 
      pareja.classList.add('ocultar');
      hijos.classList.add('ocultar');
    } 
    showNext(this);
  });

  function showNext(element) {
    element.parentElement.parentElement.nextElementSibling.classList.remove('ocultar');
  }

  function validation() {
    condition = proteccion.value;

  }
  function () {

  }

  // TODO
  // show validation in each question
  // hide and show each options
  // when options are complete show the input box

  var numeroHijos = document.getElementById('numero-hijos');
  var block_to_insert = document.createElement('span');
  var container_block = document.getElementById( 'edades' );
  
  numeroHijos.addEventListener('change', function() {
    if (numeroHijos.value === "1"){
      container_block.innerHTML = 'hijo de ';
    } else {
      container_block.innerHTML = 'hijos de ';  
    }

    
    for (var i = 0; i < numeroHijos.value; i++) {
      var number = i + 1;
      if (i === numeroHijos.value - 2) {
        block_to_insert.innerHTML = '<input name="edad-hijo' + number +'" type="number" class="input-edad" id="edad-hijo' + number + '"> y ' ;
      } else if (i != numeroHijos.value-1) {
        block_to_insert.innerHTML = '<input name="edad-hijo' + number +'" type="number" class="input-edad" id="edad-hijo' + number + '">, ' ;
      } else {
        block_to_insert.innerHTML = '<input name="edad-hijo' + number +'" type="number" class="input-edad" id="edad-hijo' + number + '"> años.' 
      }
      var cln = block_to_insert.cloneNode(true);
      container_block.appendChild( cln ); 

    }
    var listenerHijos = numeroHijos.parentElement.parentElement;
    listenerHijos.addEventListener('blur', function(event) {
        if (event.target != numeroHijos) {
          document.getElementById('message-edad-hijos').classList.remove('ocultar');
        }
    }, true);


    
  });
  
 window.cotizacion = cotizacion;

})();