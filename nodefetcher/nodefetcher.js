const _0x1b47b0=_0xaf18;function _0x21b9(){const _0x21d665=['(((.+)+)+)+$','5tKDDFX','Start\x20fetch\x20nodes.','push','DB\x20√','length','constructor','env','warn','576044kCqHDp','30950MqPvyJ','4EJbskK','connect','utf-8','2168907okxwuI','981824zNsqJh','Launching\x20service...','error','utf8','readFileSync','apply','split','out.txt','data','Cannot\x20start\x20subconvert\x20service.','sublist','from','Clash','toArray','4840544SvCfyO','writeFileSync','join','../sublist.txt','exit','Subconvert\x20√','Cannot\x20connect\x20to\x20the\x20db.','collection','5661Sxdxdz','Len:','find','info','search','1387104mMVJtP','Cannot\x20convert\x20the\x20sub\x20','base64','1430978DCsZlL','concat','PAIMONNODE_DB_URI','link','toString'];_0x21b9=function(){return _0x21d665;};return _0x21b9();}(function(_0x52bd0c,_0x25f2d1){const _0x166ea1=_0xaf18,_0x127903=_0x52bd0c();while(!![]){try{const _0x5db028=parseInt(_0x166ea1(0x105))/0x1+-parseInt(_0x166ea1(0xf1))/0x2+-parseInt(_0x166ea1(0x104))/0x3*(parseInt(_0x166ea1(0x101))/0x4)+parseInt(_0x166ea1(0xf7))/0x5*(-parseInt(_0x166ea1(0xee))/0x6)+-parseInt(_0x166ea1(0xff))/0x7+-parseInt(_0x166ea1(0xe1))/0x8+parseInt(_0x166ea1(0xe9))/0x9*(parseInt(_0x166ea1(0x100))/0xa);if(_0x5db028===_0x25f2d1)break;else _0x127903['push'](_0x127903['shift']());}catch(_0x550e07){_0x127903['push'](_0x127903['shift']());}}}(_0x21b9,0x8b8b9));function _0xaf18(_0x3c75b8,_0x113531){const _0x2563d2=_0x21b9();return _0xaf18=function(_0x4aed42,_0x213417){_0x4aed42=_0x4aed42-0xda;let _0x21b9c7=_0x2563d2[_0x4aed42];return _0x21b9c7;},_0xaf18(_0x3c75b8,_0x113531);}import{startSub}from'./libs/toolbox.js';import'./libs/log.js';import{MongoClient}from'mongodb';import _0x31b7ac from'axios';import _0x1e49e3 from'fs';const mClient=new MongoClient(process[_0x1b47b0(0xfd)][_0x1b47b0(0xf3)]);let sublist,nodes=[],outList=[],preloadServ=async function(){const _0x41fed5=_0x1b47b0;Logger[_0x41fed5(0xec)](_0x41fed5(0x106));async function _0x24fdbc(){const _0x2fae48=_0x41fed5;try{await mClient[_0x2fae48(0x102)](),sublist=await mClient['db']('paimonnode')[_0x2fae48(0xe8)](_0x2fae48(0xdd));}catch(_0x3b6545){Logger[_0x2fae48(0x107)](_0x2fae48(0xe7)+_0x3b6545),process[_0x2fae48(0xe5)](0x1);}Logger[_0x2fae48(0xec)](_0x2fae48(0xfa));}await _0x24fdbc();try{await startSub();}catch(_0x5999c0){Logger['error'](_0x41fed5(0xdc)+_0x5999c0),process['exit'](0x1);}Logger['info'](_0x41fed5(0xe6));},fetchNodes=async function(){const _0x3423ff=_0x1b47b0;Logger['info'](_0x3423ff(0xf8));let _0x3f2ba3=_0x1e49e3['readFileSync'](_0x3423ff(0xe4),_0x3423ff(0x108))[_0x3423ff(0x10b)]('\x0a'),_0x3dcc55=_0x1e49e3[_0x3423ff(0x109)]('../nodelist.txt',_0x3423ff(0x103))[_0x3423ff(0x10b)]('\x0a');for(let _0x264a35=0x0;_0x264a35<_0x3dcc55[_0x3423ff(0xfb)];_0x264a35++){_0x3dcc55[_0x264a35]!==''&&nodes[_0x3423ff(0xf9)](_0x3dcc55[_0x264a35]);}let _0x569377=await sublist[_0x3423ff(0xeb)]({'PLEASEIGNORE':0x1})[_0x3423ff(0xe0)]();for(let _0x2720c=0x0;_0x2720c<_0x569377[_0x3423ff(0xfb)];_0x2720c++){_0x3f2ba3['push'](_0x569377[_0x2720c][_0x3423ff(0xf4)]);}try{let _0x577d09=await _0x31b7ac('https://github.com/RenaLio/Mux2sub/raw/main/sub_list'),_0x474ee4=_0x577d09[_0x3423ff(0xdb)][_0x3423ff(0x10b)]('\x0a');for(let _0x580b69=0x0;_0x580b69<_0x474ee4[_0x3423ff(0xfb)];_0x580b69++){_0x474ee4[_0x580b69]!==''&&_0x3f2ba3['push'](_0x474ee4[_0x580b69]);}}catch(_0x311b99){Logger[_0x3423ff(0xfe)]('Fetch\x20autosub\x20sourse\x20faild.'+_0x311b99);}for(let _0x4aaee0=0x0;_0x4aaee0<_0x3f2ba3['length'];_0x4aaee0+=0x5){let _0x58134b=[];for(let _0x52dd01=0x0;_0x52dd01<0x5;_0x52dd01++){if(_0x4aaee0+_0x52dd01<_0x3f2ba3[_0x3423ff(0xfb)]){let _0x478a91=_0x3f2ba3[_0x4aaee0+_0x52dd01];_0x58134b['push'](new Promise(async(_0x1c4689,_0x555d52)=>{const _0x45fa1a=_0x3423ff;try{let _0x48ab29=await _0x31b7ac('http://127.0.0.1:25500/sub?target=mixed&remove_emoji=false&url='+encodeURIComponent(_0x478a91),{'headers':{'User-Agent':_0x45fa1a(0xdf)}}),_0x381d00=Buffer['from'](_0x48ab29[_0x45fa1a(0xdb)],_0x45fa1a(0xf0))[_0x45fa1a(0xf5)]('utf8')[_0x45fa1a(0x10b)]('\x0a');nodes=nodes[_0x45fa1a(0xf2)](_0x381d00),outList[_0x45fa1a(0xf9)](_0x478a91);}catch(_0x1e8f55){Logger[_0x45fa1a(0xfe)](_0x45fa1a(0xef)+_0x478a91+'\x20'+_0x1e8f55);}_0x1c4689();}));}}await Promise['all'](_0x58134b);}Logger[_0x3423ff(0xec)](_0x3423ff(0xea)+nodes[_0x3423ff(0xfb)]),_0x1e49e3[_0x3423ff(0xe2)](_0x3423ff(0xe4),outList[_0x3423ff(0xe3)]('\x0a'));},output=async function(){const _0x4ec32c=_0x1b47b0;Logger['info']('Start\x20output\x20nodes.');let _0x2d92c7=Buffer[_0x4ec32c(0xde)](nodes[_0x4ec32c(0xe3)]('\x0a'))['toString'](_0x4ec32c(0xf0));return _0x1e49e3['writeFileSync'](_0x4ec32c(0xda),_0x2d92c7),Logger[_0x4ec32c(0xec)]('Output\x20√'),_0x2d92c7;};async function main(){const _0x8bebb1=_0x1b47b0,_0x245135=(function(){let _0x2b9810=!![];return function(_0x1840e4,_0x1e555d){const _0x54bb9d=_0x2b9810?function(){const _0x36ec49=_0xaf18;if(_0x1e555d){const _0x3ba91d=_0x1e555d[_0x36ec49(0x10a)](_0x1840e4,arguments);return _0x1e555d=null,_0x3ba91d;}}:function(){};return _0x2b9810=![],_0x54bb9d;};}()),_0x104c63=_0x245135(this,function(){const _0x5c8234=_0xaf18;return _0x104c63[_0x5c8234(0xf5)]()[_0x5c8234(0xed)](_0x5c8234(0xf6))[_0x5c8234(0xf5)]()[_0x5c8234(0xfc)](_0x104c63)[_0x5c8234(0xed)](_0x5c8234(0xf6));});_0x104c63(),await preloadServ(),await fetchNodes(),await output(),process[_0x8bebb1(0xe5)]();}main();
