import { youtubeSearch } from '@bochilteam/scraper'
import fs from 'fs'
import fetch from 'node-fetch' 
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `⚠️ *_Ingresa el título de una canción._*\n\n*_📌 Ejemplo :_* *${usedPrefix + command}* I Wanna play`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '⚠️️ *_Vídeo/Audio no encontrado :(._*'
try {
let { authorName, title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `.yta ${url}`, buttonText: { displayText: 'Aᴜᴅɪᴏ 🎵' }, type: 1 },
{ buttonId: `.ytv ${url}`, buttonText: { displayText: 'Vɪᴅᴇᴏ 🎥' }, type: 1 },
{ buttonId: `.ytgetdl ${url}`, buttonText: { displayText: 'Cᴀʟɪᴅᴀᴅᴇs📁' }, type: 1 }, ]    
let texto1 = `*⊜─⌈🔎 ◜YouTube Play◞ 🔍⌋─⊜*

❏ 📖 *_Autor:_* ${authorName}
❏ 🧾 *_Título:_* ${title}
❏ 💬 *_Publicado:_* ${publishedTime}
❏ ⏳ *_Duración:_* ${durationH}
❏ 📈 *_Vistas:_* ${viewH}
`
let buttonMessage = {
"document": { url: "https://wa.me/51936448126" }, 
"fileName": botname, 
"mimetype": 'application/vnd.ms-excel',
"caption": texto1,
"fileLength": '99999999999999',
"mentions": [m.sender],
"footer": '\n*❏ 🌿 Reproductor de YouTube©*',
"buttons": buttons,
"headerType": 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `${title}`,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": await (await fetch(thumbnail)).buffer(),
"mediaUrl": `${url}`,
"sourceUrl": linkgc }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}catch(e){
m.reply('⚠️ *_Error, porfavor vuelva a intentarlo._*')
console.log(e)}}
handler.help = ['play', 'play2'].map(v => v + ' *<texto>*')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.register = true
export default handler
