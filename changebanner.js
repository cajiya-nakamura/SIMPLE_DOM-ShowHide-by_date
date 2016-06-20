(function(){

   // イベントの開始時刻を入力する。
   var sstime = new Date('Sat Jun 19 2016 00:00:00 GMT+0900 (JST)');
   var now = new Date();

   if(now < sstime){
      // イベントの開始前に表示させるHTML ※改行する場合は「\」(バックスラッシュ)を入力してください。
      var html = '\
      <a href="http://item.rakuten.co.jp/motsukichi/10000007/">\
      <img src="http://www.rakuten.ne.jp/gold/motsukichi/img/banner/20160615_floting_pc.jpg" alt="">\
      </a>\
      ';

   }else{
      // イベントの開始後に表示させるHTML ※改行する場合は「\」(バックスラッシュ)を入力してください。
      var html = '\
      <a href="http://www.rakuten.ne.jp/gold/motsukichi/pages/2016/201606_ss_pc.html">\
         <img src="http://image.rakuten.co.jp/motsukichi/cabinet/ebents/imgrc0072369083.jpg" alt="">\
      </a>\
      ';

   }
   document.write(html);
})();
