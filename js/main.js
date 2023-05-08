const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.getElementById("btn-copiar");
const copyModal = document.getElementById("copy-modal");
const regex = /^[a-z0-9]+$/;

// Funcion para validar que se ingresen solo minusculas sin caracteres especiales en el TextArea
function validarCampo() {
    const valor = textArea.value;
    const regex = /^[a-z0-9]+$/; // patrón que permite letras, números y espacios en blanco
    
    if (!regex.test(valor)) {
        alert('No se permiten mayúsculas ni caracteres especiales');
        textArea.value = valor.replace(/[^a-z0-9 ]/g, ''); // elimina los caracteres no permitidos

    }
}

// Funcion para validar que se ingresen solo minusculas sin caracteres especiales en el Mensaje

function validarMensaje() {
    const valor = mensaje.value;
    const regex = /^[a-z0-9]+$/; // patrón que permite letras, números y espacios en blanco
    
    if (!regex.test(valor)) {
        alert('No se permiten mayúsculas ni caracteres especiales');
        mensaje.value = valor.replace(/[^a-z0-9 ]/g, ''); // elimina los caracteres no permitidos

    }
}


// Funcionalidad del boton de copiar

function ocultarModal() {
    copyModal.classList.add('oculto');
}


function copiar() {
    mensaje.select();
    document.execCommand("copy");
    copyModal.style.display = "flex";
    setTimeout(ocultarModal, 2000);
    
}

btnCopiar.addEventListener("click" , copiar);

//Se genera función que encripta el texto y el boton con su escuchador para que se ejecute la encriptacion

function doEncriptar() {
    let textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    btnCopiar.style.display = "block";
    
}

let btnEncriptar = document.getElementById("btn-encriptar");
btnEncriptar.addEventListener('click', doEncriptar);

function encriptar(stringAEncriptar) {
    let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
    ];
    stringAEncriptar = stringAEncriptar.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringAEncriptar.includes(matrizCodigo[i][0])) {
            stringAEncriptar = stringAEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringAEncriptar;
}

//Se genera función que desencripta el texto y el boton con su escuchador para que se ejecute la desencriptacion

function doDesencriptar() {
    let textoEncriptado = desencriptar(mensaje.value);
    textArea.value = "";
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    btnCopiar.style.display = "block";
}

let btnDesencriptar = document.getElementById("btn-desencriptar");
btnDesencriptar.addEventListener('click', doDesencriptar);

function desencriptar(stringEncriptado) {
    let matrizDesencriptar = [
    ["enter", "e"],
    ["ime", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"]
    ];
    
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for (let i = 0; i < matrizDesencriptar.length; i++) {
        if(stringEncriptado.includes(matrizDesencriptar[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizDesencriptar[i][0],matrizDesencriptar[i][1]);
        }
    }
    return stringEncriptado;
}
