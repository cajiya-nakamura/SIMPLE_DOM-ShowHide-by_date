$(function(){
  $("[data-start],[data-end]").each( function( e ){
    var start = $(this).data('start');
      if( !start ) start = "2000-01-01";
    var end = $(this).data('end');
      if( !end ) end = "2099-12-31";

    var reg = /^20\d{2}-[01]\d-[0-3]\d$/g;
    error = {
      c1 : "日付の形式が YYYY-MM-DD ではありません"
    }

    if( start.match(reg) === null || end.match(reg) === null ){
      console.error( error.c1 );
      return true;
    }

    if( testTime ){
      var nowDate = new Date( testTime );
    }else{
      var nowDate = new Date();
    }

    var startDate = new Date( start );
    var endDate = new Date( end );

    if( startDate <= nowDate && nowDate <= endDate ){
      $(this).show();
    }else{
      $(this).hide();
    }
  } );

});
