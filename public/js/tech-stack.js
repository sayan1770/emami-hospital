function getQueryStringParameters() {
    var r = "",
        n = "";
    try {
        var t = window.location.search,
            r = 1 == new URLSearchParams(t).get("isp") ? (n = "?isp=1", "https://1.envato.market/baeyGk") : "https://1.envato.market/zNkqj6"
    } catch (t) {
        r = "https://1.envato.market/zNkqj6"
    }
    document.addEventListener("DOMContentLoaded", function() {
        for (var t = document.querySelectorAll(".btn-buy, .buynowlinks"), e = 0; e < t.length; e++) t[e].setAttribute("href", r)
    }), document.addEventListener("DOMContentLoaded", function() {
        for (var t = document.querySelectorAll(".technology-block a,.drp-technology a"), e = 0; e < t.length; e++) {
            var r = t[e].getAttribute("href");
            t[e].setAttribute("href", r + n)
        }
    })
}
getQueryStringParameters();