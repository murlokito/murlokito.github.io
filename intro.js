$(".landing").one( 'click', function(){
    			$(this).slideUp();
    			document.getElementById('lp').classList.add('fadeout', 'white');
    			document.getElementById('wrapper').classList.add('white');
    			document.getElementById('main').classList.add('mainFadein');
    			document.getElementById('murloc').classList.add('fadein');    
    		});
