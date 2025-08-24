import { list } from "../../libs/list";
import { userStack } from "../../libs/stack";
import { MessageKoodakBimar } from "./message";

export const CheckKoodakBimar = (body: any) => {
  const chatId = body.message.chat.id;
  const text = body.message.text;
  const curr = userStack[chatId].slice(-1)[0];

  if (userStack[chatId].length === 0) {
    userStack[chatId].push(list.KoodakBimar.t);
    MessageKoodakBimar(chatId);
  }

  // khaje
  else if (text === "دکتر خواجه") {
    userStack[chatId].push(list.KoodakBimar.osKhaje.t);
    MessageKoodakBimar(chatId);
  } else if (text === "جزوه" && curr === list.KoodakBimar.osKhaje.t) {
    userStack[chatId].push(list.KoodakBimar.osKhaje.jozve);
    MessageKoodakBimar(chatId);
  } else if (text === "فایل" && curr === list.KoodakBimar.osKhaje.t) {
    userStack[chatId].push(list.KoodakBimar.osKhaje.file);
    MessageKoodakBimar(chatId);
  }

  // pariab
  else if (text === "استاد پاریاب") {
    userStack[chatId].push(list.KoodakBimar.osPariab.t);
    MessageKoodakBimar(chatId);
  } else if (text === "جزوه" && curr === list.KoodakBimar.osPariab.t) {
    userStack[chatId].push(list.KoodakBimar.osPariab.jozve);
    MessageKoodakBimar(chatId);
  } else if (text === "فایل" && curr === list.KoodakBimar.osPariab.t) {
    userStack[chatId].push(list.KoodakBimar.osPariab.file);
    MessageKoodakBimar(chatId);
  }
};
