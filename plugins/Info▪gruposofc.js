let handler = async (m, { conn }) => {
let msg = `
*πHola @${m.sender.split`@`[0]} aquΓ­ tienes los grupos oficiales de NyanCatBot-MD.*

   *_β­ββββ ββ’ 1 β’β_*
  *_βπβ https://chat.whatsapp.com/KrmXxrJRep86c90fizccm7*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 2 β’β_*
  *_βπ±β https://chat.whatsapp.com/DLfw5IBZOUfCWTLME5AvYQ_*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 3 β’β_*
  *_βπβ https://chat.whatsapp.com/Gg0Jyqi3zdG18uqu3qCDHE_*
*_β°βββββββββββββββββ_*
 `
conn.sendPayment(m.chat, '99', msg, m)
}
handler.command = handler.help = ['gruposofc']
handler.tags = ['info']
export default handler
