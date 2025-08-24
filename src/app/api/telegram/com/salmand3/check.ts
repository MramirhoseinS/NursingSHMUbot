import { list } from "../../libs/list";
import { userStack } from "../../libs/stack";
import { MessageSalmand3 } from "./message";

export const CheckSalamnd3 = (body: any) => {
  const chatId = body.message.chat.id;
  const text = body.message.text;
  const curr = userStack[chatId].slice(-1)[0];

  if (userStack[chatId].length === 0) {
    userStack[chatId].push(list.salmandan3.t);
    MessageSalmand3(chatId);
  }

  // ebrahimi
  else if (text === "دکتر ابراهیمی") {
    userStack[chatId].push(list.salmandan3.osEbrahimi.t);
    MessageSalmand3(chatId);
  } else if (text === "جزوه" && curr === list.salmandan3.osEbrahimi.t) {
    userStack[chatId].push(list.salmandan3.osEbrahimi.jozve);
    MessageSalmand3(chatId);
  } else if (text === "فایل" && curr === list.salmandan3.osEbrahimi.t) {
    userStack[chatId].push(list.salmandan3.osEbrahimi.file);
    MessageSalmand3(chatId);
  }

  // khatibi
  else if (text === "استاد خطیبی") {
    userStack[chatId].push(list.salmandan3.osKhatibi.t);
    MessageSalmand3(chatId);
  } else if (text === "جزوه" && curr === list.salmandan3.osKhatibi.t) {
    userStack[chatId].push(list.salmandan3.osKhatibi.jozve);
    MessageSalmand3(chatId);
  } else if (text === "فایل" && curr === list.salmandan3.osKhatibi.t) {
    userStack[chatId].push(list.salmandan3.osKhatibi.file);
    MessageSalmand3(chatId);
  }

  // ameri
  else if (text === "دکتر عامری") {
    userStack[chatId].push(list.salmandan3.osAmeri.t);
    MessageSalmand3(chatId);
  } else if (text === "جزوه" && curr === list.salmandan3.osAmeri.t) {
    userStack[chatId].push(list.salmandan3.osAmeri.jozve);
    MessageSalmand3(chatId);
  } else if (text === "فایل" && curr === list.salmandan3.osAmeri.t) {
    userStack[chatId].push(list.salmandan3.osAmeri.file);
    MessageSalmand3(chatId);
  }

  // nadali
  else if (text === "استاد نادعلی") {
    userStack[chatId].push(list.salmandan3.osNadali.t);
    MessageSalmand3(chatId);
  } else if (text === "جزوه" && curr === list.salmandan3.osNadali.t) {
    userStack[chatId].push(list.salmandan3.osNadali.jozve);
    MessageSalmand3(chatId);
  } else if (text === "فایل" && curr === list.salmandan3.osNadali.t) {
    userStack[chatId].push(list.salmandan3.osNadali.file);
    MessageSalmand3(chatId);
  }

  // bagheri
  else if (text === "دکتر باقری") {
    userStack[chatId].push(list.salmandan3.osBagheri.t);
    MessageSalmand3(chatId);
  } else if (text === "جزوه" && curr === list.salmandan3.osBagheri.t) {
    userStack[chatId].push(list.salmandan3.osBagheri.jozve);
    MessageSalmand3(chatId);
  } else if (text === "فایل" && curr === list.salmandan3.osBagheri.t) {
    userStack[chatId].push(list.salmandan3.osBagheri.file);
    MessageSalmand3(chatId);
  }

  // ashrafi
  else if (text === "دکتر اشرفی") {
    userStack[chatId].push(list.salmandan3.osAshrafi.t);
    MessageSalmand3(chatId);
  } else if (text === "جزوه" && curr === list.salmandan3.osAshrafi.t) {
    userStack[chatId].push(list.salmandan3.osAshrafi.jozve);
    MessageSalmand3(chatId);
  } else if (text === "فایل" && curr === list.salmandan3.osAshrafi.t) {
    userStack[chatId].push(list.salmandan3.osAshrafi.file);
    MessageSalmand3(chatId);
  }
};
