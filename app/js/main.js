//***************** ACTIVE LINK ******************//

window.addEventListener("load", function()
{
var activePage = document.getElementsByClassName("activePage")[0].innerHTML;
console.log(activePage);
    
// Lägger till klassen thisLink till menylänken vi befinner oss på
if (activePage == "galleri") {
    $('.galleri').addClass('thisLink');
    $('.info').removeClass('thisLink');
    $('.kontakt').removeClass('thisLink');
    
} else if (activePage == "info") {
    $('.info').addClass('thisLink');
    $('.galleri').removeClass('thisLink');
    $('.kontakt').removeClass('thisLink');

} else if (activePage == "kontakt") {
    $('.kontakt').addClass('thisLink');
    $('.info').removeClass('thisLink');
    $('.galleri').removeClass('thisLink');
} else {
    
}
  });   

// ***************** SLIDESHOW ******************** //
  /* img:gt(0) = döljer alla img-element som är efter 0 (första)
    setIntervall för att bläddra genom bilderna. Fadeout first child 
    för att kunna fadein secondchild, sedan läggs första bilden sist i kön
*/ 
 
            $(function(){
                $('.slideContent img:gt(0)').hide();     // gömmer alla bilder förutom den första

                setInterval (function(){
                    console.log('Slideshow start');
                  $('.slideContent :first-child').fadeOut(1000) 
                     .next('img').fadeIn(1000) 
                     .end().appendTo('.slideContent');}, 
                  3000);
            });

            $(function(){
                $('.slideContent1 img:gt(0)').hide();
                setInterval(function(){
                  $('.slideContent1 :first-child').fadeOut(1000)
                     .next('img').fadeIn(1000)
                     .end().appendTo('.slideContent1');}, 
                  3000);
            });


//************** IMAGE POPUP **************** //
         
        /* Skapar ett nytt img-element och sparar det i variablen pic. 
        Skapar en funktion som fadear in modalen (och sätter parent till display:block
        för att modalen skall kunna synas)
        */

        var pic = document.createElement("img");
            pic.className="picture";
        
     function popup(img) {
         
         $("#modalPopup").fadeIn(1000);
         
        var modalPopup = document.getElementById("modalPopup");
        modalPopup.parentNode.style.display = "block";
        var ninjaBG = document.getElementById("cover");
        ninjaBG.style.display = "block";
      
        
    // Sätter this.img.src (bildlänken som anges i src på varje bild) till variabeln imgLink.  
        var imgLink = img.src;
        console.log("url: " + imgLink);
        pic.src = imgLink;  // Sätter imgLink till det nya img-elementets src (createElement(img), ovan) 
        document.getElementById("bigImage").appendChild(pic); // Lägger till nya img-elementet med src-länk till div:en bigImage.
     }

    // skapar en stäng-knapp som fadear ut modalen
    function crossClick() {
        $("#modalPopup").fadeOut(1000);
        $("#cover").fadeOut(1000);
              console.log("hej");
    }


    //****************** HORIZONTAL SCROLL **********************//
            /* Gör scrollen horisontell, sätter hover:funktioner på pilarna
            så att man enkelt kan scrolla i galleriet. 
            */

            $(function() {
    var $container = $('.gallery'),
        scroll = $container.width();
    $('#arrowRight').hover(function() {
        $container.animate({
            'scrollLeft': 2000
        },{duration: 4000, queue: false});
    }, function(){
        $container.stop();
    });
    $('#arrowLeft').hover(function() {
        $container.animate({
            'scrollLeft': -500
        },{duration: 4000, queue: false});
    }, function(){
        $container.stop();
    });

});

//******************* SEND FORM ********************//
/* När man klickar på skicka under formuläret dyker det upp en 
rad som berättar att meddelandet är skickat */

function sendForm(){
    console.log("clicked send");
     $("#messages").css("display", "inline-block");
    $("#messages").html("Ditt meddelande är skickat!");
    $("#messages").fadeOut(3000);
}
    
