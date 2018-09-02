function videoInitConfig()
{
	document.getElementById("videoSourceType").setAttribute('value', '');
	document.getElementById("videoUrl").setAttribute('value', '');
	document.getElementById("videoTitle").setAttribute('value', '');
	document.getElementById("videoTranscript").setAttribute('value', '');
	document.getElementById("videoArticlePage").setAttribute('value', '');
	document.getElementById("videoWidth").setAttribute('value', '');
	document.getElementById("videoHeight").setAttribute('value', '');
}
function videoConfig(sourcetype,url,title,transcript,article,width,height)
{
	videoInitConfig();
	if(sourcetype != '')
	{
		document.getElementById('videoSourceType').setAttribute('value', sourcetype);
	}
	if(url != '')
	{
		document.getElementById('videoUrl').setAttribute('value', url);
	}
   if(title != '')
    {
	   document.getElementById('videoTitle').setAttribute('value', title);
    }
   if(transcript != '')
    {
	   document.getElementById('videoTranscript').setAttribute('value', transcript);
    }
   if(article != '')
   {
	   document.getElementById('videoArticlePage').setAttribute('value', article);
   }
   if(width != '')
   {
	   document.getElementById('videoWidth').setAttribute('value', width);
   }
   if(height != '')
   {
	   document.getElementById('videoHeight').setAttribute('value', height);
   }
}

var imgPop;
var changeStyle;

jQuery(document).ready(function () {
        popupStruct();
        jQuery(".scroll").click(function (event) {
        event.preventDefault();
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top }, 1500, 'easeInOutExpo');
        //USIM10008508270 - added code to load H1 tag in IE9 for titlewithimage component
        var data = jQuery('#imagediv').children('div').children('div#heading').html();
        jQuery('#imagediv').children('div').children('div#heading').html('<H1 style="PADDING-LEFT: 0px; COLOR: #106470; PADDING-TOP: 3px">'+data+'</H1>');
        //End
});
    
    
    //our history page popup function call
      //jQuery(".ajax").PopupWindowPlugin();
            /* if (jQuery(".ajax").length > 0) {
      //debugger;
        jQuery(".ajax").colorbox({ iframe:false, transition: "elastic", opacity: 0.95, initialHeight: 200, initialWidth: 200, speed: 300 });

       }*/
    
    //our history page popup function call ends


      
      /*  For popup (History overlay)
      *
      * on click of tumbnail images, popup with overlay will displayed. it will load
      image respective html*/
      
      (function(jQuery){
            jQuery.fn.extend({ 
                  
              PopupWindowPlugin: function() {
              
                       //Set the default values
                  defaults = {
                      
                      popupWrapper:'.popupMainWrapper',
                      id:"#cbox"
                  },

                  Status={
                  Close:"Close",
                  Open:"Open"
                  }
                  
                  var options =  jQuery.extend(defaults, options); 
                  var o = options;
                  var obj = jQuery(this);
                  
                  obj.click(function(e){
                      
                  var b=jQuery(window).scrollTop();
                      e.preventDefault();
                      url=jQuery(this).attr('href');
                      
                      var content;
                      // for history timeline overlay
                    if(imgPop==true){
                        
                      content=url+"/jcr:content/par.html";
                     
                      }
                      //for video overlay
                    else{
                        
                        content=url;
                        //alert(content);
                   }
                 //  var content=url+"/jcr:content/par.html";
                   
                   
                    jQuery("#cboxLoadedContent").empty();
                     jQuery("#cboxLoadedContent").load(content,chngStyle);
                      jQuery("#colorbox").css('top',''+b+'px');
                      jQuery(o.popupWrapper).show();
                     
                  });
                  var elem=Status.Close;
                  jQuery(o.id+elem).click(function(){ 
                        jQuery(o.popupWrapper).hide();
                        jQuery("#cboxLoadedContent").empty();                                                
                  });
          
              }


              
          });
      })(jQuery);
      
      // for small font changes (Meet our people page) we wanted reduced fonts
  function chngStyle(){

        if(changeStyle==true){
            jQuery(".popupHolder .left span").addClass("popup_heading");
            jQuery(".popupHolder .right span").addClass("popup_Subheading");
            jQuery(".popupHolder .right h1").addClass("popup_h1");
            
        }
  }          
      /* End of history overlay*/
      
      // for overlay ajax method
      
      jQuery(".ajax").PopupWindowPlugin();
           
      
    if (jQuery("#contactIR3").length > 0) {
        var countries = new ddtabcontent("contactIR3")
        countries.setpersist(true)
        countries.setselectedClassTarget("link")
        countries.init();
        jQuery("#contactIR3 li h4").click(function (event) {
        event.preventDefault();
            jQuery("#contactIR3 li").removeClass('active');
            jQuery(this).parent("li").addClass('active');

        });
    } 

    //remove default search box value on click
    if (jQuery('#searchBox').length > 0) {
        jQuery.fn.ToggleInputValue = function () {
            return jQuery(this).each(function () {
                var Input = jQuery(this);
                var default_value = Input.val();
                Input.css("color", "#918173");

                Input.focus(function () {
                    if (Input.val() == default_value) Input.val("");
                    Input.css("color", "#4d433b");
                }).blur(function () {
                    if (Input.val().length == 0) Input.val(default_value);
                });
            });
        }
        jQuery('#searchBox').ToggleInputValue();
    }

if (jQuery('#advancedSearchBox').length > 0) {
        jQuery.fn.ToggleInputValue = function () {
            return jQuery(this).each(function () {
                var Input = jQuery(this);
                var default_value = Input.val();
                Input.css("color", "#918173");

                Input.focus(function () {
                    if (Input.val() == default_value) Input.val("");
                    Input.css("color", "#4d433b");
                }).blur(function () {
                    if (Input.val().length == 0) Input.val(default_value);
                });
            });
        }
        jQuery('#advancedSearchBox').ToggleInputValue();  
    }




    //remove default show box value on click
    if (jQuery('#showBox').length > 0) {
        jQuery.fn.ToggleInputValue = function () {
            return jQuery(this).each(function () {
                var Input = jQuery(this);
                var default_value = Input.val();
                Input.css("color", "#000000"); // modified on 15 Feb

                Input.focus(function () {
                    if (Input.val() == default_value) Input.val("");
                    Input.css("color", "#4d433b");
                }).blur(function () {
                    if (Input.val().length == 0) Input.val(default_value);
                });
            });
        }
        jQuery('#showBox').ToggleInputValue();
    }
    
    //remove default search box value on click
    if (jQuery('#Text1').length > 0) {
        jQuery.fn.ToggleInputValue = function () {
            return jQuery(this).each(function () {
                var Input = jQuery(this);
                var default_value = Input.val();
                Input.css("color", "#918173");

                Input.focus(function () {
                    if (Input.val() == default_value) Input.val("");
                    Input.css("color", "#4d433b");
                }).blur(function () {
                    if (Input.val().length == 0) Input.val(default_value);
                });
            });
        }
        jQuery('#Text1').ToggleInputValue();
    }
    
    //remove default search box value on click
    if (jQuery('#Text2').length > 0) {
        jQuery.fn.ToggleInputValue = function () {
            return jQuery(this).each(function () {
                var Input = jQuery(this);
                var default_value = Input.val();
                Input.css("color", "#918173");

                Input.focus(function () {
                    if (Input.val() == default_value) Input.val("");
                    Input.css("color", "#4d433b");
                }).blur(function () {
                    if (Input.val().length == 0) Input.val(default_value);
                });
            });
        }
        jQuery('#Text2').ToggleInputValue();
    }

    //global navigation dropdown
    if (jQuery('#globalNavigation').length > 0) {

        //.js #mainWrapper #mainContent  #globalNavigation h2#aboutUs.active:hover span {display:none;}


        var $par = jQuery('#globalNavigation');

        $par.mouseleave(function () {
            jQuery(this).removeClass('active');
        });

        function show() {
            var $this = jQuery(this);

            if ($this.index() > 0) // if not the home tab
            {
                if (!$par.hasClass('active')) { // if there are no open tabs animate
                    $this.children(".submenu").fadeIn(300);
                    $par.addClass('active'); // add the class to the parent if first time
                }
                else // just show it
                    $this.children(".submenu").show();
            }

            $this.children("h2").addClass("hover");
            $this.children("h2.active").css("z-index", "100");

            //if About Us page 
            if (($this.index() == 6) && $this.children("h2").html().toLowerCase().indexOf("about us") >= 0) {
                $this.find("h2 span").remove();
            }

            if (jQuery('html.ie7').size() > 0) { // detect ie
                jQuery("#globalNavigation h2.active span").css("height", "1px");

                if ($this.find("h2.active").length > 0) {
                  jQuery("#globalNavigation h2.active span").css("height", "3px");
                }
            }


        }
        function hide() {
            var $this = jQuery(this);
            $this.children(".submenu").hide();
            $this.children("h2").removeClass("hover");
            $this.children("h2.active").css("z-index", "0");
            if (jQuery('html.ie7').size() > 0) { jQuery("#globalNavigation h2.active span").css("height", "3px"); }

            //if About Us page 
            if (($this.index() == 6) && $this.children("h2").html().toLowerCase().indexOf("about us") >= 0) {
                $this.find("h2").append("<span></span>");
            }

        }


        jQuery("#globalNavigation>div>ul>ul>li").hoverIntent({
            sensitivity: 7,
            interval: 250,
            over: show,
            timeout: 0,
            out: hide
        });
    }



    if (jQuery('.menu_class').length > 0) {

        function showCountries() {
            jQuery(this).children(".the_menu").fadeIn('fast');
            jQuery(this).find('#activeTabBg').fadeIn('fast', function () { jQuery(this).addClass("active") });

        }

        function hideCountries() {
            jQuery(this).children(".the_menu").hide();
            jQuery(this).find('#activeTabBg').hide().removeClass("active");
        }

        jQuery(".menu_class").hoverIntent({
            sensitivity: 1,
            interval: 1,
            over: showCountries,
            timeout: 0,
            out: hideCountries
        });

    }


});


// for !browser.opera removed from all jsp's and kept at one place here.

// advance search , site search,career search,invertor library search,tab_presssearch,product pipeline

jQuery(document).ready(function () {
    if (!jQuery.browser.opera) {
        jQuery('select.select').each(function () {
            var title = jQuery(this).attr('title');
            /*if (jQuery('option:selected', this).val() != '')*/ title = jQuery('option:selected', this).text();
            /***** UAT – Defect No: Raised by Mark – Drop down text length issue- Nagarjuna – Start *****/
            if(title.length > 20) title = title.substring(0, 20) + '...';
            /***** UAT – Defect No: Raised by Mark – Drop down text length issue- Nagarjuna – End*****/
            jQuery(this)
.css({ 'z-index': 10, 'opacity': 0, 'width': 178, 'background-color': '#f3f3f3', '-khtml-appearance': 'none' })
.after('<span class="selectOne">' + title + '</span>')
.change(function () {
val = jQuery('option:selected', this).text();
/***** UAT – Defect No Raised by Mark – Drop down text length issue- Nagarjuna – Start *****/
if(val.length > 20) val = val.substring(0, 20) + '...';
/***** UAT – Defect No Raised by Mark – Drop down text length issue- Nagarjuna – End*****/
jQuery(this).next().text(val);
})
        });
    };
});


// added for overlay structure

function popupStruct(){
    jQuery("body").append("<div id='popupMainWrapper' class='popupMainWrapper' style='display:none;'>"
        +"<div id='cboxOverlay' style='display: block; opacity: 0.95; cursor: pointer;'></div>"
        
        +"<div id='colorbox' class='' style='display: block; padding-bottom: 0px; padding-right: 0px; top: 10px; left: 289px; position: absolute; width: 772px; height:800px; opacity: 1; cursor: auto;'><div id='cboxWrapper' style='height: 800px; width: 772px;'><div><div id='cboxTopLeft' style='float: left;'></div><div id='cboxTopCenter' style='float: left; width: 772px;'></div><div id='cboxTopRight' style='float: left;'></div></div><div style='clear: left;'><div id='cboxMiddleLeft' style='float: left; height: 800px;'></div><div id='cboxContent' style='float: left; width: 772px; height: 800px;'>"
        +"<div id='cboxLoadedContent' style='display: block; width: 772px; overflow: auto; height: 800px;'>"

    +"</div>"
    +"<div id='cboxLoadingOverlay' style='float: left; display: none;'></div><div id='cboxLoadingGraphic' style='float: left; display: none;'></div><div id='cboxTitle' style='float: left; display: block;'></div><div id='cboxCurrent' style='float: left; display: none;'></div><div id='cboxNext' style='float: left; display: none;'></div><div id='cboxPrevious' style='float: left; display: none;'></div><div id='cboxSlideshow' style='float: left; display: none;'></div><div id='cboxClose' style='float: left;'>close</div></div><div id='cboxMiddleRight' style='float: left; height: 800px;'></div></div><div style='clear: left;'><div id='cboxBottomLeft' style='float: left;'></div><div id='cboxBottomCenter' style='float: left; width: 772px;'></div><div id='cboxBottomRight' style='float: left;'></div></div></div><div style='position: absolute; width: 9999px; visibility: hidden; display: none;'></div></div></div>");

}
