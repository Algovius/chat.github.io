
// NOMBRE DE USUARIO

const userName = prompt("Introduce tu nombre");

switch (userName) {
    case "":
        alert("ERROR");
        location.reload();
        prompt("Introduce tu nombre");

    default:
        break;
}

// SELECTOR
const input = document.querySelector('input');
const addbtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");

addbtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;
    const li = document.createElement('li');
    const p = document.createElement('p');

    // HORA
    let fecha = new Date();

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();

    if (hora > 12) {
        hora = hora - 12;
    } else if (hora < 10) {
        hora = "0" + hora;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    let horaFinal =  hora + ":" + minutos;

    if (horaFinal === "00" + ":" + minutos) {
        horaFinal = horaFinal + "AM";
    }

    // SALIDA
    p.textContent = horaFinal + " <" + userName + "> " + text;

    li.appendChild(p);
    ul.appendChild(li);
});