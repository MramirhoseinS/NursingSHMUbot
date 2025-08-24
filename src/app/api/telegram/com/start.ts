import { userIdList, userNameList } from "../libs/info";
import { userStack } from "../libs/stack";
import { bot } from "../route";
import { Term5ReplyMarkup } from "./TotalReplyMarkup";

export const Start = async (chatId: any, userName: any) => {
  userStack[chatId] = [];
  const existUser = userIdList.find((id) => id === chatId);
  if (!existUser) {
    userIdList.push(chatId);
    userNameList.push(`@${userName}`);
  }

  await bot.sendMessage(chatId, "خوش اومدی⛄️", {
    reply_markup: Term5ReplyMarkup,
  });
};
