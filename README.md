<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis Fragancias</title>
<link rel="stylesheet" href ="stiles.css" type="text/css">
</head> 
    <styles
    /* --- ESTILOS GENERALES Y RESETEO --- */
body {
  background-image: url('imagen/fondo1.jpg'); /* Asegúrate de que esta ruta sea correcta */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #cccccc; /* Color sólido de respaldo */
  /* Fuentes base para el body si quieres una fuente general para toda la página */
  /* font-family: sans-serif; */ 
}

html {
  scroll-behavior: smooth;
}

h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #000203;
  text-align: center;
  margin-bottom: 30px;
}

h2, h3,h4{
  color: #000305;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 15px;
}

/* --- ESTILOS DEL BOTÓN DE WHATSAPP --- */
.whatsapp-button-container {
  text-align: center;
  margin-top: 30px;
}

.whatsapp-button {
  background-color: #25D366; /* Verde de WhatsApp */
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 50px; /* Botón redondeado */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none; /* Si es un <a> */
  display: inline-flex; /* Para alinear el icono y el texto */
  align-items: center;
  gap: 10px; /* Espacio entre icono y texto */
}

.whatsapp-button:hover {
  background-color: #1DA851; /* Verde más oscuro al pasar el ratón */
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.whatsapp-button:active {
  background-color: #178B41;
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.whatsapp-icon {
  width: 24px; /* Tamaño del icono */
  height: 24px;
}
.container {
  /* Fondo con degradado y potencial imagen */
  /* Nota: tu degradado original 'linear-gradient(1deg, rgba(0.2, 0.3, 0.4, 0.), rgba(228, 224, 224, 0.527))'
     tiene valores RGB inválidos (0.2, 0.3, 0.4). Lo he ajustado a valores más típicos.
     Si quieres una imagen de fondo, descomenta la línea de url()
  */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05)), url('ruta/a/tu-imagen-gender-menu.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Efecto de cristal */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* Estilo general */
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 20px 25px;
  margin: 30px auto;
  width: 90%;
  max-width: 400px;
  color: #f0f0f0;
  font-family:Victor Mono;
  text-align: center;
  line-height: 1.6;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}

/* Efecto al pasar el ratón (hover) en gender-menu */
.container-menu:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* H2 dentro de gender-menu */
.container h3 {
  color: #020005;
  margin-bottom: 15px;
  font-size: 1.8em;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

}
.container h1 {
  color: #000000;
  margin-bottom: 15px;
  font-size: 1.8em;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

}

/* --- ESTILOS PARA container2 (Artículo de Fragancias) --- */
.container1 {
  /* Fondo con degradado y potencial imagen */
  /* Nota: tu degradado original 'linear-gradient(1deg, rgba(0.2, 0.3, 0.4, 0.), rgba(228, 224, 224, 0.527))'
     tiene valores RGB inválidos (0.2, 0.3, 0.4). Lo he ajustado a valores más típicos.
     Si quieres una imagen de fondo, descomenta la línea de url()
  */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05)), url('ruta/a/tu-imagen-gender-menu.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Efecto de cristal */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* Estilo general */
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 20px 25px;
  margin: 30px auto;
  width: 90%;
  max-width: 400px;
  color: #f0f0f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  line-height: 1.6;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}

/* Efecto al pasar el ratón (hover) en gender-menu */
.gender-menu:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* H2 dentro de gender-menu */
.gender-menu h2 {
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 1.8em;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
/* --- ESTILOS PARA LOS INPUTS DE ID DEL MÓVIL --- */
.comprador-id-section {
  margin-bottom: 25px;
  text-align: center;
}

.comprador-id-section label {
  display: block;
  margin-bottom: 10px;
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
}

.comprador-id-section input[type="text"] {
  padding: 10px 15px;
  font-size: 1.1em;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 30px);
  max-width: 250px;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 10px;
}

.comprador-id-section input[type="text"]:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
}

/* --- ESTILOS DEL MENÚ de género (botones) --- */
.gender-menu {
  /* Fondo con degradado y potencial imagen */
  /* Nota: tu degradado original 'linear-gradient(1deg, rgba(0.2, 0.3, 0.4, 0.), rgba(228, 224, 224, 0.527))'
     tiene valores RGB inválidos (0.2, 0.3, 0.4). Lo he ajustado a valores más típicos.
     Si quieres una imagen de fondo, descomenta la línea de url()
  */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05)), url('ruta/a/tu-imagen-gender-menu.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Efecto de cristal */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* Estilo general */
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 20px 25px;
  margin: 30px auto;
  width: 90%;
  max-width: 400px;
  color: #f0f0f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  line-height: 1.6;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}

/* Efecto al pasar el ratón (hover) en gender-menu */
.gender-menu:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* H2 dentro de gender-menu */
.gender-menu h2 {
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 1.8em;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* Párrafos dentro de gender-menu */
.gender-menu p {
  font-size: 1.1em;
  margin-bottom: 10px;
}

/* Clase para los botones de tamaño y género */
.menu-button {
  background-color: #029aff38;
  color: rgb(255, 255, 255);
  border: none;
  padding: 15px 25px;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu-button:hover {
  background-color: #8b09fc;
  transform: translateY(-3px);
}

/* Estado 'seleccionado' para los botones de tamaño y género */
.menu-button.selected {
  background-color: #e64dc0ce;
  transform: translateY(-1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border: 2px solid #dc6af8;
}

.menu-button:active {
  background-color: #a847b4;
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* --- ESTILOS para los SELECT (desplegables) --- */
.opciones-select { /* Contenedor para los select */
  margin-bottom: 30px;
  text-align: center;
  /* El siguiente bloque fue una duplicidad de .message-area, lo he comentado.
     Si quieres un efecto de cristal aquí, necesitas definirlo como un nuevo estilo
     para este contenedor, no copiar el de message-area directamente.
  */
  /*
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 20px;
  margin: 20px auto;
  width: 95%;
  max-width: 700px;
  min-height: 150px;
  box-sizing: border-box;
  color: #f0f0f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  text-align: left;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  */
}

.opciones-select select {
  padding: 10px 15px;
  font-size: 1.1em;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f0f8ff; /* Un color de fondo claro para el select */
  color: #333;
  width: calc(100% - 30px);
  max-width: 400px;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  appearance: none; /* Elimina estilos nativos del navegador */
  -webkit-appearance: none;
  -moz-appearance: none;
  /* Corregido el SVG Data URI: el `;charset=US-ASCII,%3Csvg%20xmlns...` estaba mal.
     Debe ser 'data:image/svg+xml;charset=UTF-8,...' */
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="292.4" height="292.4" viewBox="0 0 292.4 292.4"%3E%3Cpath fill="%23333" d="M287 69.4a17.6 17.6 0 00-13.4-6.4H18.8a17.6 17.6 0 00-13.4 6.4 17.6 17.6 0 000 14.2l128 127.9a17.6 17.6 0 0024.8 0l128-127.9a17.6 17.6 0 000-14.2z"%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 12px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.opciones-select select:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
}

/* --- ESTILOS DEL área de mensajes --- */
.message-area {
  /* La primera definición de .message-area fue básica, la segunda tenía el efecto de cristal.
     He eliminado la primera y mantenido la segunda, que es más completa. */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 20px;
  margin: 20px auto;
  width: 95%;
  max-width: 700px;
  min-height: 150px;
  box-sizing: border-box;
  color: #000000; /* Color de texto más oscuro para mayor legibilidad */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  text-align: left; /* Generalmente los mensajes se alinean a la izquierda */
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}

/* Efecto hover en message-area */
.message-area:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 35px 0 rgba(0, 0, 0, 0.4);
}

/* --- RESPONSIVIDAD (Media Queries) --- */

/* Media queries específicas para .container */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

/* Media queries específicas para .container2 */
@media (max-width: 768px) {
  .container2 {
    padding: 30px;
  }
  .container2 h1 {
    font-size: 2.5em;
  }
  .container2 h1::after {
    width: 60px;
  }
  .container2 p {
    font-size: 1em;
  }
  .container2 .cta-button {
    font-size: 1.1em;
    padding: 12px 25px;
  }
}
@media (max-width: 480px) {
  .container2 {
    padding: 20px;
    margin: 20px auto;
  }
  .container2 h1 {
    font-size: 2em;
    margin-bottom: 15px;
  }
  .container2 h1::after {
    width: 50px;
    height: 2px;
    margin-top: 8px;
  }
  .container2 p {
    font-size: 0.95em;
    margin-bottom: 15px;
  }
  .container2 .cta-button {
    font-size: 1em;
    padding: 10px 20px;
  }
}

/* Media queries específicas para .message-area */
@media (min-width: 768px) {
  .message-area {
    max-width: 650px;
  }
}
@media (min-width: 992px) {
  .message-area {
    max-width: 700px;
  }
}

/* Media query general (ya estaba, pero ahora bien ubicada y simplificada) */
@media (max-width: 600px) {
  body {
    padding: 10px;
  }
  /* .container ya tiene sus propias MQ más detalladas, así que se elimina la redundancia aquí.
     Si aún quieres un padding de 20px solo para .container en 600px, puedes agregarlo.
  */
  /* .container {
       padding: 20px;
     }
  */
  h1 { /* Este h1 es el global, no el del container2 */
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  .comprador-id-section input[type="text"],
  .opciones-select select {
    width: 100%;
    max-width: 100%;
  }
  /* Solo si tienes un elemento .tamaño-menu */
  /* .gender-menu, .tamaño-menu {
       grid-template-columns: 1fr;
       gap: 15px;
     }
  */
  .menu-button {
    padding: 12px 20px;
    font-size: 1em;
  }
  .message-area {
    font-size: 1em;
  }
}
.imput-tipe{  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 20px;
  margin: 20px auto;
  width: 95%;
  max-width: 700px;
  min-height: 150px;
  box-sizing: border-box;
  color: #000000; /* Color de texto más oscuro para mayor legibilidad */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  text-align: left; /* Generalmente los mensajes se alinean a la izquierda */
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}

/* Efecto hover en message-area */
.imput-type-area:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 35px 0 rgba(0, 0, 0, 0.4);
}
    

<body> 
    <div class="container">
        <h1>Mis Fragancias Jhon Dainer Arias</h1>
        <h2>todo en perfumes </h2>
    </div>
    <div class="container">
        <div class="comprador-id-section">
            <h2>Más de 300 referencias disponibles</h2>
            <label for="nombreInput"><h2>Bienvenido, para brindarte una excelente atención ingresa tu nombre y número de contacto</h2></label>
            <input type="text" id="nombreInput" placeholder="Nombre" aria-label="Introduce tu nombre">
            <input type="text" id="celularInput" placeholder="Celular" aria-label="Número de celular">
        </div>

        <h2>¿Buscas un buen perfume a un excelente precio?</h2>
        <h3>Selecciona la Casa Perfumera:</h3>
        <div class="opciones-select">
            <select id="casaSelect">
                <option value="">-- ¿Qué casa perfumera? --</option>
                <option value="afnan">Afnan</option>
                <option value="agataruizdelaprada">Agata Ruiz de la Prada</option>
                <option value="ahli">Ahli</option>
                <option value="alharamain">Al Haramain</option>
                <option value="animale">Animale</option>
                <option value="antoniobanderas">Antonio Banderas</option>
                <option value="arianagrande">Ariana Grande</option>
                <option value="armaf">Armaf</option>
                <option value="arrurru">Arrurru</option>
                <option value="azzaro">Azzaro</option>
                <option value="bath&bodyworks">Bath & Body Works</option>
                <option value="benetton">Benetton</option>
                <option value="bharara">Bharara</option>
                <option value="bilieeilish">Billie Eilish</option>
                <option value="bondn°9">Bond N°9</option>
                <option value="britneyspears">Britney Spears</option>
                <option value="burberry">Burberry</option>
                <option value="bvlgari">Bvlgari</option>
                <option value="cacharel">Cacharel</option>
                <option value="calvinklein">Calvin Klein</option>
                <option value="carolinaherrera">Carolina Herrera</option>
                <option value="cartier">Cartier</option>
                <option value="chanel">Chanel</option>
                <option value="christiandior">Christian Dior</option>
                <option value="clinique">Clinique</option>
                <option value="creed">Creed</option>
                <option value="cristianoronaldo">Cristiano Ronaldo</option>
                <option value="diesel">Diesel</option>
                <option value="dolcegabbana">Dolce & Gabbana</option>
                <option value="dumontparis">Dumont Paris</option>
                <option value="elizabetharden">Elizabeth Arden</option>
                <option value="elizabethtaylor">Elizabeth Taylor</option>
                <option value="enriqueiglesias">Enrique Iglesias</option>
                <option value="escada">Escada</option>
                <option value="esika">Esika</option>
                <option value="faconable">Faconable</option>
                <option value="ferrari">Ferrari</option>
                <option value="fredhayman">Fred Hayman</option>
                <option value="giardiniditoscana">Giardini Di Toscana</option>
                <option value="gillescantuel">Gilles Cantuel</option>
                <option value="giorgioarmani">Giorgio Armani</option>
                <option value="givenchy">Givenchy</option>
                <option value="gucci">Gucci</option>
                <option value="guess">Guess</option>
                <option value="hugoboss">Hugo Boss</option>
                <option value="ilmin">Ilmin</option>
                <option value="isseymiyake">Issey Miyake</option>
                <option value="jeanpaulgaultier">Jean Paul Gaultier</option>
                <option value="jeanpascal">Jean Pascal</option>
                <option value="jesusdelpozo">Jesús del Pozo</option>
                <option value="juicycouture">Juicy Couture</option>
                <option value="justinbieber">Justin Bieber</option>
                <option value="katyperry">Katy Perry</option>
                <option value="kenzo">Kenzo</option>
                <option value="killian">Killian</option>
                <option value="kimkardashian">Kim Kardashian</option>
                <option value="lacoste">Lacoste</option>
                <option value="lancome">Lancome</option>
                <option value="lattafa">Lattafa</option>
                <option value="lelabo">Le Labo</option>
                <option value="lizclaiborne">Liz Claiborne</option>
                <option value="loewe">Loewe</option>
                <option value="lolitalempicka">Lolita Lempicka</option>
                <option value="lorenzopazzaglia">Lorenzo Pazzaglia</option>
                <option value="louisvuitton">Louis Vuitton</option>
                <option value="maisonfrancisk">Maison Francis Kurkdjian</option>
                <option value="maluma">Maluma</option>
                <option value="mancera">Mancera</option>
                <option value="mercedesbenz">Mercedes Benz</option>
                <option value="montblanc">Montblanc</option>
                <option value="montale">Montale</option>
                <option value="moschino">Moschino</option>
                <option value="natura">Natura</option>
                <option value="nautica">Nautica</option>
                <option value="onedirection">One Direction</option>
                <option value="orientica">Orientica</option>
                <option value="oscardelarenta">Oscar de la Renta</option>
                <option value="pacorabanne">Paco Rabanne</option>
                <option value="parfumsdemarly">Parfums de Marly</option>
                <option value="parishilton">Paris Hilton</option>
                <option value="perryellis">Perry Ellis</option>
                <option value="pinosilvestre">Pino Silvestre</option>
                <option value="prada">Prada</option>
                <option value="ralphlauren">Ralph Lauren</option>
                <option value="rasasi">Rasasi</option>
                <option value="reyane">Reyane</option>
                <option value="selenagomez">Selena Gomez</option>
                <option value="shakira">Shakira</option>
                <option value="sofiavergara">Sofia Vergara</option>
                <option value="tedlapidus">Ted Lapidus</option>
                <option value="thierrimugler">Thierry Mugler</option>
                <option value="tomford">Tom Ford</option>
                <option value="tommyhilfiger">Tommy Hilfiger</option>
                <option value="tous">Tous</option>
                <option value="valentino">Valentino</option>
                <option value="versace">Versace</option>
                <option value="victoriasecret">Victoria Secret</option>
                <option value="victorinox">Victorinox</option>
                <option value="viktor&rolf">Viktor & Rolf</option>
                <option value="yanbal">Yanbal</option>
                <option value="yvessaintlaurent">Yves Saint Laurent</option>
                <option value="zlatan">Zlatan</option>
            </select>
        </div>

        <h3>Selecciona el Perfume:</h3>
        <div class="opciones-select" id="perfumeSelectContainer" style="display: none;">
            <select id="perfumeSelect">
                <option value="">-- Selecciona un perfume --</option>
            </select>
        </div>

        <h3>¿Para quién es?:</h3>
        <div class="gender-menu" id="generoMenu">
            <button class="menu-button" data-genero="femenino">Para Dama</button>
            <button class="menu-button" data-genero="masculino">Para Caballero</button>
            <button class="menu-button" data-genero="unisex">Unisex</button>
        </div>

        <h3>Ahora selecciona tamaño y precios disponibles:</h3>
        <div class="gender-menu" id="tamañoMenu">
            <button class="menu-button" data-tamaño="30ml" data-precio="20000">30 mililitros precio $20 mil</button>
            <button class="menu-button" data-tamaño="60ml" data-precio="40000">60 mililitros precio $40 mil</button>
            <button class="menu-button" data-tamaño="80ml" data-precio="60000">80 mililitros precio $60 mil</button>
            <button class="menu-button" data-tamaño="100ml" data-precio="85000">100 mililitros precio $85 mil</button>
        </div>

        <h3>Estado de tu pedido:</h3>
        <div class="message-area" id="messageArea">
            Por favor, ingresa tu nombre, número de contacto y haz tus selecciones.
        </div>

        <div class="whatsapp-button-container">
            <button class="whatsapp-button" id="sendWhatsappButton">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" class="whatsapp-icon">
                Enviar Pedido por WhatsApp
            </button>
        </div>
    </div>
     
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
 <div class="container">
        <h1>Mis Fragancias Jhon Dainer Arias </h1> 

<h2> El Arte de Elegir tu Esencia: Una Guía de Mis Fragancias Jhon Dainer Arias

En el vasto universo de los aromas, elegir la  **fragancia perfecta**  
es más que una simple compra; es un viaje personal, una declaración de estilo y una
 forma de dejar una huella memorable. En <br>💦🧴  Mis Fragancias Jhon Dainer Arias🧴💦 
 
 entendemos que cada rocío es una expresión de tu individualidad. Te invitamos a sumergirte
  en el fascinante mundo de la perfumería y descubrir la esencia que te define.

 ¿Por Qué un Perfume Es Más Que un Aroma?

Un perfume es una extensión de nuestra personalidad, un accesorio invisible que comunica mucho antes de que digamos una palabra. La memoria olfativa es una de las más poderosas, capaz de transportarnos a momentos especiales, evocar emociones profundas y conectarnos con recuerdos perdidos. Elegir la fragancia adecuada te permite:<br>

👉🏻 Expresar tu Identidad<br>
 ¿Eres audaz y aventurero, o prefieres la sutileza y la elegancia clásica? Hay un aroma para cada faceta de tu ser.<br>
👉🏻Crear Recuerdos Inolvidables <br>
 Un perfume puede quedar ligado a momentos importantes de tu vida, haciendo que cada vez que lo huelas, revivas esa experiencia.<br>
👉🏻Potenciar tu Confianza<br>
Sentirte bien con tu aroma te da un impulso extra de seguridad para enfrentar el día.<br>
👉🏻Dejar una Impresión Duradera<br>
 La estela de un buen perfume es tu firma personal, dejando una reminiscencia agradable mucho después de haberte ido.<br>


  🔎Descubre Tu Fragancia Ideal en Mis Fragancias Jhon Dainer Arias <br>

🧖🏻‍♀️🧴💕En nuestra colección, cada perfume ha sido seleccionado cuidadosamente para ofrecerte una **experiencia olfativa excepcional**. Nos enorgullece presentar fragancias que no solo huelen increíble, sino que también cuentan una historia y te permiten crear la tuya propia.

<br>🥥🌴🌺🍍🌸Para el Espíritu Aventurero**: Notas cítricas y acuáticas que evocan la brisa marina y la libertad.
<br> 🌸🍓🌷🍒☁️🫧Para el Alma Romántica**: Acordes florales y dulces que susurran historias de amor y pasión.<br>
 🏝️🍹⛱️🌞 🌊Para la Personalidad Enigmática**: Aromas amaderados, especiados y orientales que envuelven con misterio y sofisticación.
<br> 🌊☀️🏝️🐚Para el Día a Día**: Fragancias frescas y limpias que te acompañan con discreción y elegancia.
<br>


🙋🏻‍♂️ Consejos para Maximizar tu Experiencia Olfativa

1. 💖💗🥰💞Aplica en Puntos de Pulso**: Muñecas, cuello, detrás de las orejas y en la parte interna de los codos. El calor de estas zonas ayuda a que la fragancia se difunda mejor.<br>
2.  🥓No Frotes**: Evita frotar tus muñecas después de aplicar el perfume, ya que esto puede romper las moléculas del aroma y alterar su duración.<br>
3.  💧Hidrata tu Piel**: Los perfumes duran más en pieles hidratadas. Considera usar una crema hidratante sin aroma antes de aplicar tu fragancia.<br>
4.  🧴💦 Menos es Más**: Unas pocas pulverizaciones son suficientes. La idea es que te sientan, no que invadas el espacio olfativo de los demás.<br>
5.  🌞 Guarda Correctamente**: Mantén tus perfumes en un lugar fresco y oscuro, lejos de la luz directa del sol y la humedad, para preservar su calidad.<br>

---

En **Mis Fragancias Jhon Dainer Arias**, te invitamos a explorar nuestra exquisita selección y encontrar esa esencia única que resuena contigo. Permítenos ser tu guía en el fascinante mundo de las fragancias, donde cada aroma es una promesa de belleza y distinción.

**¡Descubre tu próxima obsesión olfativa hoy mismo!** </h2>


    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const messageArea = document.getElementById('messageArea');
            const nombreInput = document.getElementById('nombreInput');
            const celularInput = document.getElementById('celularInput');

            const tamañoButtons = document.querySelectorAll('#tamañoMenu .menu-button');
            const generoButtons = document.querySelectorAll('#generoMenu .menu-button');
            const casaSelect = document.getElementById('casaSelect');
            const perfumeSelect = document.getElementById('perfumeSelect');
            const perfumeSelectContainer = document.getElementById('perfumeSelectContainer');

            const sendWhatsappButton = document.getElementById('sendWhatsappButton');

            // TU NÚMERO DE WHATSAPP CON CÓDIGO DE PAÍS (sin el signo +)
            // Ejemplo para Colombia: '573XXXXXXXXX' (57 es el código de país)
            const yourWhatsappNumber = '573138094678'; // ¡CAMBIA ESTO!

            // --- Datos de Perfumes por Casa ---
            const perfumesByCasa = {
                afnan: ["9am pour femme (femenino)", "9pm pour femme (femenino)", "9pm (masculino)", "9am (unisex)", "9pm rebel (unisex)"],
                agataruizdelaprada: ["gotas de color (femenino)"],
                ahli: ["ahli karpos (femenino)", "ahli vega (femenino)", "ahli corvus (femenino)"],
                alharamain: ["dubai night (masculino)", "alharamain amber oud (unisex)", "amber oud gold (unisex)", "alharamain amber rouge (unisex)", "amber oud blue edition (unisex)"],
                animale: ["aní­male (femenino)", "animale men (masculino)"],
                antoniobanderas: ["blue seduction dama (femenino)", "blue seduction (masculino)", "king of seduction (masculino)", "the golden secret (masculino)"],
                arianagrande: ["cloud (femenino)", "thank u next (femenino)", "ari (femenino)", "cloud pink (femenino)", "sweet like candy (femenino)", "mod vainilla (femenino)", "thank u next 2.0 (femenino)", "rem (femenino)"],
                armaf: ["club de nuit dama (femenino)", "island bliss (femenino)", "yum yum (femenino)", "odyssey candee (femenino)", "club de nuit (masculino)", "mandarin sky (masculino)"],
                arrurru: ["arrurru (femenino)"],
                azzaro: ["azzaro (masculino)"],
                "bath&bodyworks": ["velvet sugar (femenino)", "pink chiffon (femenino)", "loquito por ti (femenino)"],
                benetton: ["tribu (femenino)"],
                bharara: ["bharara niche femme (femenino)", "bharara rose (femenino)", "bharara king (masculino)", "bharara onix (masculino)"],
                bilieeilish: ["eilish (femenino)"],
                "bondn°9": ["bond n°9 signature (femenino)", "bleecker street (unisex)"],
                britneyspears: ["fantasy (femenino)", "fantasy night (femenino)"],
                burberry: ["burberry her (femenino)"],
                bvlgari: ["omnia amethyste (femenino)", "omnia cristal (femenino)", "omnia paraiba (femenino)", "omnia coral (femenino)", "acqua (masculino)", "man in black (masculino)", "bvlgary man (masculino)"],
                cacharel: ["amor amor (femenino)"],
                calvinklein: ["ck in2u (femenino)", "eternity (femenino)", "euphoria (femenino)", "escape (femenino)", "eternity (masculino)", "escape (masculino)", "ckin2u men (masculino)", "ck one (unisex)"],
                carolinaherrera: ["carolina herrera (femenino)", "ch (femenino)", "212 sexy (femenino)", "212 vip (femenino)", "212 vip rose (femenino)", "212 vip rose red (femenino)", "212 vip wild party (femenino)", "central park (femenino)", "good girl (femenino)", "prive (femenino)", "sublime (femenino)", "212 heroes for her (femenino)", "212 nyc mujer (femenino)", "very good girl glam (femenino)", "good girl legere (femenino)", "good girl blush (femenino)", "good girl supreme (femenino)", "ch queens (femenino)", "212 men nyc (masculino)", "212 vip (masculino)", "212 vip black own (masculino)", "212 vip black red (masculino)", "bad boy (masculino)", "central park men (masculino)", "prive men (masculino)", "212 heroes forever young (masculino)", "ch men (masculino)", "212 sexy men (masculino)", "212 men acqua (masculino)"],
                cartier: ["must de cartier (femenino)", "santos (masculino)"],
                chanel: ["chance (femenino)", "coco mademoiselle (femenino)", "chanel no 5 (femenino)", "bleu (masculino)", "allure sport (masculino)"],
                christiandior: ["jadore (femenino)", "miss dior blooming bouquet (femenino)", "poison girl (femenino)", "miss dior parfum (femenino)", "faharenheit (masculino)", "sauvage (masculino)", "sauvage elixir (masculino)"],
                clinique: ["clinique happy dama (femenino)", "clinique happy (masculino)"],
                creed: ["carmina (femenino)", "aventus (masculino)", "silver mountain water (masculino)", "centaurus (unisex)"],
                cristianoronaldo: ["cr7 legacy (masculino)", "cr7 (masculino)"],
                diesel: ["bad (masculino)", "only the brave (masculino)", "spirit of the brave (masculino)", "plus men (masculino)", "diesel fuel for life (masculino)"],
                dolcegabbana: ["imperatrice (femenino)", "light blue (femenino)", "the one (femenino)", "pineapple (femenino)", "q dolce gabbana (femenino)", "devotion (femenino)", "light blue (masculino)", "k (masculino)"],
                dumontparis: ["nitro red (masculino)"],
                elizabetharden: ["5th avenue (femenino)"],
                elizabethtaylor: ["diamante blanco (femenino)"],
                enriqueiglesias: ["adrenaline (masculino)"],
                escada: ["moon sparkle (femenino)", "agua del sol (femenino)", "sorbetto rosso (femenino)", "rock in rio (femenino)", "taj sunset (femenino)"],
                esika: ["dorsay (masculino)", "winner sport (masculino)"],
                faconable: ["faconable (masculino)"],
                ferrari: ["escuderia (masculino)"],
                fredhayman: ["273 beverly hills (femenino)", "touch (femenino)"],
                giardiniditoscana: ["bianco latte (unisex)"],
                gillescantuel: ["arsenal (masculino)"],
                giorgioarmani: ["acqua di gioia (femenino)", "si (femenino)", "acqua di gio (masculino)", "code (masculino)", "acqua di gio profumo (masculino)", "stronger with you (masculino)"],
                givenchy: ["angel y demonio (femenino)", "organza (femenino)", "blue label givenchy (masculino)", "pi (masculino)"],
                gucci: ["gucci (masculino)"],
                guess: ["guess (femenino)"],
                hugoboss: ["hugo woman (femenino)", "hugo xx (femenino)", "boss bottled (masculino)", "boss bottled night (masculino)", "boss dark blue (masculino)", "boss energise (masculino)", "boss iced (masculino)", "boss in motion (masculino)", "boss orange (masculino)", "boss unlimited (masculino)", "hugo boss red (masculino)", "hugo xy (masculino)", "hugo (masculino)", "boss bottled tonic (masculino)", "just different (masculino)", "boss element (masculino)", "boss bottled elixir (masculino)"],
                ilmin: ["il roso (femenino)", "il femme (unisex)", "il kakuno (unisex)", "il ego (unisex)", "il dolce (unisex)", "il orgasme (unisex)", "il erotique (unisex)"],
                isseymiyake: ["issey miyake (femenino)", "issey pour homme (masculino)", "issey miyake sport (masculino)", "issey miyake version 1992 (masculino)"],
                jeanpaulgaultier: ["jean paul gaultier (femenino)", "scandal (femenino)", "scandal (masculino)", "le male (masculino)", "ultramale (masculino)", "le beau (masculino)", "le male elixir (masculino)", "le male le parfum (masculino)", "le beau paradise garden (masculino)"],
                jeanpascal: ["jean pascal (masculino)"],
                jesusdelpozo: ["halloween (femenino)", "halloween men (masculino)"],
                juicycouture: ["viva la juicy (femenino)"],
                justinbieber: ["next girlfriend (femenino)"],
                katyperry: ["meaw (femenino)", "purr (femenino)"],
                kenzo: ["flower (femenino)"],
                killian: ["love dont be shy (femenino)", "black phantom (unisex)"],
                kimkardashian: ["bff (femenino)"],
                lacoste: ["lacoste magnetic (femenino)", "lacoste natural (femenino)", "lacoste sparkling (femenino)", "touch of pink (femenino)", "lacoste blanca (masculino)", "lacoste essential (masculino)", "lacoste noir negra (masculino)", "lacoste red (masculino)", "lacoste rouge (masculino)", "lacoste bleu (masculino)", "lacoste amarilla (masculino)"],
                lancome: ["la vida es bella (femenino)"],
                lattafa: ["yara (femenino)", "bade'e al oud sublime (femenino)", "yara moi (femenino)", "mayar (femenino)", "yara tous (femenino)", "haya (femenino)", "yara candy (femenino)", "noble blush (femenino)", "her confession (femenino)", "asad (masculino)", "fakhar black (masculino)", "asad zanzibar (masculino)", "asad bourbon (masculino)", "his confession (masculino)", "khamrah dukhan (masculino)", "bade'e al oud amethyst (unisex)", "bade'e al oud oud for glory (unisex)", "khamrah (unisex)", "shaheen gold (unisex)", "honor y glory (unisex)", "nebras (unisex)", "ajwad (unisex)", "khamrah qahwa (unisex)", "emeer (unisex)", "affection (unisex)"],
                lelabo: ["santal 33 (unisex)"],
                lizclaiborne: ["curve (masculino)"],
                loewe: ["7 loewe (masculino)", "loewe solo (masculino)"],
                lolitalempicka: ["lolita lempicka (femenino)"],
                lorenzopazzaglia: ["summer hammer (unisex)"],
                louisvuitton: ["l’immensité (masculino)", "imagination (masculino)", "ombre nomade (unisex)", "pacific chill (unisex)"],
                maisonfrancisk: ["baccarat rouge (unisex)"],
                maluma: ["maluma (femenino)", "maluma jade (femenino)", "onix royalty (masculino)", "garnet royalty (masculino)"],
                mancera: ["red tobaco (unisex)", "amore café (unisex)"],
                mercedesbenz: ["mercedes benz (masculino)"],
                montblanc: ["legend (masculino)", "starwalker (masculino)", "emblem (masculino)", "explorer (masculino)", "explorer platinum (masculino)"],
                montale: ["roses musk (femenino)", "crazy in love (femenino)", "intense café (unisex)", "starry night (unisex)", "arabians tonka (unisex)", "chocolate greedy (unisex)", "day dream (unisex)"],
                moschino: ["toy 2 (femenino)", "toy 2 bubble gum (femenino)", "funny moschino (femenino)", "gold fresh couture (femenino)", "i love i love (femenino)", "toy 2 pearl (femenino)", "toy boy (masculino)"],
                natura: ["kaiak (masculino)"],
                nautica: ["náutica voyage (masculino)", "nautica voyage version 2006 (masculino)"],
                onedirection: ["our moment (femenino)"],
                orientica: ["imperial gold (masculino)", "amber rouge (unisex)", "royal amber (unisex)", "oud saffron (unisex)", "royal bleu (unisex)", "azure fantasy (unisex)"],
                oscardelarenta: ["pour lui (masculino)"],
                pacorabanne: ["black xs (femenino)", "lady million royal (femenino)", "lady million (femenino)", "olympea (femenino)", "olympea aqua (femenino)", "fame (femenino)", "black xs (masculino)", "one million royal (masculino)", "invictus (masculino)", "invictus aqua (masculino)", "invictus intense (masculino)", "invictus legend (masculino)", "one million (masculino)", "one million lucky (masculino)", "phantom (masculino)", "pure xs (masculino)", "invictus victory (masculino)", "black xs aphrodisiaque (masculino)", "black xs l'exces (masculino)", "one million golden oud (masculino)", "one million prive (masculino)", "invictus parfum (masculino)", "one million elixir (masculino)", "one million gold intense (masculino)", "invictus platinum (masculino)"],
                parfumsdemarly: ["delina (femenino)", "pegasus (masculino)", "althair (masculino)"],
                parishilton: ["can can (femenino)", "can can burlesque (femenino)", "gold rush (femenino)", "heires (femenino)", "paris hilton (femenino)", "dazzle (femenino)", "passport in paris (femenino)", "rose rush (femenino)", "gold rush (masculino)"],
                perryellis: ["360 coral (femenino)", "360 mujer (femenino)", "360 men (masculino)", "360 red (masculino)"],
                pinosilvestre: ["pino silvestre (masculino)"],
                prada: ["candy night (femenino)", "luna rossa ocean (masculino)", "luna rossa carbon (masculino)"],
                ralphlauren: ["ralph lauren (femenino)", "polo blue (masculino)", "polo red (masculino)", "polo ultra blue (masculino)"],
                rasasi: ["hawas for him (masculino)"],
                reyane: ["insurrection (masculino)"],
                selenagomez: ["selena gomez (femenino)"],
                shakira: ["rock (femenino)", "s (femenino)"],
                sofiavergara: ["love (femenino)", "sofía vergara (femenino)"],
                tedlapidus: ["lapidus (masculino)"],
                thierrimugler: ["angel (femenino)", "angel (masculino)"],
                tomford: ["ombre leather 16 (masculino)"],
                tommyhilfiger: ["tommy girl (femenino)", "tommy boy (masculino)"],
                tous: ["more more pink (femenino)"],
                valentino: ["born in roma yellow (femenino)", "valentino uomo (masculino)", "born in roma (masculino)"],
                versace: ["eros dama (femenino)", "bright crystal (femenino)", "yellow diamond (femenino)", "bright crystal parfum (femenino)", "eros (masculino)", "eros flame (masculino)", "eau fraiche (masculino)", "dylan blue (masculino)", "blue jeans (masculino)", "versace pour homme (masculino)", "eros energy (masculino)"],
                victoriasecret: ["coconut passion (femenino)", "eau so sexy (femenino)", "mango (femenino)", "vainilla lace (femenino)", "sandia (femenino)", "strawberry champagne (femenino)", "bombshell (femenino)", "pure seduction (femenino)", "velvet petals (femenino)", "scandalous (femenino)", "pera (femenino)", "aqua kiss (femenino)"],
                victorinox: ["swiss army for her (femenino)", "swiss army (masculino)"],
                "viktor&rolf": ["spicebomb (masculino)"],
                yanbal: ["gaia (femenino)", "osadia (femenino)", "ccori rosé (femenino)", "celos (femenino)", "cielo (femenino)", "temptation dama (femenino)", "osadia (masculino)", "solo (masculino)", "ohm (masculino)", "temptation (masculino)", "arom (masculino)", "adrenaline hm (masculino)", "43n paralel (masculino)"],
                yvessaintlaurent: ["yves (masculino)", "m7 (masculino)"],
                zlatan: ["zlatan ibrahimovic (masculino)"]
            };
            // --- Fin de Datos de Perfumes por Casa ---

            // Variables para almacenar las selecciones
            let currentNombre = localStorage.getItem('nombreComprador') || '';
            let currentCelular = localStorage.getItem('celularComprador') || '';
            let currentGenero = localStorage.getItem('generoSeleccionado') || '';
            let currentTamaño = localStorage.getItem('tamañoSeleccionado') || '';
            let currentPrecio = localStorage.getItem('precioSeleccionado') || '';
            let currentCasa = localStorage.getItem('casaSeleccionada') || '';
            let currentPerfume = localStorage.getItem('perfumeSeleccionado') || '';

            // Cargar valores iniciales desde localStorage y aplicar al UI
            nombreInput.value = currentNombre;
            celularInput.value = currentCelular;
            casaSelect.value = currentCasa;

            if (currentGenero) {
                generoButtons.forEach(button => {
                    if (button.dataset.genero === currentGenero) {
                        button.classList.add('selected');
                    } else {
                        button.classList.remove('selected');
                    }
                });
            }

            if (currentTamaño) {
                tamañoButtons.forEach(button => {
                    if (button.dataset.tamaño === currentTamaño) {
                        button.classList.add('selected');
                    } else {
                        button.classList.remove('selected');
                    }
                });
            }

            /**
             * Actualiza el área de mensajes y el enlace de WhatsApp.
             */
            function updateMessageAndWhatsappLink() {
                let message = "Por favor, ingresa tu nombre, número de contacto y haz tus selecciones.";
                let whatsappText = "¡Hola! Me gustaría hacer un pedido:\n\n";

                if (currentNombre) {
                    whatsappText += `Nombre: ${currentNombre}\n`;
                    message = `Hola ${currentNombre}, tu pedido es:\n`;
                } else {
                    message = `Por favor, ingresa tu nombre.\n`;
                }

                if (currentCelular) {
                    whatsappText += `Celular: ${currentCelular}\n`;
                } else {
                    message += `Por favor, ingresa tu celular.\n`;
                }

                if (currentCasa) {
                    whatsappText += `Casa: ${casaSelect.options[casaSelect.selectedIndex].text}\n`;
                    message += `Casa: ${casaSelect.options[casaSelect.selectedIndex].text}\n`;
                } else {
                    message += `Selecciona una casa perfumera.\n`;
                }

                if (currentPerfume) {
                    whatsappText += `Perfume: ${currentPerfume}\n`;
                    message += `Perfume: ${currentPerfume}\n`;
                } else {
                    message += `Selecciona un perfume.\n`;
                }

                if (currentGenero) {
                    whatsappText += `Género: ${currentGenero.charAt(0).toUpperCase() + currentGenero.slice(1)}\n`;
                    message += `Género: ${currentGenero.charAt(0).toUpperCase() + currentGenero.slice(1)}\n`;
                } else {
                    message += `Selecciona el género.\n`;
                }

                if (currentTamaño) {
                    whatsappText += `Tamaño: ${currentTamaño}\n`;
                    message += `Tamaño: ${currentTamaño}\n`;
                } else {
                    message += `Selecciona el tamaño.\n`;
                }

                if (currentPrecio) {
                    whatsappText += `Precio: $${currentPrecio}\n`;
                    message += `Precio: $${currentPrecio}\n`;
                } else {
                    message += `Selecciona el tamaño para ver el precio.\n`;
                }

                messageArea.innerText = message;
                sendWhatsappButton.onclick = () => {
                    if (currentNombre && currentCelular && currentCasa && currentPerfume && currentGenero && currentTamaño && currentPrecio) {
                        const encodedMessage = encodeURIComponent(whatsappText);
                        window.open(`https://wa.me/${yourWhatsappNumber}?text=${encodedMessage}`, '_blank');
                    } else {
                        alert('Por favor, completa todos los campos (Nombre, Celular, Casa, Perfume, Género y Tamaño) antes de enviar el pedido por WhatsApp.');
                    }
                };
            }

            /**
             * Popula el select de perfumes basándose en la casa y el género seleccionados.
             */
            function populatePerfumeSelect() {
                perfumeSelect.innerHTML = '<option value="">-- Selecciona un perfume --</option>';
                if (currentCasa && perfumesByCasa[currentCasa]) {
                    const perfumes = perfumesByCasa[currentCasa];
                    const selectedPerfumes = perfumes.filter(perfume => {
                        const perfumeLower = perfume.toLowerCase();
                        if (currentGenero === 'femenino') {
                            return perfumeLower.includes('(femenino)') || perfumeLower.includes('(unisex)');
                        } else if (currentGenero === 'masculino') {
                            return perfumeLower.includes('(masculino)') || perfumeLower.includes('(unisex)');
                        } else if (currentGenero === 'unisex') {
                            return perfumeLower.includes('(unisex)');
                        }
                        return true; // Si no hay género seleccionado, muestra todos
                    });

                    selectedPerfumes.forEach(perfume => {
                        const option = document.createElement('option');
                        option.value = perfume;
                        option.textContent = perfume;
                        perfumeSelect.appendChild(option);
                    });

                    // Si ya había un perfume seleccionado, intenta seleccionarlo de nuevo
                    if (currentPerfume && selectedPerfumes.includes(currentPerfume)) {
                        perfumeSelect.value = currentPerfume;
                    } else {
                        currentPerfume = ''; // Reset if not found in new list
                        localStorage.removeItem('perfumeSeleccionado');
                    }

                    perfumeSelectContainer.style.display = 'block';
                } else {
                    perfumeSelectContainer.style.display = 'none';
                    currentPerfume = '';
                    localStorage.removeItem('perfumeSeleccionado');
                }
                updateMessageAndWhatsappLink();
            }

            // --- Event Listeners ---
            nombreInput.addEventListener('input', function() {
                currentNombre = this.value;
                localStorage.setItem('nombreComprador', currentNombre);
                updateMessageAndWhatsappLink();
            });

            celularInput.addEventListener('input', function() {
                currentCelular = this.value;
                localStorage.setItem('celularComprador', currentCelular);
                updateMessageAndWhatsappLink();
            });

            casaSelect.addEventListener('change', function() {
                currentCasa = this.value;
                localStorage.setItem('casaSeleccionada', currentCasa);
                currentPerfume = ''; // Reset perfume when casa changes
                localStorage.removeItem('perfumeSeleccionado');
                populatePerfumeSelect();
            });

            perfumeSelect.addEventListener('change', function() {
                currentPerfume = this.value;
                localStorage.setItem('perfumeSeleccionado', currentPerfume);
                updateMessageAndWhatsappLink();
            });

            generoButtons.forEach(button => {
                button.addEventListener('click', function() {
                    generoButtons.forEach(btn => btn.classList.remove('selected'));
                    this.classList.add('selected');
                    currentGenero = this.dataset.genero;
                    localStorage.setItem('generoSeleccionado', currentGenero);
                    populatePerfumeSelect(); // Repopulate perfumes when gender changes
                });
            });

            tamañoButtons.forEach(button => {
                button.addEventListener('click', function() {
                    tamañoButtons.forEach(btn => btn.classList.remove('selected'));
                    this.classList.add('selected');
                    currentTamaño = this.dataset.tamaño;
                    currentPrecio = this.dataset.precio;
                    localStorage.setItem('tamañoSeleccionado', currentTamaño);
                    localStorage.setItem('precioSeleccionado', currentPrecio);
                    updateMessageAndWhatsappLink();
                });
            });

            // Inicializar al cargar la página
            populatePerfumeSelect(); // Load perfumes based on initial casa and gender
            updateMessageAndWhatsappLink(); // Initial message update
        });
    </script>
</body>
</html>
