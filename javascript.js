var s = window.matchMedia("(max-width: 700px)")

if (s.matches) {
    function navOpen () {
        document.getElementById("navbar").style.width = "100%";
        // document.getElementById("main-doc").style.marginLeft = "160px";
    }
    
    function navClose () {
        document.getElementById("navbar").style.width = "0";
        document.getElementById("main-doc").style.marginLeft = "0";
    }
} else {
    function navOpen () {
        document.getElementById("navbar").style.width = "160px";
        document.getElementById("main-doc").style.marginLeft = "160px";
    }
    
    function navClose () {
        document.getElementById("navbar").style.width = "0";
        document.getElementById("main-doc").style.marginLeft = "0";
    }
}
