const chalk = require("chalk");

module.exports = (client, event, id) => {
    console.log(chalk.redBright(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Bağlantı Kesildi`))
}

// github.com/inorwa,personalitySarac/discord-v14-muzik-botu - discord.gg/codare - youtube.com/inorwa,personalitySarac