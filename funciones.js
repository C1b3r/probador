/*Variables*/
var anchogafas;
var altogafas;
var estoypulsando=false;
var mousex=0,mousey=0;
var prevX=0,prevY=0;
var ima;

var scaleX=1, scaleY=1 , angulo=0, initMouseX = 0, initMouseY = 0, radianes = Math.PI/180;

var image = new Image();
var imageLoader = document.getElementById('imageLoader');

var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var fondo;
var funciones= document.getElementById('funciones');
/*Listeners*/
document.getElementById("menos").addEventListener("click", menos);
document.getElementById("mas").addEventListener("click", mas);
document.getElementById("angulo").addEventListener("click", angulo3);
document.getElementById("angulo2").addEventListener("click", angulo2);

canvas.addEventListener('mousedown',pulsaRaton,false); 
canvas.addEventListener('mousemove',mueveRaton,false); 
canvas.addEventListener('mouseup',levantaRaton,false);
imageLoader.addEventListener('change', handleImage, false);

document.getElementById('imagen').addEventListener('click', function(event) {
  func(event.target);/*obtengo el valor del target/elemento que he pulsado*/
});

document.getElementById("foto").addEventListener("click", function(){
	var image = canvas.toDataURL("image/png"); 
	window.location.href=image;
	var w=window.open('about:blank','image from canvas');
	w.document.write("<img src='"+image+"' alt='from canvas'/>");
});

/*Funciones*/
function pulsaRaton(){
  estoypulsando=true;  
}


function mueveRaton(evt){
var rect = canvas.getBoundingClientRect();
  if(estoypulsando){
	mousex=evt.clientX - rect.left;
  	mousey=evt.clientY - rect.top;
	updateImagen();
  }
}
function levantaRaton(){
  estoypulsando=false;
}




function func(element) {/*pillo el src y lo pinto encima del fondo*/
  ima=element.src;
  pintarotra(ima);
}


function handleImage(e){/*aqui recoge la imagen del input type file*/
  var reader = new FileReader();
  reader.onload = function(event){
		var img = new Image();
		ver();/*muestro los botones restantes*/   
		img.onload = function(){
			fondo=img;
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img,0,0);
		  }
			img.src = event.target.result;
    }
  reader.readAsDataURL(e.target.files[0]);  
} 

function ver(){
	funciones.classList.remove("aunno");
	}

function updateImagen() {
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pintarfondo();/*me aseguro poner el fondo siempre*/
        ctx.rotate(angulo);/*aqui no está el ctx.translate no hace falta, si lo pongo, cuando pulse la imagen me la manda a china*/
		ctx.drawImage(image, mousex, mousey, image.width*scaleX, image.height*scaleY);
        ctx.restore();
    }
	
function angulo3(){
    angulo+=radianes;
    updateImagen();
  }
function angulo2(){
    angulo-=radianes;
    updateImagen();
}

function mas() {
    scaleX += .03;
    scaleY = scaleX;
    updateImagen();
    }
function menos(){
   scaleX -= .03;
   scaleY = scaleX;
   updateImagen();
    }
	
function pintarotra(imagen){
		scaleX=1; scaleY=1;//reseteo 
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		pintarfondo();/*limpio el canvas para asegurarme siempre que la imagen de fondo será la que he subido*/
		image.src = imagen;
		image.onload = function () {
				var cxt = canvas.getContext('2d');
				cxt.drawImage(image,canvas.width / 2 - image.width / 2,canvas.height / 2 - image.height / 2,image.width,image.height);
			};
}


function pintarfondo(){
         canvas.width = fondo.width;
         canvas.height = fondo.height;
         ctx.drawImage(fondo,0,0);    
}
