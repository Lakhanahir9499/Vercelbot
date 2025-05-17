const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply("Hello from Vercel Telegram Bot!");
});

module.exports = async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send("ok");
  } catch (err) {
    console.error("Error handling update:", err);
    res.status(500).send("error");
  }
};