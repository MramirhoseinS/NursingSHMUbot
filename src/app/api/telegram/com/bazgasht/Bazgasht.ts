import { list } from "../../libs/list";
import { userStack } from "../../libs/stack";
import { MessageKoodakBimar } from "../koodakBimar/message";
import { MessageSalmand3 } from "../salmand3/message";
import { Second } from "../second";

export const Bazgasht = (chatId: any) => {
  userStack[chatId] && userStack[chatId].pop();
  switch (userStack[chatId][0]) {
    case list.salmandan3.t:
      MessageSalmand3(chatId);
      break;

    case list.KoodakBimar.t:
      MessageKoodakBimar(chatId);
      break;

    default:
      Second(chatId);
      break;
  }
};
