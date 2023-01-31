let handler = async (m, { conn }) => {
let msg = `
*👋Hola @${m.sender.split`@`[0]} aquí tienes los grupos oficiales de NyanCatBot-MD.*

   *_╭━━━⊜ ⌊• 1 •⌉_*
  *_┃🎋❏ https://chat.whatsapp.com/KrmXxrJRep86c90fizccm7*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 2 •⌉_*
  *_┃🌱❏ https://chat.whatsapp.com/DLfw5IBZOUfCWTLME5AvYQ_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 3 •⌉_*
  *_┃🎋❏ https://chat.whatsapp.com/Gg0Jyqi3zdG18uqu3qCDHE_*
*_╰━━━━━━━━━━━━━━━━⊜_*
 `
conn.sendPayment(m.chat, '99', msg, m)
}
handler.command = handler.help = ['gruposofc']
handler.tags = ['info']
export default handler
