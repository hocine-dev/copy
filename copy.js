
<script type='text/javascript'>
//<![CDATA[
$(document).ready(function()



{
   
if($("#herf").attr("href")!="https://khamsat.com/user/ghilass" )
 {
   window.location.href="https://khamsat.com/user/ghilass";
 }
  if($("#herf").html()!= 'تطوير:ghilass'){
   window.location.href="https://khamsat.com/user/ghilass";

  }
if($("#herf").css('visibility')== 'hidden'){
   window.location.href="https://khamsat.com/user/ghilass";
  }

if($("#herf").css('display')== 'none'){
   window.location.href="https://khamsat.com/user/ghilass";
 }

if($("#herf").css('background-color')== 'white'){
   window.location.href="https://khamsat.com/user/ghilass";


  
  }



    });
function removeHtmlTag(strx,chop){if(strx.indexOf("<")!=-1){var s = strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);}}strx = s.join("");}chop = (chop < strx.length-1) ? chop : strx.length-2; while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;strx = strx.substring(0,chop-1);return strx+'[...]';}function createSummaryAndThumb(pID){var div = document.getElementById(pID);var imgtag = "";var img = div.getElementsByTagName("img");var summ = summary_noimg;if(img.length>=1) { imgtag = '<span style="float:left; height: 180px;  margin-right: 15px; margin-top:4px; "><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>'; summ = summary_img; } var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>'; div.innerHTML =summary; }

if(window.attachEvent) {
    window.attachEvent('onload', bg);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            yourFunctionName(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = bg;
    }
}

function bg() {
  document.getElementById("herf").style.backgroundColor = "#DAD2D2";
   document.getElementById("herf").style.color = "inherit";
document.getElementById("herf").style.opacity = "1";
document.getElementById("herf").style.position = "relative";
document.getElementById("herf").style.zIndex = "2147483647";
document.getElementById("herf").style.fontSize = "xx-large";
document.getElementById("herf").style.width = "100px";
document.getElementById("herf").style.height = "50px";
document.getElementById("herf").style.left = "0px";
document.getElementById("herf").style.bottom = "0px";
document.getElementById("herf").style.right = "0px";
document.getElementById("herf").style.padding = "0px 0px 0px 0px";
document.getElementById("herf").style.borderTop = "0px";

}



//]]>
</script> 
