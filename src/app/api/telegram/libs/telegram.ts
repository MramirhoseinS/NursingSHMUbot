import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN!;
let bot: TelegramBot;

if (!global._telegramBot) {
  bot = new TelegramBot(token, { webHook: true });
  global._telegramBot = bot;
} else {
  bot = global._telegramBot;
}

export default bot;

declare global {
  // eslint-disable-next-line no-var
  var _telegramBot: TelegramBot | undefined;
}
