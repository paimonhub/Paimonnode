const _0x1e1a27=_0x4ce5;function _0x4ce5(_0x4aacf8,_0x223b64){const _0x3637fd=_0x5240();return _0x4ce5=function(_0xc73035,_0x475d8c){_0xc73035=_0xc73035-0x196;let _0x52400a=_0x3637fd[_0xc73035];return _0x52400a;},_0x4ce5(_0x4aacf8,_0x223b64);}(function(_0xb9da01,_0x53a7a7){const _0x3b2b17=_0x4ce5,_0x24f718=_0xb9da01();while(!![]){try{const _0xe9edff=parseInt(_0x3b2b17(0x1aa))/0x1+parseInt(_0x3b2b17(0x1b4))/0x2+parseInt(_0x3b2b17(0x1bb))/0x3*(parseInt(_0x3b2b17(0x1a3))/0x4)+parseInt(_0x3b2b17(0x197))/0x5+parseInt(_0x3b2b17(0x1af))/0x6+-parseInt(_0x3b2b17(0x19e))/0x7*(parseInt(_0x3b2b17(0x1b5))/0x8)+-parseInt(_0x3b2b17(0x198))/0x9;if(_0xe9edff===_0x53a7a7)break;else _0x24f718['push'](_0x24f718['shift']());}catch(_0x1d032c){_0x24f718['push'](_0x24f718['shift']());}}}(_0x5240,0x768ea));import{startSub}from'./libs/toolbox.js';import'./libs/log.js';function _0x5240(){const _0x28ad56=['utf-8','writeFileSync','2392090tQznUP','26515800GieosZ','push','out.txt','Output\x20√','toArray','length','1897OcPyNU','warn','search','info','base64','35588hotaTW','Clash','apply','toString','collection','Start\x20fetch\x20nodes.','from','526831uLzPly','connect','(((.+)+)+)+$','split','constructor','5445234cuskNi','log','Cannot\x20connect\x20to\x20the\x20db.','http://127.0.0.1:25500/sub?target=mixed&remove_emoji=false&url=','paimonnode','1146736mEHDHQ','712LTARrM','exit','join','env','data','readFileSync','327ywbiSa','PAIMONNODE_DB_URI','Subconvert\x20√','../sublist.txt','error','Start\x20output\x20nodes.','link','find','../nodelist.txt','utf8','Fetch\x20autosub\x20sourse\x20faild.','flist\x20len:'];_0x5240=function(){return _0x28ad56;};return _0x5240();}import{MongoClient}from'mongodb';import _0x32f0d2 from'axios';import _0x2d2e99 from'fs';const mClient=new MongoClient(process[_0x1e1a27(0x1b8)][_0x1e1a27(0x1bc)]);let sublist,nodes=[],outList=[],preloadServ=async function(){const _0x19a8ec=_0x1e1a27;Logger[_0x19a8ec(0x1a1)]('Launching\x20service...');async function _0x2af071(){const _0x5a3164=_0x19a8ec;try{await mClient[_0x5a3164(0x1ab)](),sublist=await mClient['db'](_0x5a3164(0x1b3))[_0x5a3164(0x1a7)]('sublist');}catch(_0x445e34){Logger[_0x5a3164(0x1bf)](_0x5a3164(0x1b1)+_0x445e34),process[_0x5a3164(0x1b6)](0x1);}Logger[_0x5a3164(0x1a1)]('DB\x20√');}await _0x2af071();try{await startSub();}catch(_0x684c2e){Logger[_0x19a8ec(0x1bf)]('Cannot\x20start\x20subconvert\x20service.'+_0x684c2e),process[_0x19a8ec(0x1b6)](0x1);}Logger[_0x19a8ec(0x1a1)](_0x19a8ec(0x1bd));},fetchNodes=async function(){const _0x58b6ec=_0x1e1a27;Logger[_0x58b6ec(0x1a1)](_0x58b6ec(0x1a8));let _0x4b5baf=_0x2d2e99['readFileSync'](_0x58b6ec(0x1be),_0x58b6ec(0x1c4))[_0x58b6ec(0x1ad)]('\x0a'),_0x4d981c=_0x2d2e99[_0x58b6ec(0x1ba)](_0x58b6ec(0x1c3),_0x58b6ec(0x1c7))[_0x58b6ec(0x1ad)]('\x0a');for(let _0x7de226=0x0;_0x7de226<_0x4d981c[_0x58b6ec(0x19d)];_0x7de226++){_0x4d981c[_0x7de226]!==''&&nodes['push'](_0x4d981c[_0x7de226]);}let _0x129c9a=await sublist[_0x58b6ec(0x1c2)]({'PLEASEIGNORE':0x1})[_0x58b6ec(0x19c)]();for(let _0xda3c00=0x0;_0xda3c00<_0x129c9a['length'];_0xda3c00++){_0x4b5baf[_0x58b6ec(0x199)](_0x129c9a[_0xda3c00][_0x58b6ec(0x1c1)]);}try{let _0x886402=await _0x32f0d2('https://github.com/RenaLio/Mux2sub/raw/main/sub_list'),_0x14e977=_0x886402[_0x58b6ec(0x1b9)][_0x58b6ec(0x1ad)]('\x0a');console[_0x58b6ec(0x1b0)](_0x58b6ec(0x1c6)+_0x14e977[_0x58b6ec(0x19d)]);for(let _0x51ff54=0x0;_0x51ff54<_0x14e977['length'];_0x51ff54++){_0x14e977[_0x51ff54]!==''&&_0x4b5baf[_0x58b6ec(0x199)](_0x14e977[_0x51ff54]);}}catch(_0x41a983){Logger[_0x58b6ec(0x19f)](_0x58b6ec(0x1c5)+_0x41a983);}for(let _0x44b33b=0x0;_0x44b33b<_0x4b5baf[_0x58b6ec(0x19d)];_0x44b33b+=0x5){let _0x31ed19=[];for(let _0x35d2d4=0x0;_0x35d2d4<0x5;_0x35d2d4++){if(_0x44b33b+_0x35d2d4<_0x4b5baf[_0x58b6ec(0x19d)]){let _0x5368ef=_0x4b5baf[_0x44b33b+_0x35d2d4];_0x31ed19['push'](new Promise(async(_0x2d7983,_0x27448d)=>{const _0x46a2c4=_0x58b6ec;try{let _0x2069c5=await _0x32f0d2(_0x46a2c4(0x1b2)+encodeURIComponent(_0x5368ef),{'headers':{'User-Agent':_0x46a2c4(0x1a4)}}),_0x291ed8=Buffer[_0x46a2c4(0x1a9)](_0x2069c5[_0x46a2c4(0x1b9)],_0x46a2c4(0x1a2))[_0x46a2c4(0x1a6)](_0x46a2c4(0x1c4))[_0x46a2c4(0x1ad)]('\x0a');nodes=nodes['concat'](_0x291ed8),outList['push'](_0x5368ef);}catch(_0x33d8a9){Logger['warn']('Cannot\x20convert\x20the\x20sub\x20'+_0x5368ef+'\x20'+_0x33d8a9+_0x33d8a9[_0x46a2c4(0x1b9)]);}_0x2d7983();}));}}await Promise['all'](_0x31ed19);}Logger[_0x58b6ec(0x1a1)]('Len:'+nodes['length']),_0x2d2e99[_0x58b6ec(0x196)]('../sublist.txt',outList[_0x58b6ec(0x1b7)]('\x0a'));},output=async function(){const _0x53684b=_0x1e1a27;Logger[_0x53684b(0x1a1)](_0x53684b(0x1c0));let _0x383a63=Buffer[_0x53684b(0x1a9)](nodes[_0x53684b(0x1b7)]('\x0a'))[_0x53684b(0x1a6)](_0x53684b(0x1a2));return _0x2d2e99['writeFileSync'](_0x53684b(0x19a),_0x383a63),Logger[_0x53684b(0x1a1)](_0x53684b(0x19b)),_0x383a63;};async function main(){const _0x10fea2=(function(){let _0x4ff5d2=!![];return function(_0x4fbc2f,_0x287b22){const _0x488d16=_0x4ff5d2?function(){const _0x16950e=_0x4ce5;if(_0x287b22){const _0x380e87=_0x287b22[_0x16950e(0x1a5)](_0x4fbc2f,arguments);return _0x287b22=null,_0x380e87;}}:function(){};return _0x4ff5d2=![],_0x488d16;};}()),_0x14d535=_0x10fea2(this,function(){const _0x7b0ac8=_0x4ce5;return _0x14d535[_0x7b0ac8(0x1a6)]()[_0x7b0ac8(0x1a0)](_0x7b0ac8(0x1ac))[_0x7b0ac8(0x1a6)]()[_0x7b0ac8(0x1ae)](_0x14d535)['search']('(((.+)+)+)+$');});_0x14d535(),await preloadServ(),await fetchNodes(),await output(),process['exit']();}main();
