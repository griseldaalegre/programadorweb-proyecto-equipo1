document.querySelectorAll(".container-img .btn-detalles").forEach(el => {

    el.addEventListener("click", function (ev) {
        ev.stopPropagation();
        document.querySelectorAll(".container-img .card").forEach(el => {
            el.classList.add("hidden");
        }
        )
        this.parentNode.classList.add("active");
        this.classList.add("hide")
    })
})

document.querySelectorAll(".btn-detalles").forEach(el => {
    el.addEventListener("click", function (ev) {
        this.classList.remove("active");
        this.querySelectorAll(".card").forEach(el => {
            el.classList.remove("active");
            el.classList.remove("hidden");

        })
    })
})

document.querySelectorAll(".container-img").forEach(el => {
    el.addEventListener("click", function (ev) {
        this.classList.remove("active");
        this.querySelectorAll(".card").forEach(el => {
            el.classList.remove("active");
            el.classList.remove("hidden");

        })
    })
});

