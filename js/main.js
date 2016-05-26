/*-------------PARA LAS INSTRUCCIONES----------------------*/
$(function() {
    $( "#dialog" ).dialog({
    autoOpen: false,
    show: {
        effect: "blind",
        duration: 1000
    },
    hide: {
        effect: "explode",
        duration: 1000
    }
    });

    $( "#opener" ).click(function() {
        $( "#dialog" ).dialog( "open" );
        });
});
/*--------------------------------------------*/
var puntos=0;
var intentos=5;

$(document).ready(function(){
    var nombreBien="";
    $('#sede').on('change',function(){
    var nombre=0;
    var i=0
    var cajaSelected = $(this);
    var resultado = Math.floor((Math.random() * 40) + 1);
    var valor = $(this).val();
   
    cajaSelected.addClass('form-control');
    if (valor == 1) {
        $("#imagen").attr('src','fotos/'+ mexico[resultado].image)
        nombreBien = (mexico[resultado].name).toUpperCase()
    }
    else if (valor==2) {
        $("#imagen").attr('src','fotos/'+mexico[resultado].image)
        nombreBien = (mexico[resultado].name).toUpperCase()
    };

    }); 

    $('#boton').on('click', function(event){
        event.preventDefault() // para que no recargue
        var selec= ($('#nombre').val()).toUpperCase()
        
        
        if (nombreBien == selec) {
            alert('Lo hiciste muy bien!!')
            puntos += 5;
            $("span").text(puntos)
           
            resultado = Math.floor((Math.random() * 40) + 1);
            var pais=$('#sede').val();
            
            if (pais == 1) {
                $("#imagen").attr('src','fotos/'+mexico[resultado].image);
                nombreBien = (mexico[resultado].name).toUpperCase();
                }
                else if (pais == 2) {
                    $("#imagen").attr('src','fotos/'+mexico[resultado].image);
                    nombreBien = (mexico[resultado].name).toUpperCase();
                }
            }
            else{
                puntos-=1;
                alert('El nombre es Incorrecto :( \nVuelva a intentar!!');
                intentos-=1;
                if (intentos==0) {
                alert('Lo siento! Has perdido :('); 
                $('#boton').click(function() {
                    location.reload();  // Recargo la página
                });
            }
            }
                
                $('#nombre').val("");
                $('#nombre').focus();
                $("span").text(puntos);

})
})
/*function enteroRandom(min,max){
var numero = Math.random() * (max-min) + min;
var entero = Math.floor(numero);
return entero;
};
function desplegarNuevaJugada(){
var tamanoArreglo = mexico.length;
var numeroAzar = enteroRandom(0,tamanoArreglo);

var imagen = 'fotos/' + mexico[numeroAzar].image;
$('#imagen').attr('src', imagen);
};
$(document).ready(function(){
$('#boton').click(function(){
var nombre =$('#nombre').val();
console.log('El usuario escribio'+ nombre);
var nombreAdivina = mexico[numeroAzar].name;
console.log('El nombre correcto es: ' + nombreAdivina);
if (nombre === nombreAdivina ){
desplegarNuevaJugada();
}else{
alert("ERROR 500!")
}
});
desplegarNuevaJugada();
});*/