let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw '⚠ *_️Ingrese el error ue desea reportar._*'
    if (text.length < 10) throw '⚠️ *_Especifique bien el error, mínimo 10 caracteres._*'
    if (text.length > 1000) throw '⚠️ *_Máximo 1000 caracteres para enviar el error._*'
    let teks = `*[ REPORTE ]*\n\n*• Usuario:* @${m.sender.split`@`[0]}\n*• Texto:* ${text}`
    await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
    m.reply('⚠️ *_😎el reporte se envió a mi creador🎉, recuerda que los reportes son enviados en caso de alguna falla grave❗, si reportas algo sin sentido o lo haces sin haber algún fallo, serás baneado y bloqueado ☣️ , GRACIAS🌟._*')
}
handler.help = ['reportar']
handler.tags = ['info']
handler.command = /^(report|reportar|bug|error)$/i

export default handler
