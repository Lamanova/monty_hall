$(document).ready(function() {
  var doorOpen = false;

  $('#blue-door').click(function () {
    if(doorOpen) {
      $(location).attr('href', 'result.html')
    } else {
      $('#main-title').hide();
      $('#main-desc').hide();
      $('#orange-door').hide();
      $('#blue-title').show();
      $('#blue-desc').show();
      $('#orange-door-open').show();
      doorOpen = true;
    }
  });

  $('#orange-door').click(function () {
    if(doorOpen) {
      $(location).attr('href', 'result.html')
    } else {
      $('#main-title').hide();
      $('#main-desc').hide();
      $('#blue-door').hide();
      $('#orange-title').show();
      $('#orange-desc').show();
      $('#blue-door-open').show();
      doorOpen = true;
    }
  });


  $('#green-door').click(function () {
    if(doorOpen) {
      window.location.href = 'result.html#success'
    } else {
      $('#main-title').hide();
      $('#main-desc').hide();
      $('#orange-door').hide();
      $('#green-title').show();
      $('#green-desc').show();
      $('#orange-door-open').show();
      doorOpen = true;
    }
  });
});
