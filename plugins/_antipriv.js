/*แญฅ๐แญขโโโโโ๐ฆ๐ต๐ถ๐ป๐ฎโ๐ต๐๐เฟโโโโโแญฅ๐แญข
 โโ Created By Soon/CRIWILOP 
 โโ ๐ฆ๐ต๐ถ๐ป๐ฎ
 โฐโโโโโโโโโโโโโโโโโโโโโโฏ*/

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA'))
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner) {
       await m.reply(`Hola *@${m.sender.split`@`[0]}*, estรก prohibido hablar al privado del bot serรกs bloqueado.`, false, { mentions: [m.sender] })
       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}
