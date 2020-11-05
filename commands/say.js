module.exports.run = (bot, mess) => {
    mess.channel.send('Монета подбрасывается...')

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const num = random(0,100)
    if (num > 50) { 
        mess.channel.send(':full_moon: Орёл!')
    } else if (num == 0) { 
        mess.channel.send(':last_quarter_moon: Монета упала ребром!')
    } else { // Если вычислено число 3, то монета падает ребром.
        mess.channel.send(':new_moon: Решка!')
    } 
}