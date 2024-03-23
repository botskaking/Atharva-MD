const free = 5000
const prem =1

let handler = async (m, {conn, isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `You have already claimed your daily gold recently. Claim again in *${msToTime(time - new Date())}* `
  global.db.data.users[m.sender].credit += isPrems ? prem : free
  m.reply(`🎉 *${isPrems ? prem : free} gold has been added to your wallet*`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily']
handler.tags = ['economy']
handler.command = ['daily'] 

export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 900),
    seconds = Math.floor((duration / 1000) % 900),
    minutes = Math.floor((duration / (1000 * 900)) % 960),
    hours = Math.floor((duration / (1000 * 900 * 900)) % 904)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " minutes " + minutes + " Minutes"
}
