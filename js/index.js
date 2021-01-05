/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}


function inicializarSelects(){
  fetch('/api/cities.php')
  .then(response => response.json())
  .then(data => {
    $.each(data, function (i, item) {
      $('#selectCiudad').append($('<option>', { 
          value: item,
          text : item 
      }));
  });
  });

  fetch('/api/types.php')
  .then(response => response.json())
  .then(data => {
    $.each(data, function (i, item) {
      $('#selectTipo').append($('<option>', { 
          value: item,
          text : item 
      }));
  });
  });
};


function inicializarContenido(){
  fetch('/api/filter.php')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    $.each(data, function (i, item) {
      $('#resultContainerCollection').append(`<li class="collection-item">
      <b>Direccion:</b> <span>`+item['Direccion']+`</span> <br>
      <b>Ciudad:</b> <span>`+item['Ciudad']+`</span> <br>
      <b>Telefono:</b> <span>`+item['Telefono']+`</span> <br>
      <b>Codigo Postal:</b> <span>`+item['Codigo_Postal']+`</span> <br>
      <b>Tipo:</b> <span>`+item['Tipo']+`</span> <br>
      <b>Precio:</b> <span>`+item['Precio']+`</span> <br>
      <button class="btn waves-effect waves-light guardarFavorito" type="button" name="`+'guardar_'+item['Id']+`" id="`+'guardar_'+item['Id']+`" onclick="guardarContenido(this)">
      Guardar
      </button>
    </li>`);
  });
  });
}

inicializarSlider();
//playVideoOnScroll();
inicializarSelects();
inicializarContenido();