
// Animate Menu

$(document).ready(function (){
  $( ".mw_menu_btn" ).click(function() {
    if($("#Menu").css("display") == 'none')
    {
      $( "#Menu" ).slideDown( 700, function() {
        // Animation complete.
      });
    }
    else
    {
      $( "#Menu" ).slideUp();
    }
});

});

// Update Cart Count in Header

function UpdateCart()
{
    if (!$(".count")[0]){ $(".sprites-cart").html("<div class='count'>0</div>"); }
    var count = parseInt($(".count").text())
    console.log(count)   
    count = count + 1;
    $(".count").text(count);
}
