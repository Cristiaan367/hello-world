$('#clock').countdown('2018/01/6', function(event) {
      $(this).html(event.strftime('%D Dias %H:%M:%S'));
      });