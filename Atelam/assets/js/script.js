$(document).ready(function () {
  // AJOUTE UN SMOOTH SCROLL A TT LE MONDE
  $("a.nav-link").on('click', function (event) {

    // DE PAS OUBLIE DE DONNER UNE VAL A HASH QUI CORRESPOND AU #
    if (this.hash !== "") {

      event.preventDefault();

      // VAR HASH QUI PREND TOUT LE #
      var hash = this.hash;

      // ON ANIME LE AVEC JQuery

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () { // 900 ms pour LE TEMP ( en ms)


      });
    }
  });
});
// AFFICHAGE PRIX + NOM DE LARTICLE 
$(document).ready(function () {
  
  $("button#boutonAjouter").click(function () {
  
    var text = $(this).attr("data-text");
    var price = $(this).attr("data-price");
    var liste = $("<li data-price=" + price + "></li>");
   
    liste.html("-"+ price + "€ -" + text).appendTo($("#panier>ul"));
  });

// AFFICHAGE DU PRIX SUR LE BOUTON PAYER
  $("button#boutonAjouter").click(function () {
    var price = $(this).attr("data-price");
    
$("#total").append("<span>"+price+"€"+"</span>")

  });

});


// AFFICHE LE SUPPRIMER QUI PERMET DE SUPPRIMER ONCLICK 
$(document).ready(function () {

$("#panier").on("click", "li", function () {
  var supprimer = $(this);
  supprimer.addClass("removing").slideUp(function () {
    supprimer.remove();
    

  });

});
});







