const saldoConsultarElement = document.getElementById('saldoConsultar');
const saldoTransferirElement = document.getElementById('saldoTransferir');
const saldoConsignarElement = document.getElementById('saldoConsignar');
const saldoRetiroElement = document.getElementById('saldoRetiro');

const consultarElement = document.getElementById('consultar');

const retirarElement = document.getElementById('retirar');
const cantidadRetiroElement = document.getElementById("cantidadRetiro");
const facturaRetiroElement = document.getElementById('facturaRetiro');
const mensajeFacturaRetiroElement = document.getElementById('mensajeFacturaRetiro');
const resultadoRetiro = document.getElementById('resultadoRetiro');

const transferenciaElement = document.getElementById('transferencia');
const resultado = document.getElementById('resultado');
const facturaElement = document.getElementById('factura');
const cantidadElement = document.getElementById('cantidad');
const cuentaElement = document.getElementById('cuenta');
const mensajeFacturaElement = document.getElementById('mensajeFactura');

const consignarElement = document.getElementById('consignar');
const resultadoConsignar = document.getElementById('resultadoConsignar');
const facturaConsignarElement = document.getElementById('facturaConsignar');
const cantidadConsiElement = document.getElementById('cantidadConsi');
const cuentaConsiElement = document.getElementById('cuentaConsi');
const mensajeFacturaConsignarElement = document.getElementById('mensajeFacturaConsignar');

const opcionesElement = document.getElementById("opciones");
const bienvenidoElement = document.getElementById("bienvenido");
const imagenExitosaElement = document.getElementById('imagenExitosa')
const imagenErrorElement = document.getElementById('imagenError')
const cerrarElement = document.getElementById('cerrar')

var tablaHistorial = document.getElementById("tablaHistorial");
const usarioCorrecto = "camila"
const contraseñaCorrecta = "1234"

function mostrarOpciones() {
  document.getElementById("tablaHistorial").style.display = "none"
  document.getElementById("inicio").style.display = "none"
  document.querySelector('.logo').classList.add('positionLogo')
  document.querySelector('.logo').style.width = "200px"
  document.getElementById("opciones").style.display = "block"


}



let intentos = 3;
function inicioSesion() {

  const usuario = document.getElementById("usuario").value
  const contraseña = document.getElementById("contraseña").value;

  if (usuario === "camila" && contraseña === "1234") {
    mostrarOpciones()
  } else if (usuario === "miladys" && contraseña === "1234") {

    mostrarOpciones()
  } else if (usuario === "daniela" && contraseña === "1234") {
    mostrarOpciones()
  } else {
    intentos--;
    alert(`usuario y/o contraseña incorrectos.Intentos restantes: ${intentos}`);
    if (intentos === 0) {
      bloquear();
    }
    return false;
  }
}
function bloquear() {
  alert("Has excedido el número máximo de intentos. Se bloqueará el acceso.");
 document.write("bloqueo espere 30 minutos para volver a ingresar")
}


function generarTabla(tipoOperacion) {
  var today = new Date();

  let tr = document.createElement("tr")
  let tdFecha = document.createElement("td")
  let tdCajero = document.createElement("td")
  let tdOperaciones = document.createElement("td")
  let tabla = document.querySelector(".tablaOperaciones")

  tdFecha.textContent = today.toLocaleString();
  tdCajero.textContent = "cajero 23444"
  tdOperaciones = tipoOperacion
  tabla.classList.add("tbody")
  tr.classList.add(".tablaOperaciones")
  tr.append(tdFecha, tdCajero, tdOperaciones)
  tabla.append(tr)
}
function historial(){
  tabla = document.querySelector(".tablaOperaciones")
  tabla.style.display = "block"
}


function operaciones() {

  let initabla = document.querySelector("#iniTabla")
  initabla.style.display = "block"
  tabla = document.querySelector(".tablaOperaciones")
  tabla.style.display = "block"
}
function OcultarTablaHistoria() {
  tabla = document.querySelector(".tablaOperaciones")
  tabla.style.display = "none"
}

let saldoDisponible = 200000000.00;

function actualizarSaldo() {
  saldoConsultarElement.textContent = `$${new Intl.NumberFormat("de-DE").format(saldoDisponible)}`;
  saldoTransferirElement.textContent = `$${new Intl.NumberFormat("de-DE").format(saldoDisponible)}`;
  saldoConsignarElement.textContent = `$${new Intl.NumberFormat("de-DE").format(saldoDisponible)}`;
  saldoRetiroElement.textContent = `$${new Intl.NumberFormat("de-DE").format(saldoDisponible)}`;
}
function consultarSaldo() {
  generarTabla('consulta')
  document.getElementById('cerrar').classList.add('posicionCerrar')
  document.getElementById('cerrar').style.marginTop = "-50px"
  transferenciaElement.style.display = 'none';
  consultarElement.style.display = "block"
  retirarElement.style.display = "none"
  consignarElement.style.display = "none";
  facturaElement.style.display = 'none';
  opcionesElement.style.display = "block";
  opcionesElement.style.position = "absolute";
  opcionesElement.style.top = "160px";
  bienvenidoElement.style.display = 'none';
  OcultarTablaHistoria()
}
actualizarSaldo()


function transferir() {
  document.getElementById('cerrar').classList.add('posicionCerrar')
  document.getElementById('cerrar').style.marginTop = "-50px"
  transferenciaElement.style.display = 'block';
  consultarElement.style.display = "none"
  retirarElement.style.display = "none";
  consignarElement.style.display = "none";
  facturaElement.style.display = 'none';
  opcionesElement.style.display = "block";
  opcionesElement.style.position = "absolute";
  opcionesElement.style.top = "160px";
  bienvenidoElement.style.display = 'none';

}
function consignarDinero() {
  document.getElementById('cerrar').classList.add('posicionCerrar')
  document.getElementById('cerrar').style.marginTop = "-50px"
  transferenciaElement.style.display = 'none';
  consultarElement.style.display = "none";
  retirarElement.style.display = "none";
  consignarElement.style.display = "block";
  facturaElement.style.display = 'none';
  opcionesElement.style.display = "block";
  opcionesElement.style.position = "absolute";
  opcionesElement.style.top = "160px";
  bienvenidoElement.style.display = 'none';
}

function retirarDinero() {
  document.getElementById('cerrar').classList.add('posicionCerrar')
  document.getElementById('cerrar').style.marginTop = "-50px"
  transferenciaElement.style.display = 'none';
  consultarElement.style.display = "none";
  retirarElement.style.display = "block";
  consignarElement.style.display = "none";
  facturaElement.style.display = 'none';
  opcionesElement.style.display = "block";
  opcionesElement.style.position = "absolute";
  opcionesElement.style.top = "160px";
  bienvenidoElement.style.display = 'none';
}
actualizarSaldo()
let fechaHora
function realizarTransferencia() {
  const cantidad = parseFloat(cantidadElement.value);
  const cuenta = cuentaElement.value;

  if (!cantidad || !cuenta) {
    imagenExitosaElement.textContent = imagenExitosaElement.style.display = "none"
    imagenErrorElement.textContent = imagenErrorElement.style.display = "block"
    mostrarErrorFactura('Por favor, complete todos los campos.');

    return;
  }

  if (cantidad > saldoDisponible) {
    imagenExitosaElement.textContent = imagenExitosaElement.style.display = "none"
    imagenErrorElement.textContent = imagenErrorElement.style.display = "block"
    mostrarErrorFactura('No tienes saldo suficiente para realizar esta transferencia.');
    return;
  }

  if (cantidad < saldoDisponible) {
    const transferenciaExitosa = Math.random(5);

    if (transferenciaExitosa) {
      fechaHora = new Date()
      saldoDisponible -= cantidad;
      imagenExitosaElement.textContent = imagenExitosaElement.style.display = "block"
      generarTabla('transferir')
      mostrarFactura(`Transferencia exitosa por:$${new Intl.NumberFormat("de-DE").format(cantidad)}.00. pesos \n Numero cuenta: ${cuenta} \n fecha y hora de la transacción :${fechaHora.toLocaleString()} `);
    } else {
      imagenErrorElement.textContent = imagenErrorElement.style.display = "block"
      mostrarErrorFactura(`La transferencia de : $${new Intl.NumberFormat("de-DE").format(cantidad)} a la cuenta ${cuenta} no fue exitosa. Por favor, intente nuevamente.`);
    }

    actualizarSaldo()

    OcultarTablaHistoria()
    cantidadElement.value = '';
    cuentaElement.value = '';

  }
}

function mostrarFactura(mensaje) {
  imagenErrorElement.style.display = "none"
  facturaElement.style.backgroundColor = ' #1dcca348'
  mensajeFacturaElement.textContent = mensaje;
  facturaElement.style.display = 'block';
}


function mostrarErrorFactura(mensaje) {
  facturaElement.style.border= "3px"
  facturaElement.style.border= "solid"
  mensajeFacturaElement.textContent = mensaje;
  facturaElement.style.display = 'block';

}

function ocultarFactura() {
  opcionesElement.style.display = 'block'
  facturaElement.style.display = 'none';
  facturaElement.style.backgroundColor = '';
  cantidadElement.value = '';
  cuentaElement.value = '';

}
actualizarSaldo();

//consignar funciones

function realizarConsignacion() {
  const cantidadConsi = parseFloat(cantidadConsiElement.value);
  const cuentaConsi = cuentaConsiElement.value;


  if (cantidadConsi > 0 && cuentaConsi > 0) {

  } else {
    imagenExitosaElement.textContent = imagenExitosaElement.style.display = "none"
    imagenErrorElement.textContent = imagenErrorElement.style.display = "block"
    mostrarErrorFacturaConsignar('Por favor, complete todos los campos.');

  }

  if (cantidadConsi > 0 && cuentaConsi > 0) {
    const transferenciaExitosa = Math.random(5);

    if (transferenciaExitosa) {
      fechaHora = new Date()
      generarTabla('Consignacion')

      saldoDisponible += cantidadConsi;
      imagenExitosaElement.textContent = imagenExitosaElement.style.display = "block"
      mostrarFacturaConsignar(`Consignacion exitosa por:$${new Intl.NumberFormat("de-DE").format(cantidadConsi)} pesos \n Numero cuenta: ${cuentaConsi} fecha y hora de la transacción ${fechaHora.toLocaleString()} `);

    } else {
      imagenErrorElement.textContent = imagenErrorElement.style.display = "block"
      mostrarErrorFacturaConsignar(`La consignacion de $${new Intl.NumberFormat("de-DE").format(cantidadConsi)} a la cuenta ${cuentaConsi} no fue exitosa. Por favor, intente nuevamente.`);

    }


    actualizarSaldo()
    OcultarTablaHistoria()

    cantidadConsiElement.value = '';
    cuentaConsiElement.value = '';

  }

}
function mostrarFacturaConsignar(mensaje) {
  imagenErrorElement.style.display = "none"
  facturaConsignarElement.style.backgroundColor = ' #1dcca348'
  mensajeFacturaConsignarElement.textContent = mensaje;
  facturaConsignarElement.style.display = 'block';
}


function mostrarErrorFacturaConsignar(mensaje) {
  facturaConsignarElement.style.border="3px";
  facturaConsignarElement.style.border="solid";
  mensajeFacturaConsignarElement.textContent = mensaje;
  facturaConsignarElement.style.display = 'block';

}

function ocultarFacturaConsignar() {
  opcionesElement.style.display = 'block'
  facturaConsignarElement.style.display = 'none';
  facturaConsignarElement.style.backgroundColor = '';
  cantidadConsiElement.value = '';
  cuentaConsiElement.value = '';

}

actualizarSaldo()

function realizarRetiro() {

  const cantidadRetiro = parseFloat(cantidadRetiroElement.value);

  if (cantidadRetiro <= saldoDisponible) {
    fechaHora = new Date()
    saldoDisponible = saldoDisponible - cantidadRetiro;
    imagenExitosaElement.textContent = imagenExitosaElement.style.display = "block"
    mostrarFacturaRetiro(`Retiro exitoso por:$${new Intl.NumberFormat("de-DE").format(cantidadRetiro)}  fecha y hora de la transacción ${fechaHora.toLocaleString()} `);
    generarTabla('retirar')
    actualizarSaldo()

    cantidadRetiroElement.value = '';
  } else {
    imagenErrorElement.textContent = imagenErrorElement.style.display = "block"
    mostrarErrorFacturaRetiro(`El retiro de  no fue exitoso. Por favor, intente nuevamente.`);

  }

  OcultarTablaHistoria()
}

actualizarSaldo()

function mostrarFacturaRetiro(mensaje) {
  imagenErrorElement.style.display = "none"
  facturaRetiroElement.style.backgroundColor = ' #1dcca348'
  mensajeFacturaRetiroElement.textContent = mensaje;
  facturaRetiroElement.style.display = 'block';
}


function mostrarErrorFacturaRetiro(mensaje) {
  facturaRetiroElement.style.border = "3px";
  facturaRetiroElement.style.border = "solid";
  mensajeFacturaRetiroElement.textContent = mensaje;
  facturaRetiroElement.style.display = 'block';

}

function ocultarFacturaRetiro() {
  opcionesElement.style.display = 'block'
  facturaRetiroElement.style.display = 'none';
  facturaRetiroElement.style.backgroundColor = '';
  cantidadRetiroElement.value = '';


}

actualizarSaldo();

function cerrarSesion() {
  document.getElementById("inicio").style.display = "block"
  document.getElementById("opciones").style.display = "none"
  document.getElementById("consignar").style.display = "none"
  document.getElementById("transferencia").style.display = "none"
  document.getElementById("retirar").style.display = "none"
  document.getElementById("consultar").style.display = "none"
  usuario.value = '';
  contraseña.value = '';
}
function agregarMovimiento(horaFecha, cantidad, tipo) {
  var row = facturaTable.insertRow(-1);
  var horaFechaCell = row.insertCell(0);
  var cantidadCell = row.insertCell(1);
  var tipoCell = row.insertCell(2);

  horaFechaCell.innerHTML = horaFecha;
  cantidadCell.innerHTML = cantidad;
  tipoCell.innerHTML = tipo;
}
function historial(){
  tablaHistorialElement.style.display="block"
  table = document.querySelector("tablaOperaciones")
  table.style.display = "block"
  document.getElementById('cerrar').classList.add('posicionCerrar')
  document.getElementById('cerrar').style.marginTop = "-50px"
  transferenciaElement.style.display = 'none';
  consultarElement.style.display = "none"
  retirarElement.style.display = "none"
  consignarElement.style.display = "none";
  facturaElement.style.display = 'none';
  opcionesElement.style.display = "block";
  opcionesElement.style.position = "absolute";
  opcionesElement.style.top = "160px";
  bienvenidoElement.style.display = 'none';
}