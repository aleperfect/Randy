let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `* ·──── ♡ ────·:* ${pesan}`
let teks = `〔 𝐠𝐥𝐨𝐛𝐚𝐥𝐭𝐞𝐚𝐦.𝐟𝐟 〕
*‼️ 𝐆𝐋𝐎𝐁𝐀𝐋 𝐓𝐄𝐀𝐌 ‼️ *\n\n🟩 ${oi}\n\n🟩 *𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨:*\n`
for (let mem of participants) {
teks += `🐥⇢ @${mem.id.split('@')[0]}\n`}
teks += `Ig: @globalteam.mixto`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
