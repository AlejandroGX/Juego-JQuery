$( function() {
    $( "#tabs" ).tabs();
  } );

$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#1A003E",
          color: "#fff",
          width: 1250
        }, 1000 );
      $( function() {
    $( "#tabs" ).tabs();
  } );} 
      else {

        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 1250
        }, 1000 );
      }
      state = !state;
    });
  } );

$( function() {
    $( "#dialog-message" ).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );


$( function() {
    $( "#selectable" ).selectable();
  } );

  $( function() {
    $( "input" ).checkboxradio();
  } );


  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

  $( function() {
    $( "#sortable1" ).sortable();
    $( "#sortable1" ).disableSelection();
  } );

