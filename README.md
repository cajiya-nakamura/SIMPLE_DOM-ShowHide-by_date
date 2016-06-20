# raku_event_change_banner
設定した時刻時刻でHTMLを書き換えるスクリプトです。


<script>
(function(){

   // イベントの開始時刻を入力する。
   var sstime = new Date('Sat Jun 19 2016 00:00:00 GMT+0900 (JST)');
   var now = new Date();

   if(now < sstime){
      // イベントの開始前に表示させるHTML ※改行する場合は「\」(バックスラッシュ)を入力してください。
      var html = '\
      <a href="#">\
      <img src="http://placekitten.com/g/200/300" alt="">\
      </a>\
      ';

   }else{
      // イベントの開始後に表示させるHTML ※改行する場合は「\」(バックスラッシュ)を入力してください。
      var html = '\
      <a href="#">\
      <img src="http://placekitten.com/200/300" alt="">\
      </a>\
      ';

   }
   document.write(html);
})();
</script>
