import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ฐ๐ป๐ถ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ฐ ๐ฑ๐๐๐ฒ๐ฐ๐*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `โโโโโฌ ๐๐๐๐๐๐๐๐๐๐ โญโโโโพโ
โฌ
โโฃโจ *๐๐ธ๐๐๐ป๐พ:* ${json.result.title}
โด
โฌ
โโฃ๐ *๐๐๐ป ๐ณ๐ธ๐๐ด๐ฒ๐๐พ:* ${shortUrl}\nโด\n\n*- ๐ด๐๐๐๐๐๐๐ ๐๐๐๐๐๐...*\n\n '๐ฆ๐ต๐ถ๐ป๐ฎโ๐ต๐๐เฟ`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { contextInfo: { externalAdReply: { showAdAttribution: false, mediaType: 2, title: `${json.result.title}`, body: global.botname, sourceUrl: `${shortUrl}`, thumbnailUrl: json.result.thumbnail }}})
/*conn.sendMessage(m.chat, { audio: { url: json.result.download }, mimetype: "audio/mp4", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
showAdAttribution: false,
title: `${json.result.title}`,
body: ``,
mediaType: 2, 
sourceUrl: `${shortUrl}`,
thumbnailUrl: json.result.thumbnail}}}, { quoted: m })*/
} catch (e) {
throw '*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฝ๐พ ๐๐ด ๐ป๐พ๐ถ๐๐พ ๐ฑ๐๐๐ฒ๐ฐ๐ ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐พ ๐ป๐ฐ ๐ฟ๐ฐ๐ถ๐ธ๐ฝ๐ฐ ๐ณ๐ด ๐ฐ๐๐๐ณ๐ฐ ๐ฟ๐ฐ๐๐ฐ ๐ฑ๐๐๐ฒ๐ฐ๐ ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ด๐๐๐ฐ ๐ฒ๐ฐ๐ธ๐ณ๐ฐ, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐๐ฝ๐๐ฐ๐๐ป๐พ ๐ผ๐ฐ๐ ๐๐ฐ๐๐ณ๐ด*'
}}
handler.command = /^(spotify|music|soundcloud|cover)$/i
export default handler
