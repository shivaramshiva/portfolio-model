$(function(){
 $.getJSON('datas2.json',function(data)
   {
      var template=$('#product-template').html();
	  var info=Mustache.to_html(template,data);
	  $('.flip').html(info);
	   var template=$('#announcement-template').html();
	  var info=Mustache.to_html(template,data);
	  $('.list').html(info);
   });
   
     
   });
