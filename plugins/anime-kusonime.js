import fetch from 'node-fetch'
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Ingin Cari Apa_'
    await m.reply(global.wait)
  let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/kuso?q=' + encodeURIComponent(text))
let json= await res.json()
  const raku =  `š *Judul :* "${json.title}"\n\nš *info:* ${json.info}\n\nš *Sinopsis :* ${json.sinopsis}\n\nš *Link Downloads:* ${json.link_dl}`
     conn.sendFile(m.chat,json.thumb, 'image.jpg', raku, m)
}
handler.help = ['kusonime (judul)']
handler.tags = ['anime']
handler.command = /^kusonime$/i
handler.limit = true
export default handler
