import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw `⚠️ *_Ingrese un texto._*\n📌 _Ejemplo:_ *${usedPrefix + command}* texto|texto`
  m.reply(global.wait)
  let res = `https://ziy.herokuapp.com/api/maker/sadboy?text1=${response[0]}&text2=${response[1]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'neko.jpg', `*Nice... ฅ^•ﻌ•^ฅ⚘*`, m, false)
}
handler.help = ['logosad'].map(v => v + ' *<texto|texto>*')
handler.tags = ['logo']
handler.command = /^(logosad)$/i
handler.limit = false

export default handler