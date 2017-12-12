    $(".dropbtn").on("click", myFunction);

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        $(".bar1").addClass("change1");
        $(".bar2").addClass("change2");
        $(".bar3").addClass("change3");

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
                    $(".bar1").removeClass("change1");
                    $(".bar2").removeClass("change2");
                    $(".bar3").removeClass("change3");
                }
            }
        }
    }
