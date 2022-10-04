function show(elemento) {
    console.log(elemento.parentNode.querySelectorAll(".btn-cerrar"));
      document.querySelectorAll(".container-img .card").forEach(el => {
          el.classList.add("hidden");
      }
      )
      elemento.parentNode.classList.add("active");
      let cerrar =  elemento.parentNode.querySelectorAll(".btn-cerrar")
      cerrar[0].classList.remove('hide');
      elemento.parentNode.querySelectorAll(".btn-detalles")[0].classList.add("hide");
      elemento.parentNode.querySelectorAll(".infoDetalle")[0].classList.remove("hide")
}

function esconder(elemento) {
  console.log(elemento);
    document.querySelectorAll(".container-img .card").forEach(el => {
        el.classList.remove("hidden");
    }
    )
    elemento.parentNode.classList.remove("active");
    let cerrar =  elemento.parentNode.querySelectorAll(".btn-cerrar")
    cerrar[0].classList.add('hide');
    elemento.parentNode.querySelectorAll(".btn-detalles")[0].classList.remove("hide");
    elemento.parentNode.querySelectorAll(".infoDetalle")[0].classList.add("hide")
}
