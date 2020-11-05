module.exports.run = (bot, msg, args, database) => {
    msg.channel.send(`Твой XP, придурок: ${(database.getAccount(msg.member)).xp}! Нахуй тебе вообще эта информация?`);
}