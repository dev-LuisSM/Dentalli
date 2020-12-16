$(document).ready(function () {
    var nav = false;
    $(".fa-bars").click(function () {
        if (nav == false) {
            $(".ul-links ul").animate({ "left": "0" });
            $(".glass").animate({ "left": "0" });
            nav = true;
        }
        else if (nav) {
            $(".ul-links ul").animate({ "left": "-100%" });
            $(".glass").animate({ "left": "-100%" });
            nav = false;
        }
    });

    /* Login - Change form */
    var formChng = false;
    $(".change").click(function() {
        if(formChng == false){
            $("#login").animate({"margin":"0 0 0 120%"});
            $("#registro").animate({"margin":"-7% 0 0 0%"});
            formChng = true;
        }
        else if(formChng){
            $("#registro").animate({"margin":"-7% 0 0 120%"});
            $("#login").animate({"margin":"0 0 0 0"});
            formChng = false;
        }
    });

    /* Términos y Condiciones - Políticas de Privacidad */
    $("#pdp-flag").click(function(){
        if (typeof(Storage) !== "undefined") 
            localStorage.setItem("page", "tyc");      
    });

    $("#tyc-flag").click(function(){
        if (typeof(Storage) !== "undefined") 
            localStorage.setItem("page", "pdp");
    });

    var politica;
    var terminos;
    if($(".terminos").length){
        var ls = localStorage.getItem("page");
        if(ls == "pdp"){
            $(".ter-con").slideDown(750);
            terminos = false;
            politica = true;
            $(".tc").toggleClass("rotate");
        }
        else if(ls == "tyc"){
            $(".pol-priv").slideDown(750);
            politica = false;
            terminos = true;
            $(".pp").toggleClass("rotate");
        }
    }

    $(".pp").click(function(){
        if(politica == false){
            $(".pol-priv").slideUp(750);
            politica = true;
            $(".pp").removeClass("rotate");
        }
        else if(politica){
            $(".pol-priv").slideDown(750);
            politica = false;
            $(".pp").toggleClass("rotate");
        }
    });

    $(".tc").click(function(){
        var rotate = 0; 

        if(terminos == false){
            $(".ter-con").slideUp(750);
            terminos = true;
            $(".tc").removeClass("rotate");
        }
        else if(terminos){
            $(".ter-con").slideDown(750);
            terminos = false;
            $(".tc").toggleClass("rotate");
        }
    });

});