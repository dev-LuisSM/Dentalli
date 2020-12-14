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

});