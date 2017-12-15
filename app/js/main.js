// ***************** SLIDESHOW ******************** //
            
            $(function(){
                $('.slideContent img:gt(0)').hide();
                setInterval(function(){
                  $('.slideContent :first-child').fadeOut()
                     .next('img').fadeIn()
                     .end().appendTo('.slideContent');}, 
                  3000);
            });

            $(function(){
                $('.slideContent1 img:gt(0)').hide();
                setInterval(function(){
                  $('.slideContent1 :first-child').fadeOut()
                     .next('img').fadeIn()
                     .end().appendTo('.slideContent1');}, 
                  3000);
            });


//************** IMAGE POPUP **************** //
    // Hämtar div:en där popupbilden skall visas.         
        // var bigImage = document.getElementById("bigImage");
        // Skapar ett nytt img-element och döper det till pic. 
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
    // Sätter imgLink till det nya img-elementets src (createElement(img), ovan)
        pic.src = imgLink;
    // Lägger till det nya img-elementet med src-länk till div:en bigImage. 
        document.getElementById("bigImage").appendChild(pic);
     }

    function crossClick() {
        $("#modalPopup").fadeOut(1000);
        $("#cover").fadeOut(1000);
              console.log("hej");
    }


    //****************** HORIZONTAL SCROLL **********************//
            
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

function sendForm(){
    console.log("clicked send");
     $("#messages").css("display", "inline-block");
    $("#messages").html("Ditt meddelande är skickat!");
    $("#messages").fadeOut(3000);
}
