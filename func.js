function cookieGet(_key) {
    var result = null;
    var cookie = document.cookie.split(';');
    cookie.some(function (item) {
        item = item.replace(' ', '');

        var dic = item.split('=');

        if (_key === dic[0]) {
            result = dic[1];
            return '';
        }
    });
    return result;
}
function cookieSet(_key, _value) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 365);
    document.cookie = _key + "=" + escape(_value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function cookieReset(_key, _value) {
    if ( cookieGet(_key) == null ) {
        cookieSet(_key, _value)
    }
    return cookieGet(_key);
}
