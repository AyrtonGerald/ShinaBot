let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let user = global.db.data.users[m.sender]
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
/*var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*-Solo asuntos importantes-*`
let buttonMessage= {
'document': { url: `Soon` },
'mimetype': `application/${document}`,
'fileName': `๐ฆ๐ต๐ถ๐ป๐ฎโ๐ต๐๐เฟ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'Soon',
'mediaType': 2,
'previewType': 'pdf',
'title': botname,
'body': `๐ฆ๐ต๐ถ๐ป๐ฎ`,
'thumbnail': global.imgmenu,
'sourceUrl': 'https://wa.me/51936448126' }},
'mentions': [m.sender],
'caption': texto1,
'footer': `\n${global.saludo}`,
'buttons':[
{buttonId: `${usedPrefix}owner`, buttonText: {displayText: 'Owner๐ข'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ฤซ.am/๐ฆ๐ต๐ถ๐ป๐ฎ/แฆแด;;;\nFN:ฤซ.am/๐ฆ๐ต๐ถ๐ป๐ฎ/แฆแด\nORG:ฤซ.am/๐ฆ๐ต๐ถ๐ป๐ฎ/แฆแด\nTITLE:\nitem1.TEL;waid=50499698072:+50499698072\nitem1.X-ABLabel:ฤซ.am/๐ฆ๐ต๐ถ๐ป๐ฎ/แฆแด\nX-WA-BIZ-DESCRIPTION:๐Creador oficial de ๐ฆ๐ต๐ถ๐ป๐ฎโ๐ต๐๐เฟ.\nX-WA-BIZ-NAME:ฤซ.am/๐ฆ๐ต๐ถ๐ป๐ฎ/แฆแด\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ฤซ.am/๐ฆ๐ต๐ถ๐ป๐ฎ/แฆแด', contacts: [{ vcard }] }}, {quoted: m})
}
handler.tags =['info']
handler.help = ['script']
handler.customPrefix = /^(@50499698072)$/i
handler.command = new RegExp
export default handler
