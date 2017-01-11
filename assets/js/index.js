function openNav() {
    document.getElementById("sidenav").style.width = "200px";
	$("#navlinks").fadeIn("slow");
    $("#logo").fadeOut("fast");
    $("#X").fadeIn("slow");
    document.getElementById("navbtn").style.left = "125px";
    document.getElementById("navbtn").setAttribute( "onClick", "javascript: closeNav();");
    document.getElementById("sidenav").setAttribute( "onClick", "");
    $("#dimmer").fadeIn("slow");
}

function closeNav() {
    document.getElementById("sidenav").style.width = "5em";
    document.getElementById("main").style.marginLeft= "5em";
    document.getElementById("navbtn").style.left = "0px";
    document.getElementById("navbtn").setAttribute( "onClick", "javascript: openNav();");
    document.getElementById("sidenav").setAttribute( "onClick", "javascript: openNav();");
    $("#logo").fadeIn("slow");
    document.getElementById("X").style.display = "none";
    $("#navlinks").fadeOut("fast");
    $("#dimmer").fadeOut("fast");
}

function expand(clicked){
    $(clicked).addClass('full');
    $(clicked).attr('onClick')="javascript: collapse();";
}

function collapse(clicked){
    $(clicked).removeClass('full');
    $(clicked).setAttribute( "onClick", "javascript: expand();");
}

function scrollTo(hash) {
    $(document.body).animate({
    'scrollTop':   $(hash).offset().top
    }, 500);
}
