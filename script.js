var divAbout = $( "div#about" );
var offsetAbout = divAbout.offset().top;
var divPortfolio = $( "div#portfolio" );
var offsetPortfolio = divPortfolio.offset().top;
var divContact = $( "div#contact" );
var offsetContact = divContact.offset().top;
$(window).scroll(function() {
  if($(this).scrollTop() < 50)
  {
    $('.navbar').removeClass('navbar-default');
    $('.navbar').addClass('navbar-clear');
    $('.navbar').removeClass('navbar-home');
    $('.navbar').removeClass('navbar-about');
    $('.navbar').removeClass('navbar-portfolio');
  }
  else if ($(this).scrollTop() < offsetAbout - 100)
  {
    $('.navbar').addClass('navbar-default');
    $('.navbar').addClass('navbar-home');
    $('.navbar').removeClass('navbar-about');
    $('.navbar').removeClass('navbar-clear');
    $('#a').removeClass('active');
    $('#h').addClass('active');
    
  }
  else if ($(this).scrollTop() < offsetPortfolio - 100)
  {
    $('.navbar').addClass('navbar-default');
    $('.navbar').addClass('navbar-about');
    $('.navbar').removeClass('navbar-home');
    $('.navbar').removeClass('navbar-portfolio');
    $('#h').removeClass('active');
    $('#p').removeClass('active');
    $('#a').addClass('active');
  } else if ($(this).scrollTop() < offsetContact)  /*height in pixels when the navbar becomes non opaque*/ 
  {
    $('.navbar').addClass('navbar-portfolio');
    $('.navbar').addClass('navbar-default');
    $('.navbar').removeClass('navbar-about');
    $('.navbar').removeClass('navbar-clear');
    $('#a').removeClass('active');
    $('#c').removeClass('active');
    $('#p').addClass('active');
  } else 
  {
    $('.navbar').removeClass('navbar-portfolio');
    $('.navbar').addClass('navbar-clear');
    $('.navbar').removeClass('navbar-default');
    $('.navbar').removeClass('navbar-about');
    $('.navbar').removeClass('navbar-home');
    $('#p').removeClass('active');
    $('#a').addClass('active');
  }
});
$(window).resize(function() {
 offsetAbout = divAbout.offset().top;
 offsetPortfolio = divPortfolio.offset().top;
 offsetContact = divContact.offset().top;
});