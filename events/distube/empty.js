const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue) => {
    const embed = new EmbedBuilder()
    .setColor('#000001')
    .setDescription(`**Kanal boş!**`)

    queue.textChannel.send({ embeds: [embed] })
}

// github.com/inorwa,personalitySarac/discord-v14-muzik-botu - discord.gg/codare - youtube.com/inorwa,personalitySarac