import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName(m.sender)
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, adanime, null, script, m)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'â Error!'
    conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, json.url, [['ãð SÉªÉ¢á´Éªá´É´á´á´ ðã', `${usedPrefix + command }`]], fakemsg, { mentions: [who] })
}
handler.help = ['waifu']
handler.tags = ['nime']
handler.command = ['waifu'] 
handler.register = true
handler.limit = false



export default handler