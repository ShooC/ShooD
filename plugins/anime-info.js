import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Judul Anime Yang Ingin Kamu Cari !*`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))

if (!res.ok) throw 'Tidak Ditemukan'
let json = await res.json()

	let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw 'Tidak di temukan'
let html = await res2.text()
let animeingfo = `ð¦ Judul: ${title}
ð á´á´Éªsá´á´á´: ${episodes}
âï¸ Transmisi: ${type}

ð Rating: ${rated}
ð§® Skor: ${score}
ð¥ Member: ${members}
ð¬ Sinopsis: ${synopsis}
`
conn.sendHydrated(m.chat, `*${htki} Anime Info ${htka}*`, animeingfo, image_url, url, 'ð Ê Éª É´ á´', null, null, [[null,null],[null,null],[null,null]], m)

}
handler.help = ['animeinfo <anime>']
handler.tags = ['anime']
handler.command = /^(animeinfo)$/i

export default handler
