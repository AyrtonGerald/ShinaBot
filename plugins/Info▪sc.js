let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*Soon*`
let buttonMessage= {
'document': { url: `Soon` },
'mimetype': `application/${document}`,
'fileName': `ê§ð¦ðµð¶ð»ð®âðµððà¿`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': script,
'mediaType': 200,
'previewType': 'pdf',
'title': ``,
'body': global.author,
'thumbnail': global.imgmenu,
'sourceUrl': 'https//wa.me/51936448126' }},
'caption': texto1,
'footer': '\nê§âÂ âÍ¢ÉªÍ¥âÍ«á­á´ÊÉªá´¡ÉªÊá´á´âï¸êª¶Í¢á´á´¡á´',
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'MenÃº ð'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info ð'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.tags =['info']
handler.help = ['script']
handler.command = ['sc', 'script']
handler.register = true
export default handler
