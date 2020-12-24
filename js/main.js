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

    $(".no-logged").remove();

    $(".fa-user-circle").click(function(){
        $("#user div").toggle("slide");
    });

    /* Carrusel */
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });


    /* Términos y Condiciones - Políticas de Privacidad */
    $("#pdp-flag").click(function(){
        if (typeof(Storage) !== "undefined") 
            localStorage.setItem("page", "pdp");      
    });

    $("#tyc-flag").click(function(){
        if (typeof(Storage) !== "undefined") 
            localStorage.setItem("page", "tyc");
    });


    $(".ter-con").hide();
    $(".pol-priv").hide();

    var politica;
    var terminos;
    var ls = localStorage.getItem("page");

    function slideInfoTrue(elmnt1, elmnt2){
        $(elmnt1).slideDown(750);
        $(elmnt2).toggleClass("rotate");
    }

    function slideInfoFalse(elmnt1, elmnt2){
        $(elmnt1).slideUp(750);
        $(elmnt2).removeClass("rotate");
    }

    if(ls == "pdp"){
        slideInfoTrue(".pol-priv", ".pp")
        terminos = true;
        politica = false;
    }
    else if(ls == "tyc"){
        slideInfoTrue(".ter-con", ".tc")
        politica = true;
        terminos = false;
    }

    /* Click to Slide */
    $(".pp").click(function(){
        if(politica){
            slideInfoTrue(".pol-priv", this);
            politica = false;
        } 
        else{
            slideInfoFalse(".pol-priv", this);
            politica = true;
        }
    });

    $(".tc").click(function(){
        if(terminos){
            slideInfoTrue(".ter-con", this);
            terminos = false;
        } 
        else{
            slideInfoFalse(".ter-con", this);
            terminos = true;
        }
    });
    
    /* Tienda - Categorías */

    /* LocalStorage de Tienda */
    $("#to-inst").click(function(){
        window.location = "tienda.html";
        if (typeof(Storage) !== "undefined") 
            localStorage.setItem("categoria", "inst");  
    });

    $("#to-cons").click(function(){
        window.location = "tienda.html";
         if (typeof(Storage) !== "undefined") 
            localStorage.setItem("categoria", "cons"); 
    });

    $("#to-oper").click(function(){
        window.location = "tienda.html";
         if (typeof(Storage) !== "undefined") 
            localStorage.setItem("categoria", "oper"); 
    });

    $("#to-orto").click(function(){
        window.location = "tienda.html";
         if (typeof(Storage) !== "undefined") 
            localStorage.setItem("categoria", "orto"); 
    });

    $("#to-eqpo").click(function(){
        window.location = "tienda.html";
         if (typeof(Storage) !== "undefined") 
            localStorage.setItem("categoria", "eqpo"); 
    });

    $("#to-endo").click(function(){
        window.location = "tienda.html";
         if (typeof(Storage) !== "undefined") 
            localStorage.setItem("categoria", "endo"); 
    });

    $("#instrumental").hide();
    $("#consumible").hide();
    $("#operatoria").hide();
    $("#ortodoncia").hide();
    $("#equipo").hide();
    $("#endodoncia").hide();

    var instrumental;
    var consumible;
    var operatoria;
    var ortodoncia;
    var equipo;
    var endodoncia;

    var categoriaTienda = localStorage.getItem("categoria");

    /* Cargar tamaño de las categorías antes de mostrarlas en Chrome */
    setTimeout(function(){
        switch(categoriaTienda){
            case "inst":
                consumible = operatoria = ortodoncia = equipo = endodoncia = true;
                instrumental = false;
                slideInfoTrue("#instrumental", ".ins")
                break;

            case "cons":
                instrumental = operatoria = ortodoncia = equipo = endodoncia = true;
                consumible = false;       
                slideInfoTrue("#consumible", ".con")
                $("body,html").animate({scrollTop: $(".con").offset().top},800);
                break;            
            
            case "oper":
                consumible = instrumental = ortodoncia = equipo = endodoncia = true;
                operatoria = false;         
                slideInfoTrue("#operatoria", ".opr")
                $("body,html").animate({scrollTop: $(".opr").offset().top},800);         
                break;        
            
            case "orto":
                consumible = operatoria = instrumental = equipo = endodoncia = true;
                ortodoncia = false;      
                slideInfoTrue("#ortodoncia", ".ort")
                $("body,html").animate({scrollTop: $(".ort").offset().top},800);
                break;        
            
            case "eqpo":
                consumible = operatoria = ortodoncia = instrumental = endodoncia = true;
                equipo = false;            
                slideInfoTrue("#equipo", ".eqp")
                $("body,html").animate({scrollTop: $(".eqp").offset().top},800);
                break;        
            
            case "endo":
                consumible = operatoria = ortodoncia = equipo = instrumental = true;
                endodoncia = false;     
                slideInfoTrue("#endodoncia", ".end")
                $("body,html").animate({scrollTop: $(".end").offset().top},800);
                break;                   
        }
    }, 100);

    $(".ins").click(function(){
        if(instrumental){
            slideInfoTrue("#instrumental", this);
            instrumental = false;
        } 
        else{
            slideInfoFalse("#instrumental", this);
            instrumental = true;
        }
    });

    $(".con").click(function(){
        if(consumible){
            slideInfoTrue("#consumible", this);
            consumible = false;
        } 
        else{
            slideInfoFalse("#consumible", this);
            consumible = true;
        }
    });

    $(".opr").click(function(){
        if(operatoria){
            slideInfoTrue("#operatoria", this);
            operatoria = false;
        } 
        else{
            slideInfoFalse("#operatoria", this);
            operatoria = true;
        }
    });

    $(".ort").click(function(){
        if(ortodoncia){
            slideInfoTrue("#ortodoncia", this);
            ortodoncia = false;
        } 
        else{
            slideInfoFalse("#ortodoncia", this);
            ortodoncia = true;
        }
    });

    $(".eqp").click(function(){
        if(equipo){
            slideInfoTrue("#equipo", this);
            equipo = false;
        } 
        else{
            slideInfoFalse("#equipo", this);
            equipo = true;
        }
    });

    $(".end").click(function(){
        if(endodoncia){
            slideInfoTrue("#endodoncia", this);
            endodoncia = false;
        } 
        else{
            slideInfoFalse("#endodoncia", this);
            endodoncia = true;
        }
    });



    /* Ingresar id a cada item en TIENDA*/
    function setId(elementoDiv, idx){
        let indice = idx;
        let elementDiv = $(`${elementoDiv} .productos-categoria`)
        $(elementDiv).each(function(index){
            $(this).attr("id",`${indice}-${index+1}`);
        });

        let elementBtn = $(`${elementoDiv} .pop-vista`)
        $(elementBtn).each(function(index){
            $(this).attr("id",`${indice}-${index+1}btn`);
        });
    }

    /* Append Pop */
    function popDiv(imgSource, idDiv, pItem, pPrice){
        $('.pop-item-sel').fadeIn(1000).css({"display":"flex"});      

        $('.fa-times').css({"display":"block"})
        $(`<div class="pop" id="img-pop">`+
        `<i class="fas fa-times" id="fa-primero"></i>`+
        `<div> <img src="${imgSource}" alt="${idDiv}"> </div>`+
        `<div> <div><h2>${pItem}</h2> <p>${pPrice}</p></div>`+ 
        `<span>Producto disponible</span>`+
        `<button class="btn-pop"> Agregar al carrito </button> </div>`+
        `<i class="fas fa-times" id="fa-segundo"></i></div>`)
        .hide()
        .appendTo(".pop-item-sel")
        .toggle(750);  
    }

    /* Remove Pop */
    $(document).mouseup(function (e) {
        var container = $(".pop");
        if (!container.is(e.target)&& container.has(e.target).length === 0){
            $(".pop-item-sel").fadeOut();
            container.fadeOut();
            container.remove();
        }
    });

    /* Clic en el ícono para cerrar */
    /* El "on.('click')" funciona para triggers creados después del DOM */
    $(document).on('click', '.fa-times', function() {
        $(".pop-item-sel").fadeOut();
        $(".pop").fadeOut();
        $(".pop").remove();
    });

    setId(`#instrumental`, `int`);
    setId(`#consumible`, `con`);
    setId(`#operatoria`, `opr`);
    setId(`#ortodoncia`, `ort`);
    setId(`#equipo`, `eqp`);
    setId(`#endodoncia`, `end`);

    /* Obtener id de un producto por categoría */
    $("#instrumental .pop-vista").click(function(){
        let idBtn = $(this).attr("id");
        let idDiv = idBtn.substring(0,5);
        let imgSource = $(`#${idDiv} img`).attr('src');
        let pItem = $(`#${idDiv} p:first`).html();
        let pPrice = $(`#${idDiv} p:last`).html();

        popDiv(imgSource, idDiv, pItem, pPrice);
    });

    $("#consumible .pop-vista").click(function(){
        let idBtn = $(this).attr("id");
        let idDiv = idBtn.substring(0,5);
        let imgSource = $(`#${idDiv} img`).attr('src');
        let pItem = $(`#${idDiv} p:first`).html();
        let pPrice = $(`#${idDiv} p:last`).html();

        popDiv(imgSource, idDiv, pItem, pPrice);
    });

    $("#operatoria .pop-vista").click(function(){
        let idBtn = $(this).attr("id");
        let idDiv = idBtn.substring(0,5);
        let imgSource = $(`#${idDiv} img`).attr('src');
        let pItem = $(`#${idDiv} p:first`).html();
        let pPrice = $(`#${idDiv} p:last`).html();

        popDiv(imgSource, idDiv, pItem, pPrice);
    });

    $("#ortodoncia .pop-vista").click(function(){
        let idBtn = $(this).attr("id");
        let idDiv = idBtn.substring(0,5);
        let imgSource = $(`#${idDiv} img`).attr('src');
        let pItem = $(`#${idDiv} p:first`).html();
        let pPrice = $(`#${idDiv} p:last`).html();

        popDiv(imgSource, idDiv, pItem, pPrice);
    });

    $("#equipo .pop-vista").click(function(){
        let idBtn = $(this).attr("id");
        let idDiv = idBtn.substring(0,5);
        let imgSource = $(`#${idDiv} img`).attr('src');
        let pItem = $(`#${idDiv} p:first`).html();
        let pPrice = $(`#${idDiv} p:last`).html();

        popDiv(imgSource, idDiv, pItem, pPrice);
    });

    $("#endodoncia .pop-vista").click(function(){
        let idBtn = $(this).attr("id");
        let idDiv = idBtn.substring(0,5);
        let imgSource = $(`#${idDiv} img`).attr('src');
        let pItem = $(`#${idDiv} p:first`).html();
        let pPrice = $(`#${idDiv} p:last`).html();

        popDiv(imgSource, idDiv, pItem, pPrice);
    });


    
    /* INDEX */
    setId(`#populares`, `ppl`);
    
    /* INDEX */
    $("#populares .pop-vista").click(function(){
        let idBtn = $(this).attr("id");
        let idDiv = idBtn.substring(0,5);
        let imgSource = $(`#${idDiv} img`).attr('src');
        let pItem = $(`#${idDiv} p:first`).html();
        let pPrice = $(`#${idDiv} p:last`).html();

        popDiv(imgSource, idDiv, pItem, pPrice);
    });


    //Eliminar item
    $(".fa-times").click(function(){
        let item = $(this).attr("id");
        $(`.${item}`).fadeOut(300, function(){ $(item).remove();});
    });

    /* Botón de compra */
    $("#btn-checkout").click(function(){
        swal({
            title: "Tu compra está en proceso.",
            text: "En breve nos pondremos en contacto contigo.",
            type: "success",
            confirmButtonColor: '#A7DBD2',
            confirmButtonText: 'OK'
        }).then(
            function () { window.location = "index.html" }
        );
    }); 


   
});

