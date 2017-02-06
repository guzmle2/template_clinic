/**
 * Created by Leonor Guzman on 1/20/2016.
 */
(function($){
    $(function(){

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
 
    $('select').material_select();
    $('.button-collapse').sideNav();
    $('.slider').slider({full_width: true});
  $('.carousel').carousel();

    $('ul.tabs').tabs();

    $("#menu").load("../menu.html");     
    }); // end of document ready
})(jQuery); // end of jQuery name space

