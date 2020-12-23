    $(document).ready(function () {

    var slideIndex = 1;
    showSlides(slideIndex);

    $(".prev").click(function(){
        showSlides(slideIndex --, true);
    });
    
    $(".next").click(function(){
        showSlides(slideIndex ++, true);
    });

    window.setInterval(function(){
        showSlides(slideIndex ++, true);
    }, 3000);

    $(".dot").click(function(){
        showSlides(slideIndex = $(this).attr("id"), false);
    });

    function showSlides(n, vali) {
        var i;
        var slides = $(".mySlides");
        var dots = $(".dot");

        if(vali)
            if (n >= slides.length) { slideIndex = 1 }
        else
            if (n > slides.length) { slideIndex = 1 }
        
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }


    
});