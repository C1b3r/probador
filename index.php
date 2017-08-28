<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="robots" content="noindex, nofollow">
  <meta name="googlebot" content="noindex, nofollow">
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@arturoki" />
  <meta name="twitter:title" content="Probador de gafas en este caso" />
  <meta name="twitter:description" content="Versión alfa." />
  <meta name="twitter:image" content="descarga.png" />
  <style type="text/css">
body{overflow-x:hidden;}
canvas{max-width: 600px;background-color: #fde89b;margin: 0 auto;display: block;border: 2px solid black;margin-bottom: 3px;}
.boton {-webkit-border-radius: 28;-moz-border-radius: 28;border-radius: 28px;font-family: Arial;color: #000000;font-size: 20px;background: #ffffff;
padding: 10px 20px 10px 20px;border: solid #000000 2px;text-decoration: none;}
.aunno{visibility:hidden;}
.boton:hover {background: #b7bbbd;text-decoration: none;}
.boton:active{ transform: translateY(4px);}
.boton:focus {outline:0;}
  </style>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" >
  <title>Probador</title>
</head>

<body>
  <canvas id="imageCanvas" width="530px" height="480px"></canvas>
<input type="file" class="boton" id="imageLoader" name="imageLoader"/>
<div id="funciones" class="aunno" style="display: inline-block;">
<button type="button" id="angulo" class="boton"><i class="fa fa-repeat" aria-hidden="true"></i></button>
<button type="button" id="angulo2"class="boton"><i class="fa fa-undo" aria-hidden="true"></i></button>
<button type="button" id="menos" class="boton">Reducir</button>
<button type="button" id="mas" class="boton">Aumentar</button>
<button type="button" id="foto" class="boton">Foto</button>
</div>
<!--<a id="download">descarga</a>-->

  <div id="imagen">
    <h1>Gafas</h1>
<img src="gafas1.png"  alt="gafas">
<img src="F90.png" id="imagen" alt="gafas">
<img src="gafas-sol-hawkers-one-OTR02-f.png" id="imagen" alt="gafas">
<img src="hipster.png" id="imagen" alt="gafas">
  </div>

<script type="text/javascript" src="funciones.js"></script>  
</body>