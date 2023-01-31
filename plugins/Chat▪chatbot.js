//▪CÓDIGO BY ALBERTO9883 PRROS XD▪
//▪NyanCatBot - MD▪

import MessageType from '@adiwajshing/baileys'
import util from 'util'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

let handler = m => m

handler.before = async function (m, { conn, command, MessageType, text, usedPrefix }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[who]
let fkowner = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}

if ((m.isBaileys && m.fromMe) || m.fromMe ) return true
if (chat.chatbot) {
//━━━━━━━━◜🌾Textos🌾◞━━━━━━━━
let texto1A = /hola/i
let texto1B = texto1A.exec(m.text)

let texto2A = /.menu|.menú|. menú|. menú|. Menú|. Menu/i
let texto2B = texto2A.exec(m.text)

let texto3A = /.audios|.audio|.Audio|. Audio|. audios|. Audios/i
let texto3B = texto2A.exec(m.text)
//━━━━━━━━━━━━━━━━━━━━━━━


//━━━━━━━◜🍁Respuestas🍁◞━━━━━━━
if (texto1B) {
await conn.sendPresenceUpdate('composing', m.chat)
        conn.reply(m.chat, `Hola @${who.split("@s.whatsapp.net")[0]} soy ꧁𝗦𝗵𝗶𝗻𝗮⚔𝐵𝑂𝑇࿐ *_BIENVENID@_*`, fkowner, { mentions: [who]})
        }
       
if (texto2B) {
await conn.sendPresenceUpdate('composing', m.chat)
        conn.reply(m.chat, `*_Hola @${who.split("@s.whatsapp.net")[0]} el menu esta cargando... porfavor espera_*`, fkowner, { mentions: [who]})
        }

if (texto3B) {
await conn.sendPresenceUpdate('composing', m.chat)
        conn.reply(m.chat, `*_@${who.split("@s.whatsapp.net")[0]}_*`, fkowner, { mentions: [who]})
┏━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┗━━━━━━━━━━━━━

⍣ 🔥 _Quien es tu sempai botsito 7w7_
⍣ 🔥 _Te diagnostico con gay_
⍣ 🔥 _A nadie le importa_
⍣ 🔥 _Fiesta del admin_
⍣ 🔥 _Fiesta del administrador_ 
⍣ 🔥 _Vivan los novios_
⍣ 🔥 _Feliz cumpleaños_
⍣ 🔥 _Noche de paz_
⍣ 🔥 _Buenos dias_
⍣ 🔥 _Buenos tardes_
⍣ 🔥 _Buenos noches_
⍣ 🔥 _Audio hentai_
⍣ 🔥 _Chica lgante_
⍣ 🔥 _Feliz navidad_
⍣ 🔥 _Vete a la vrg_
⍣ 🔥 _Pasa pack Bot_
⍣ 🔥 _Atencion grupo_
⍣ 🔥 _Marica quien_
⍣ 🔥 _Murio el grupo_
⍣ 🔥 _Oh me vengo_
⍣ 🔥 _tio que rico_
⍣ 🔥 _Viernes_
⍣ 🔥 _Baneado_
⍣ 🔥 _Sexo_
⍣ 🔥 _Hola_
⍣ 🔥 _Un pato_
⍣ 🔥 _Nyanpasu_
⍣ 🔥 _Te amo_
⍣ 🔥 _Yamete_
⍣ 🔥 _Bañate_
⍣ 🔥 _Es puto_
⍣ 🔥 _La biblia_
⍣ 🔥 _Onichan_
⍣ 🔥 _Mierda de Bot_
⍣ 🔥 _Siuuu_
⍣ 🔥 _Epico_
⍣ 🔥 _Shitpost_
⍣ 🔥 _Rawr_
⍣ 🔥 _UwU_
⍣ 🔥 _:c_
⍣ 🔥 _a_
┗━━━━━━━━━━━━━━━━━━━┛
        }
//━━━━━━━━━━━━━━━━━━━━━━━
}
return !0

}

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
