// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

$(function() {
  $('#pictureInput').on('change', function(event) {
    var files = event.target.files;
    var image = files[0]
    var reader = new FileReader();
    reader.onload = function(file) {
      var img = new Image();
      console.log(file);
      img.src = file.target.result;
      $('#target').html(img);
    }
    reader.readAsDataURL(image);
    console.log(files);
  });
});

$(document).ready(function(){
  $(".open_options").click(function(){
    $(".option_buttons_menu").removeClass('hide')
    $(".close_option_buttons").removeClass('hide')
    $(".option_buttons_bg").removeClass('hide')
  });
});

$(document).ready(function(){
  $(".close_options").click(function(){
    $(".option_buttons_menu").addClass('hide')
    $(".close_option_buttons").addClass('hide')
    $(".option_buttons_bg").addClass('hide')
  });
});
