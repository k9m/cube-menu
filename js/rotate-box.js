(function($) {
	$.fn.cubeMenu = function(options) {
		
		var settings = {
			x : 100,
			y : 50,
			invisibleBackface : true,
			cube :	{
			 	front : { 
			 		position : null, 
			 		animate : null, 
			 		css: {
			 			background: 'red'
			 		} 
			 	},
			 	back : { 
			 		position : -180, 
			 		animate : -180 
			 	},
			 	right : { 
			 		position : 90, 
			 		animate : -90 
			 	},
			 	left : { 
			 		position : -90, 
			 		animate : 90
			 	},
			 	top : { 
			 		position : 90, 
			 		animate : -90
			 	},
			 	bottom : { 
			 		position : -90, 
			 		animate : 90 
			 	}
			}		
		};
		
		settings = $.extend(settings, options);
		
		var $self = this;
		var $box = $($self).children();		
				
		var $cube = settings.cube;
		var $x = settings.x;
		var $y = settings.y;
		
		init();
		
		function init(){
			
			$($self).width($x);
			$($self).height($y);
			
			$($box).find("figure").width($x - 2);
			$($box).find("figure").height($y - 2);
			
			//Laying out box
			animate($($box).find(".front"), wrapTransform($cube.front.position, 1));
			animate($($box).find(".back"), wrapTransform($cube.back.position, 1));
			animate($($box).find(".right"), wrapTransform($cube.right.position, 1));
			animate($($box).find(".left"), wrapTransform($cube.left.position, 1));
			animate($($box).find(".top"), wrapTransform($cube.top.position, 1));
			animate($($box).find(".bottom"), wrapTransform($cube.bottom.position, 1));
			
			if(settings.invisibleBackface){
				$($box).addClass('invisible_backface');
			}			
						
			var classList =$($box).attr('class').split(/\s+/);
			$.each( classList, function(index, item){
			    
				switch(item){			
					//Menubar 
					case 'vertical-roll':
						genVerticalRoll();
						return;
					break;
				}
			});
			
		}
		
		function genVerticalRoll(){
			
			$( $self ).mouseenter(function() {				
				if(!$(this).children().hasClass('cube_active')){
					animate($(this).children(), wrapTransform($cube.top.animate, -1));
				}								
			});	
			$( $self ).mouseleave(function() {
				if(!$(this).children().hasClass('cube_active')){
					animate($(this).children(), wrapTransform($cube.front.animate, -1));
				}								
			});
			
			animate($($box), wrapTransform($cube.front.animate, -1));
			animate($('.cube_active'), wrapTransform($cube.top.animate, -1));
		}
		
		function wrapTransform(n, s){			
			var str = "";			
			
			if (s > 0){
				str += wrapRotate(n);
				str += wrapTranslate(s);				
			}
			else{
				str += wrapTranslate(s);
				str += wrapRotate(n);
			}
						
			return str;
		}
		
		function wrapTranslate(neg) { return $y ? "translateZ( " + ($y / 2) * neg + "px ) " : "" ; }
		
		function wrapRotate(n){ return n ? "rotateX( " + n + "deg ) " : ""; }		
		
		function animate(elem, anim){
			
			$(elem).css('-webkit-transform',anim);
		    $(elem).css('-moz-transform',anim); 
		    $(elem).css('-ms-transform',anim);
		    $(elem).css('-o-transform',anim);
		    $(elem).css('transform',anim);	
		    
//		    $(box).animate({ opacity: 0.95 }, {
//			    step: function(now,fx) {
//				    $(box).css('-webkit-transform',anim);
//				    $(box).css('-moz-transform',anim); 
//				    $(box).css('-ms-transform',anim);
//				    $(box).css('-o-transform',anim);
//				    $(box).css('transform',anim); 
//			    },	    
//			    complete : function(){	    	
//			    	$position = 'up';	    	
//			    }
//			},'linear');
			
		}		
	};
	

}(jQuery));
