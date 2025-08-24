import { dars } from "../libs/DefaultMessage";
import { userStack } from "../libs/stack";
import { bot } from "../route";
import { Term5ReplyMarkup } from "./TotalReplyMarkup";

export const Second = async (chatId: any) => {
  userStack[chatId] = [];

  await bot.sendMessage(chatId, dars, {
    reply_markup: Term5ReplyMarkup,
  });
};
