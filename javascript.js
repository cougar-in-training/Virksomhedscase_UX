//$(window).load(menu());

//function menu() {
//    console.log("menu");
//    $(".dropdown").on("click", animeretMenu());
//}
//
//function animeretMenu() {
//    console.log("animeretMenu");
//    $(".dropdown").off("click", animeretMenu());
//
//    /*$(".bar1").addClass("change_bar1");
//    $(".bar2").addClass("change_bar2");
//    $(".bar3").addClass("change_bar3");*/
//
//    $(".dropdown").on("click", dropdown());
//}
$(window).onload() {
    klik();
}

function klik(); {
    $(".dropbtn").on("click", dropdown);
}

function dropdown() {
    console.log("dropdown");

    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
