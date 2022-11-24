// JANGAN TERLALU TOLOL ANAK MUDA

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Hello kak ${ye} Lagi Nyari Sc Ya? 

💌 CARI AJA DIBAWAH INI

📮 WHATSAPP :
https://wa.me/6285786510891

📮 GITHUB :
github.com/DhanzzEMDI/forynfour-MDV1

📮 JANGAN LUPA MAMPIR :
https://chat.whatsapp.com/GGJin22IEN39S8wxrqOFC6

await conn.sendBut(m.chat, esce, '📮 DONT FORGET TO FOLLOW MY ACCOUNT', 'Thanks', '.menu', m) 
}
handler.help = ['sc', 'source code']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
