$(document).ready(function () {
    var nav = false;
    $(".fa-bars").click(function(){
        if(nav == false){
            $(".ul-links ul").animate({"left" : "4%"});
            nav = true;
        }
        else if (nav){
            $(".ul-links ul").animate({"left": "-100%"});
            nav = false;
        }
    });
});