// w3s functions
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// cookie banner display
let banner = document.querySelector('.banner'),
    bannerClose = document.querySelector('#banner-close'),
    cookieAccept = getCookie('cookieAccept');

if (!!cookieAccept) {
  banner.style.display = 'none';
} else {
  bannerClose.addEventListener('click', function(){
    banner.style.display = 'none';
    dataLayer.push({
      'event': 'bannerClose'
    })
    setCookie('cookieAccept', 'true', 30);
  });
}
