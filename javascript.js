window.on("load", menu());

function menu() {
    console.log("test");
    $(".bar_container").on("click", myFunction(this));
}

function myFunction(x) {
    console.log("test2");

    x.classList.toggle("change");
}
