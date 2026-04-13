const buttons = document.querySelectorAll(".main-node");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        const target = document.getElementById(btn.dataset.target);
        const isOpen = target.classList.contains("open");

        // cerrar todos
        document.querySelectorAll(".children").forEach(box=>{
            box.classList.remove("open");
        });

        document.querySelectorAll(".main-node").forEach(b=>{
            b.classList.remove("active");
        });

        // abrir seleccionado
        if(!isOpen){
            target.classList.add("open");
            btn.classList.add("active");
        }

    });

});