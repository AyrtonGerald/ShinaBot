import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs' 
 
//แญฅ๐แญขแขฯดฮ แฯดี ฮแฎฬแทแฌแกฯดี ฯแฎแฌ ฯแฎแแฌแกแชีแญฅ๐แญข
global.owner = [
  ['51936448126', '๐ฆ๐ต๐ถ๐ป๐ฎ (แดสแดแดแดแดส)', true],
  ['51936448126', '๐ฑ๐๐ผ๐ถ๐๐๐ ใท (แดแดสแดสแดสแดแดแดส)', true],
]
global.mods = [] 
global.prems = [] 
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}

//แญฅ๐แญขโโโโโโโ๐ป๐ฐ๐ฌ๐ด๐ท๐ถโโโโโโโแญฅ๐แญข
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.aรฑo = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ


//แญฅ๐แญขโโโโโ๐ด๐จ๐น๐ช๐จ๐บ ๐ซ๐ฌ ๐จ๐ฎ๐ผ๐จโโโโโแญฅ๐แญข
global.ignyc = '\n๐ฆ๐ต๐ถ๐ป๐ฎเฟ\n๐ฆ๐ต๐ถ๐ป๐ฎ\n' 
global.wm = '\n๐ฆ๐ต๐ถ๐ป๐ฎเฟ\n๐ฆ๐ต๐ถ๐ป๐ฎ\n' 
global.botname = '๐ฆ๐ต๐ถ๐ป๐ฎเฟ'
global.me = '๐ฆ๐ต๐ถ๐ป๐ฎ'
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ


//แญฅ๐ฅแญขโโโโโโโ๐ป๐ฌ๐ฟ๐ป๐ถ๐บโโโโโโโแญฅ๐ฅแญข
global.adimagenย?=ย?`๐|ย?Iแดแดฬษขแดษดแดsย?Bสย?๐ฆ๐ต๐ถ๐ป๐ฎ๐ฟ` 
global.adanimeย?=ย?`๐ธ|ย?Aษดษชแดแดย?Bสย?๐ฆ๐ต๐ถ๐ป๐ฎ๐ด` 
global.adyoutubeย?=ย?`๐|ย?Dแดsแดแดสษขแดsย?แดแดย?๐ฆ๐ต๐ถ๐ป๐ฎ๐` 
global.adstickerย?=ย?`๐๏ธ|ย?Sแดษชแดแดแดสsย?Bสย?๐ฆ๐ต๐ถ๐ป๐ฎ๐บ` 
global.addescargasย?=ย?`๐ค|ย?Dแดsแดแดสษขแดsย?Bสย?๐ฆ๐ต๐ถ๐ป๐ฎ๐ธ`
 //โฐโโโโโโโโโโโโโโโโโโโโโโฏ

 
//แญฅ๐แญขโโโโโโโ๐บ๐ป๐ฐ๐ช๐ฒ๐ฌ๐น๐บโโโโโโโแญฅ๐แญข
global.packname = `๐ข โ Owner:\n๐ โ Dรญa:\n๐ โ Hora:\n๐๏ธ โ Fecha:\n๐ฆ๐ต๐ถ๐ป๐ฎ:`
global.author = `๐ฆ๐ต๐ถ๐ป๐ฎ๐\nโธ ${dia}\nโธ ${tiempo}\nโธ ${fecha}\nโธ ${botname}`
//โฐโโโโโโโโโโโโโโโโโโโโโฏ	
	

//แญฅ๐ผแญขโโโโโ๐ด๐บ๐ฎ ๐ซ๐ฌ ๐ฌ๐บ๐ท๐ฌ๐น๐จโโโโโแญฅ๐ผแญข
global.wait = '*_โณCARGANDO...โฑ๏ธ_*'
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ


//แญฅ๐แญขโโโโโโโ๐ฐ๐ด๐จฬ๐ฎ๐ฌ๐ต๐ฌ๐บโโโโโโโแญฅ๐แญข
global.imgmenu = fs.readFileSync('./storage/image/nyanbot.jpg')
global.imgfgif = fs.readFileSync('./storage/image/fgif.jpg')
global.catalogo = fs.readFileSync('./storage/image/catalogo.png')
global.miniurl = fs.readFileSync('./storage/image/nyanmini.jpg')
global.nyanregis = fs.readFileSync('./storage/image/nyanregis.jpg')
global.imginv = fs.readFileSync('./storage/image/inventario.jpg')
global.imgshop = fs.readFileSync('./storage/image/shop.jpg')
global.menugif = fs.readFileSync('./storage/mp4/menu.mp4')
global.adnyancat = fs.readFileSync('./storage/image/adnyancat.png')
global.verificado = fs.readFileSync('./storage/image/verificado.png')
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ


//แญฅ๐ฟแญขโโโโโโโโ๐ณ๐ฐ๐ต๐ฒ๐บโโโโโโโโแญฅ๐ฟแญข
global.linkgc = 'https://chat.whatsapp.com/Gg0Jyqi3zdG18uqu3qCDHE'
global.nycuser = 'https://chat.whatsapp.com/Gg0Jyqi3zdG18uqu3qCDHE'
global.script = 'https://chat.whatsapp.com/Gg0Jyqi3zdG18uqu3qCDHE'
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ



//แญฅ๐บแญขโโโโ๐บ๐ป๐ฐ๐ช๐ฒ๐ฌ๐น ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโโแญฅ๐บแญข
global.faketick = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": catalogo, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" }
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโ๐ช๐ถ๐ต๐ป๐จ๐ช๐ป๐ถ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโแญฅ๐บแญข
global.ownerfk = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=19362556628:global.nyanregis\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโ๐ช๐จ๐ป๐จฬ๐ณ๐ถ๐ฎ๐ถ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโแญฅ๐บแญข
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '๐ฆ๐ต๐ถ๐ป๐ฎ\n๐ฆ๐ต๐ถ๐ป๐ฎ', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโโโ๐ฎ๐ฐ๐ญ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโโโแญฅ๐บแญข
global.fgif = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`๐ฆ๐ต๐ถ๐ป๐ฎ`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `๐ฆ๐ต๐ถ๐ป๐ฎ\n๐ฆ๐ต๐ถ๐ป๐ฎ`, 'jpegThumbnail': imgfgif }}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโโโ๐จ๐ผ๐ซ๐ฐ๐ถ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโโโแญฅ๐บแญข
global.estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "50499698072-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   }}}  
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโ๐ซ๐ถ๐ช๐ผ๐ด๐ฌ๐ต๐ป๐ถ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโแญฅ๐บแญข
global.fdocument = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `๐ฆ๐ต๐ถ๐ป๐ฎเฟ\n๐ฆ๐ต๐ถ๐ป๐ฎ`,jpegThumbnail: catalogo}}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโโ๐ฐ๐ด๐จ๐ฎ๐ฌ๐ต ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐จโโโโแญฅ๐บแญข
global.fakeimg = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"imageMessage": { "title":`๐ฆ๐ต๐ถ๐ป๐ฎ`, "h": `Hmm`,'seconds': '99999', 'imagePlayback': 'true', 'caption': `๐ฆ๐ต๐ถ๐ป๐ฎ\n๐ฆ๐ต๐ถ๐ป๐ฎ`, 'jpegThumbnail': catalogo }}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโโ๐ด๐ฌ๐ต๐บ๐จ๐ฑ๐ฌ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโโแญฅ๐บแญข
global.fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text":'๐ฆ๐ต๐ถ๐ป๐ฎเฟ\n๐ฆ๐ต๐ถ๐ป๐ฎ', "title": '๐ฆ๐ต๐ถ๐ป๐ฎ', 'jpegThumbnail': catalogo}}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโ๐ณ๐ถ๐ช๐จ๐ณ๐ฐ๐๐จ๐ช๐ฐ๐ถฬ๐ต ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐จโโแญฅ๐บแญข
global.flocation = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `๐ฆ๐ต๐ถ๐ป๐ฎเฟ\n๐ฆ๐ต๐ถ๐ป๐ฎ`,jpegThumbnail: catalogo}} }
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโโ๐ฝ๐ฐฬ๐ซ๐ฌ๐ถ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโโแญฅ๐บแญข
global.fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`๐ฆ๐ต๐ถ๐ป๐ฎ`, "h": `Hmm`,'seconds': '2022', 'caption': `๐ฆ๐ต๐ถ๐ป๐ฎ`, 'jpegThumbnail': catalogo}} }
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโโ๐ณ๐ฐ๐ต๐ฒ๐ฎ๐ท ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโโแญฅ๐บแญข
global.fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "Alberto", "caption": `๐ฆ๐ต๐ถ๐ป๐ฎเฟ\n๐ฆ๐ต๐ถ๐ป๐ฎ`, 'jpegThumbnail': catalogo}} }
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโ๐ท๐น๐ถ๐ซ๐ผ๐ช๐ป๐ถ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโแญฅ๐บแญข
global.fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": "๐ฆ๐ต๐ถ๐ป๐ฎเฟ", "description": "SHINA_XD", "currencyCode": "USD", "priceAmount1000": "200000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโโ๐ณ๐ฐ๐ฝ๐ฌ ๐ณ๐ถ๐ช๐จ๐ณ๐ฐ๐๐จ๐ช๐ฐ๐ถฬ๐ตโโโโแญฅ๐บแญข
global.liveloc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false  ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption":"๐ฆ๐ต๐ถ๐ป๐ฎเฟ","h": `๐ฆ๐ต๐ถ๐ป๐ฎเฟ`, 'jpegThumbnail': catalogo}}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโ๐ท๐น๐ถ๐ซ๐ผ๐ช๐ป๐ถ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถ 2โโโแญฅ๐บแญข
global.fproducto2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `๐ฆ๐ต๐ถ๐ป๐ฎเฟ`, "retailerId": "๐ฆ๐ต๐ถ๐ป๐ฎเฟ", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโ๐ฝ๐ฐ๐ฌ๐พ๐ถ๐ต๐ช๐ฌ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถโโโแญฅ๐บแญข
global.fakevo = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { imageMessage: { mimetype: 'image/jpeg', caption: botname, jpegThumbnail: catalogo, viewOnce: true }}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ
//แญฅ๐บแญขโโโ๐ฝ๐ฐ๐ฌ๐พ๐ถ๐ต๐ช๐ฌ ๐ฝ๐ฌ๐น๐ฐ๐ญ๐ฐ๐ช๐จ๐ซ๐ถ #2โโโแญฅ๐บแญข
global.fakevo = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { videoMessage: { mimetype: 'video/mp4', caption: botname, jpegThumbnail: catalogo, viewOnce: true }}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ

//แญฅ๐แญขโโโโโโ๐จ๐ซ ๐ซ๐ฌ ๐ฎ๐น๐ผ๐ท๐ถโโโโโโแญฅ๐แญข
global.adgp = { contextInfo: { externalAdReply: { showAdAttribution: true, title: '๐ฆ๐ต๐ถ๐ป๐ฎเฟ', body: global.botname, sourceUrl: global.linkgc, thumbnail: miniurl }}}
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ

//แญฅ๐แญขโโโโโ๐จ๐ซ ๐ซ๐ฌ ๐ฐ๐ต๐บ๐ป๐จ๐ฎ๐น๐จ๐ดโโโโโแญฅ๐แญข
global.adig = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: "https://Instagram.com/rlxfly.uw", mediaType: "VIDEO", description: "https://Instagram.com/rlxfly.uw",  title: 'Test', body: `hola`, thumbnail: miniurl, sourceUrl: 'http://s.id/0x404' }}}

//แญฅ๐แญขโโโโโ๐จ๐ซ ๐ซ๐ฌ ๐๐ถ๐ผ๐ป๐ผ๐ฉ๐ฌโโโโโแญฅ๐แญข
global.adyt = { contextInfo: { externalAdReply: { showAdAttribution: true, title: botname, mediaType: 2, previewType: "VIDEO", thumbnail: imgmenu, mediaUrl: 'https://chat.whatsapp.com/Gg0Jyqi3zdG18uqu3qCDHE', sourceUrl: linkgc }}} 

//แญฅ๐พแญขโโโโโโโ๐ฒ๐ฌ๐๐บ ๐จ๐ท๐ฐ๐บโโโโโโโแญฅ๐พแญข
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ

//แญฅโแญขโโโโโโ๐ป๐ฐ๐ฌ๐ด๐ท๐ถ ๐น๐ท๐ฎโโโโโโแญฅโแญข
global.stime = function clockString(seconds) {
  var d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  var h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  var m = Math.floor((seconds / (1000 * 60)) % 60);
  var s = Math.floor((seconds / 1000) % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia," : " Dias,") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay ? dDisplay + hDisplay + mDisplay + sDisplay : '0 Segundos'
};
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ

//แญฅโแญขโโโโโโ๐ป๐ฐ๐ฌ๐ด๐ท๐ถ ๐น๐ท๐ฎโโโโโโแญฅโแญข
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'una linda noche ๐'; break; case 1: hour = 'una linda noche ๐ค'; break; case 2: hour = 'una linda noche ๐ฆ'; break; case 3: hour = 'una linda maรฑana โจ'; break; case 4: hour = 'una linda maรฑana ๐ซ'; break; case 5: hour = 'una linda maรฑana ๐'; break; case 6: hour = 'una linda maรฑana ๐'; break; case 7: hour = 'una linda maรฑana ๐'; break; case 8: hour = 'una linda maรฑana ๐ซ'; break; case 9: hour = 'una linda maรฑana โจ'; break; case 10: hour = 'un lindo dia ๐'; break; case 11: hour = 'un lindo dia ๐จ'; break; case 12: hour = 'un lindo dia โ'; break; case 13: hour = 'un lindo dia ๐ค'; break; case 14: hour = 'una linda tarde ๐'; break; case 15: hour = 'una linda tarde ๐ฅ'; break; case 16: hour = 'una linda tarde ๐น'; break; case 17: hour = 'una linda tarde ๐'; break; case 18: hour = 'una linda noche ๐'; break; case 19: hour = 'una linda noche ๐'; break; case 20: hour = 'una linda noche ๐'; break; case 21: hour = 'una linda noche ๐'; break; case 22: hour = 'una linda noche ๐'; break; case 23: hour = 'una linda noche ๐'; break;}
  global.saludo = "Espero que tengas " + hour;
//โฐโโโโโโโโโโโโโโโโโโโโโโฏ

global.multiplier = 9999 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '๐',
      limit: '๐',
      exp: '๐น๏ธ'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
