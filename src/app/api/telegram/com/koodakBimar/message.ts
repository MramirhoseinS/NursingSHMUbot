import { nothingJozve, ostad, subject } from "../../libs/DefaultMessage";
import { list } from "../../libs/list";
import { userStack } from "../../libs/stack";
import bot from "../../libs/telegram";
import { EndReplyMarkup } from "../TotalReplyMarkup";
import { KhajeFiles, PariabFiles } from "./files";
import { KoodakBimarReplyMarkup } from "./ReplyMarkup";

export const MessageKoodakBimar = async (chatId: any) => {
  const curr = userStack[chatId].slice(-1)[0];

  // first
  if (curr == list.KoodakBimar.t) {
    await bot.sendMessage(chatId, ostad, {
      reply_markup: KoodakBimarReplyMarkup,
    });
  }

  // khaje
  else if (curr === list.KoodakBimar.osKhaje.t) {
    await bot.sendMessage(chatId, subject, {
      reply_markup: EndReplyMarkup,
    });
  } else if (curr === list.KoodakBimar.osKhaje.jozve) {
    await bot.sendMessage(chatId, nothingJozve);
    userStack[chatId].pop();
  } else if (curr === list.KoodakBimar.osKhaje.file) {
    for (const file of KhajeFiles) {
      await bot.sendDocument(chatId, file.path);
    }
    userStack[chatId].pop();
  }

  // pariab
  else if (curr === list.KoodakBimar.osPariab.t) {
    await bot.sendMessage(chatId, subject, {
      reply_markup: EndReplyMarkup,
    });
  } else if (curr === list.KoodakBimar.osPariab.jozve) {
    await bot.sendMessage(chatId, nothingJozve);
    userStack[chatId].pop();
  } else if (curr === list.KoodakBimar.osPariab.file) {
    await bot.sendMessage(chatId, "تمامی فایل های زیر برای امتحان مطالعه شود");
    for (const file of PariabFiles) {
      await bot.sendDocument(chatId, file.path);
    }
    userStack[chatId].pop();
  }
};
