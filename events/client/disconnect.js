const chalk = require("chalk")

module.exports = client => {
    console.log(chalk.redBright(`[${client.user.username}] || Bağlantı Kesildi  ${new Date()}.`))
}

// github.com/inorwa,personalitySarac/discord-v14-muzik-botu - discord.gg/codare - youtube.com/inorwa,personalitySarac