import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) throw `โ ๏ธ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ฝ๐๐ ๐ฟ๐ ๐๐ ๐๐๐๐๐๐๐๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐๐ฝ\n\n๐ Ejemplo: ${usedPrefix + command} DORRAT-BOT-MD`
let res = await fetch(global.API('https://api.github.com', '/search/repositories', { q: text }))
let json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
โข ๐ฆ Resultado: ${1 + index}
โข ๐ Link: ${repo.html_url}
โข ๐ Creador: ${repo.owner.login}
โข ๐ Nombre: ${repo.name}
โข ๐ Creado: ${formatDate(repo.created_at)}
โข โฑ๏ธ Actualizado: ${formatDate(repo.updated_at)}
โข ๐ Visitas: ${repo.watchers}
โข โ๏ธ Bifurcado: ${repo.forks}
โข โญ Estrellas: ${repo.stargazers_count}
โข ๐ญ Issues: ${repo.open_issues}
โข ๐ Descripciรณn: ${repo.description ? `${repo.description}` : 'Sin Descripciรณn'}
โข ๐ฅ Clone: ${repo.clone_url}
`.trim()}).join('\n\nโโโโโโโโโโโโโโโโโ\n\n')
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
let buttonMessage= {
'document': { url: `Soon` },
'mimetype': `application/${document}`,
'fileName': `๊ง๐ฆ๐ต๐ถ๐ป๐ฎโ๐ต๐๐เฟ`, 
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'Soon',
'mediaType': 2,
'previewType': 'pdf',
'title': `โข Resultados Encontrados๐`,
'body': global.author,
'thumbnail': await (await fetch(json.items[0].owner.avatar_url)).buffer(),
'sourceUrl': 'https//wa.me/51936448126'}},
'caption': str,
'footer': `โข ๐๐ธ ๐ณ๐ด๐๐ด๐ฐ ๐ณ๐ด๐๐ฒ๐ฐ๐๐ถ๐ฐ๐ ๐๐ฝ\n*๐๐ด๐ฟ๐พ๐๐ธ๐๐พ๐๐ธ๐พ ๐ณ๐ด ๐ถ๐ธ๐๐ท๐๐ฑ*\n*๐ด๐๐ฒ๐๐ธ๐ฑ๐ฐ ${usedPrefix}gitclone <LINK>*`,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'Menรบ ๐ค'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info ๐ฆ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
    m.reply('โ ๏ธ *_๐๐๐๐๐๐๐ผ๐ฟ๐๐ ๐๐ ๐๐๐พ๐๐๐๐๐ผ๐ฟ๐๐_*')
  }
}
handler.help = ['githubsearch'].map(v => v + '')
handler.tags = ['search']

handler.command = /^(githubsearch)$/i
handler.register = true

export default handler 

function formatDate(n, locale = 'es') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
