module.exports.run = (bot, msg, args, database) => {
	if (!args[0]) return;
	database.getGuildData(msg.guild).prefix = args[0];
	msg.channel.send(`Ты изменил префикс для всех команд, дибил блять: '${args[0]}'`);
}