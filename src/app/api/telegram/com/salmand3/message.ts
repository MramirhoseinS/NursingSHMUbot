import { dars, nothingFile, nothingJozve, ostad, subject } from "../../libs/DefaultMessage";
import { list } from "../../libs/list";
import { userStack } from "../../libs/stack";
import { bot } from "../../route";
import { EndReplyMarkup } from "../TotalReplyMarkup";
import {
  AmeriJozves,
  AshrafiJozves,
  BagheriFiles,
  EbrahimiJozves,
  KhatibiJozves,
  NadaliFiles,
} from "./files";
import { Salmand3ReplyMarkup } from "./ReplyMarkup";

export const MessageSalmand3 = async (chatId: any) => {
  const curr = userStack[chatId].slice(-1)[0];

  // first
  if (curr == list.salmandan3.t) {
    await bot.sendMessage(chatId, ostad, {
      reply_markup: Salmand3ReplyMarkup,
    });
  }

  // ebrahimi
  else if (curr === list.salmandan3.osEbrahimi.t) {
    await bot.sendMessage(chatId, subject, {
      reply_markup: EndReplyMarkup,
    });
  } else if (curr === list.salmandan3.osEbrahimi.jozve) {
    for (const jozve of EbrahimiJozves) {
      await bot.sendDocument(chatId, jozve.path);
    }
    userStack[chatId].pop();
  } else if (curr === list.salmandan3.osEbrahimi.file) {
    await bot.sendMessage(chatId, nothingFile);
    userStack[chatId].pop();
  }

  // khatibi
  else if (curr === list.salmandan3.osKhatibi.t) {
    await bot.sendMessage(chatId, subject, {
      reply_markup: EndReplyMarkup,
    });
  } else if (curr === list.salmandan3.osKhatibi.jozve) {
    for (const jozve of KhatibiJozves) {
      await bot.sendDocument(chatId, jozve.path);
    }
    userStack[chatId].pop();
  } else if (curr === list.salmandan3.osKhatibi.file) {
    await bot.sendMessage(chatId, nothingFile);
    userStack[chatId].pop();
  }

  // ameri
  else if (curr === list.salmandan3.osAmeri.t) {
    await bot.sendMessage(chatId, subject, {
      reply_markup: EndReplyMarkup,
    });
  } else if (curr === list.salmandan3.osAmeri.jozve) {
    for (const jozve of AmeriJozves) {
      await bot.sendDocument(chatId, jozve.path, { caption: jozve.caption });
    }
    userStack[chatId].pop();
  } else if (curr === list.salmandan3.osAmeri.file) {
    await bot.sendMessage(chatId, nothingFile);
    userStack[chatId].pop();
  }

  // nadali
  else if (curr === list.salmandan3.osNadali.t) {
    await bot.sendMessage(chatId, subject, {
      reply_markup: EndReplyMarkup,
    });
  } else if (curr === list.salmandan3.osNadali.jozve) {
    await bot.sendMessage(chatId, nothingJozve);
    userStack[chatId].pop();
  } else if (curr === list.salmandan3.osNadali.file) {
    for (const file of NadaliFiles) {
      await bot.sendDocument(chatId, file.path);
    }
    userStack[chatId].pop();
  }

  // bagheri
  else if (curr === list.salmandan3.osBagheri.t) {
    await bot.sendMessage(chatId, subject, {
      reply_markup: EndReplyMarkup,
    });
  } else if (curr === list.salmandan3.osBagheri.jozve) {
    await bot.sendMessage(chatId, nothingJozve);
    userStack[chatId].pop();
  } else if (curr === list.salmandan3.osBagheri.file) {
    for (const file of BagheriFiles) {
      await bot.sendDocument(chatId, file.path);
    }
    userStack[chatId].pop();
  }

  // ashrafi
  else if (curr === list.salmandan3.osAshrafi.t) {
    await bot.sendMessage(chatId, subject, {
      reply_markup: EndReplyMarkup,
    });
  } else if (curr === list.salmandan3.osAshrafi.jozve) {
    for (const jozve of AshrafiJozves) {
      await bot.sendDocument(chatId, jozve.path, { caption: jozve.caption });
    }
    userStack[chatId].pop();
  } else if (curr === list.salmandan3.osAshrafi.file) {
    await bot.sendMessage(chatId, nothingFile);
    userStack[chatId].pop();
  }
};
