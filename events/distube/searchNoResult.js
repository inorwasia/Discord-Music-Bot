const { EmbedBuilder } = require("discord.js");

module.exports = async (client, query, queue) => {
    const embed = new EmbedBuilder()
        .setColor("#000001")
        .setDescription(`bir sonuç bulanamadı :D ${query}!`)

    queue.textChannel.send({ embeds: [embed] })
}

// github.com/inorwa,personalitySarac/discord-v14-muzik-botu - discord.gg/codare