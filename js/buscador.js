function buscarContenido(){
    var ciudad =$('#selectCiudad').children("option:selected").val();
    var tipo = $('#selectTipo').children("option:selected").val(); 

    $('#resultContainerCollection').empty();

    fetch('/api/filter.php?&tipo='+tipo+'&ciudad='+ciudad)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      $.each(data, function (i, item) {
        $('#resultContainerCollection').append(`<li class="collection-item">
        <b>Direccion:</b> <span>`+item.Direccion+`</span> <br>
        <b>Ciudad:</b> <span>`+item['Ciudad']+`</span> <br>
        <b>Telefono:</b> <span>`+item['Telefono']+`</span> <br>
        <b>Codigo Postal:</b> <span>`+item['Codigo_Postal']+`</span> <br>
        <b>Tipo:</b> <span>`+item['Tipo']+`</span> <br>
        <b>Precio:</b> <span>`+item['Precio']+`</span> <br>
        <button class="btn waves-effect waves-light guardarFavorito" type="submit" name="`+'guardar'+item['Id']+`" id="`+'guardar_'+item['Id']+`" onclick="guardarContenido(this)">
        Guardar
        </button>
      </li>`);
    });
    });
  }


  function buscarFavoritos(){
    $('#guardadosContainerCollection').empty();

    fetch('/api/mostrarguardados.php?')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      $.each(data, function (i, item) {
        $('#guardadosContainerCollection').append(`<li class="collection-item">
        <b>Direccion:</b> <span>`+item.Direccion+`</span> <br>
        <b>Ciudad:</b> <span>`+item['Ciudad']+`</span> <br>
        <b>Telefono:</b> <span>`+item['Telefono']+`</span> <br>
        <b>Codigo Postal:</b> <span>`+item['Codigo_Postal']+`</span> <br>
        <b>Tipo:</b> <span>`+item['Tipo']+`</span> <br>
        <b>Precio:</b> <span>`+item['Precio']+`</span> <br>
        <button class="btn waves-effect waves-light guardarFavorito" type="submit" name="`+'guardar'+item['Id']+`" id="`+'guardar_'+item['Id']+`">
        Borrar
        </button>
      </li>`);
    });
    });
  }


  function guardarContenido(x){
    var bienes_id = $(x).attr('id').split('_')[1]
    fetch("/api/guardar.php",{
      method: "POST",
      body: "bienes_id="+bienes_id,
      headers: 
      {
          "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((response) => 
    { 
      console.log(response);
      alert('guardado exitosamente');
    });
  }