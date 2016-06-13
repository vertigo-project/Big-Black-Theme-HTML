function navconrtol(button)
{
    var c;
    
    for(var i=0;i < 3;i++)
    {
        c = document.querySelectorAll(".abutton")[i];
        c.style.background = "rgba(250,250,250,0.7)";
        c.style.transition = "all 0.4s";
        c.onmouseover = function() { this.style.background = "rgba(10,10,10,0.9)"; this.style.color = "white";  }
        c.onmouseout = function() { this.style.background = "rgba(250,250,250,0.7)"; this.style.color = "#303030"; }

        if(button == i)
        {
            c.style.background="rgba(10,10,10,0.9)";
            c.style.color = "white";
            c.onmouseover = function() { this.style.background = "rgba(10,10,10,0.9)"; this.style.color = "white";  }
            c.onmouseout = function() { this.style.background = "rgba(10,10,10,0.9"; this.style.color = "white"; }
        }
        if(button != i)
        {
            c.style.background="rgba(250,250,250,0.7)";
            c.style.color = "#303030";
            c.onmouseover = function() { this.style.background = "rgba(10,10,10,0.9)"; this.style.color = "white";  }
            c.onmouseout = function() { this.style.background = "rgba(250,250,250,0.7)"; this.style.color = "#303030"; }
        }
    }
    
    if(button == 2) runmore();
}
function runmore()
{
    var infoblock = document.getElementById('blocki'); 

    var style = window.getComputedStyle(infoblock),
    disp = style.getPropertyValue('display');
    
    if(disp == "block")
    {
        infoblock.style.opacity = 0;
        $(infoblock).animate({opacity: 1});
    }
    
    var a = Math.random()*2;
    a=Math.floor(a);
    
    if(a == 0) $(infoblock).animate({ width: 'show' },450); 
    if(a == 1) $(infoblock).animate({ height: 'show' },450); 
    
    infoblock.style.display = "block";
}
    
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 900);
        return false;
      }
    }
  });
});

