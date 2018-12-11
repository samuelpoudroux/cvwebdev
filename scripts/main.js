// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// fonction que j'ai rajouté pour le webdev
// var tableau = "Web Developer chargé de projets";
// var tabl = [];
// var div = document.querySelector(".jobtitle");
// var texte = tableau.split('');
// var txt = texte.length;
// var ok = '';
// var msg = txt - 1;
// var i = 0;


// var bis = 0;
// function change() {
//     for (i = 0; i < txt; i++) {
//         console.log('ok');
//         texte[i] = ok + texte[i]
//         tabl.push(texte[i]);
//         ok = texte[i];
//     }
//     div.innerHTML = tabl[bis];
//     bis++;
// }


// setInterval("change()", 150);

// $(function(){  // $(document).ready shorthand
//   $('.monster').fadeIn('slow');
// });

// $(document).ready(function() {
    
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){
            
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},1500);
                    
//             }
            
//         }); 
    
//     });
    
// });