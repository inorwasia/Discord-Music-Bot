const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue) => {
    const embed = new EmbedBuilder()
        .setDescription(`\`📛\` | **Şarkı sonlandırılmıştır**`)
        .setColor('#000001')

    queue.textChannel.send({ embeds: [embed] })
}

// github.com/inorwa,personalitySarac/discord-v14-muzik-botu - discord.gg/codare - youtube.com/inorwa,personalitySarac