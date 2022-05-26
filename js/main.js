$(function(){

        $("#options .col").click(function(){
        // console.log($(this).css("background-color"))//para preguntar 
        if($(this).css("background-color","#000000")){
            $(this).css("color","#FFFFFF");
        }
        else{
            $(this).css("color","transparent");
        }
        $("#options i").click(function () {
            $("#options .col").css("background-color", "transparent");
    
        })
        
        })


        



    //DOG WALKING 

    
    $("#dogwalking figure").append("<figcaption>");

    $("#dogwalking figure").mouseenter(function(){
        $(this).find("figcaption").slideDown().slideDown("fast");
    })

    $("#dogwalking figure").mouseleave(function(){
        $(this).find("figcaption").slide().slide("fast");
    })
       
     
    
    $("#dogwalking figure").each(function(){
        var nombre  =   $(this).find("img").attr("title");
        console.log(nombre);
        $(this).find("figcaption").html("<div><h6>" +   nombre  +   "</h6></div>");       
        $(this).find("figcaption div").prepend("<i class='bi bi-zoom-in'></i>")
        var rutaImagen=$(this).find("img").attr("src");

     

        $(this).find("figcaption div i").click(function(){
            $("body").append("<div id='fondo-transparente'>");
            $("#fondo-transparente").append("<img src='" + rutaImagen + "'>")
            $("#fondo-transparente").click(function(){
                $(this).remove();
            })
        })

    })



    //Fetch de las paginas main-content
    $("#menu-item-services").click(function () {
        fetch("services.html")
            .then(function (response) {
                return response.text()
            })
            .then(function (data) {
                $("#main-content").html(data);
            })

    })


})
   


