$(function() {	 
	$.each($('.store_data_circle'), function(i, elem) {
		 that=$(elem);	
		 var orig_zi=1000-i;
		  that.css({'z-index':orig_zi});
		  that.css({'margin-left': Math.floor(Math.random()*100)});
		  that.css({'margin-top': Math.floor(Math.random()*100)});		  
		  if (that.attr('bg-img')){
			  that.css({'background':'url('+that.attr('bg-img')+')'});
			  tt=that.children('.data_title'); 		  
		  }		  
			that.hover(function(){
				that=$(this);
				that.css({'z-index':2000});				
                that.find('span .fade').stop().animate({
                    opacity: 0
                }, 250);				
			},function(){
				that=$(this);
				that.css({'z-index':orig_zi});
                that.find('span .fade').stop().animate({
                    opacity: 1
                }, 250);							
			});
			
			that.click(function(){
				that=$(this);
				data=that.children('.click_data')
				data.css({'display':'block'});		
				that.html(data);
				
			}); 		  
	});
	$.each($('.store_data_circle2'), function(i, elem) {
		 that=$(elem);	
		 var orig_zi=1000-i;
		  that.css({'z-index':orig_zi});		  	  
		  if (that.attr('bg-img')){
			  that.css({'background':'url('+that.attr('bg-img')+')'});
			  tt=that.children('.data_title'); 		  
		  }		  
			that.hover(function(){
				that=$(this);
				that.css({'z-index':2000});				
                that.find('span .fade').stop().animate({
                    opacity: 0
                }, 250);				
			},function(){
				that=$(this);
				that.css({'z-index':orig_zi});
                that.find('span .fade').stop().animate({
                    opacity: 1
                }, 250);							
			});
			
			that.click(function(){
				that=$(this);
				data=that.children('.click_data')
				data.css({'display':'block'});		
				that.html(data);
				
			}); 		  
	});

});