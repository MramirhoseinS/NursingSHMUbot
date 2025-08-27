import { NextRequest } from "next/server";
import { list } from "./libs/list";
import { usage, userStack } from "./libs/stack";
import { CheckSalamnd3 } from "./com/salmand3/check";
import { Start } from "./com/start";
import { Bazgasht } from "./com/bazgasht/Bazgasht";
import { CheckKoodakBimar } from "./com/koodakBimar/check";
import { AdminSendMassage, adminStack } from "./admin/sendMassage";
import { userIdList } from "./libs/info";
import bot from "./libs/telegram";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body || !body.message || !body.message.text) {
      return new Response("Invalid request", { status: 200 });
    }
    const chatId = body.message.chat.id;
    const text = body.message.text;
    const userName = body.message.from.username;
    // const messageId = body.message.message_id;
    // const userId = body.message.from.id;
    // const replyText = body.message.reply_to_message.text;
    // const replyMessageId = body.message.reply_to_message.message_id;
    // const replyFromId = body.message.reply_to_message.from.id;
    // const replyFirstName = body.message.reply_to_message.from.first_name;

    usage[`@${userName}`] = (usage[`@${userName}`] || 0) + 1;

    if ((text === "/send" && chatId == 245633649) || adminStack) {
      AdminSendMassage(text);
    }
    if (text === "/userid" && chatId == 245633649) {
      await bot.sendMessage(245633649, JSON.stringify(userIdList));
      await bot.sendMessage(245633649, JSON.stringify(userStack));
    }
    if (text === "/usage" && chatId == 245633649) {
      await bot.sendMessage(245633649, JSON.stringify(usage));
    }

    if (text === "/start" || !userStack[chatId]) {
      Start(chatId, userName);
    } else if (text === "بازگشت") {
      Bazgasht(chatId);
    } else if (text === "بزرگسالان و سالمندان ۳" || userStack[chatId][0] === list.salmandan3.t) {
      CheckSalamnd3(body);
    } else if (text === "کودک بیمار" || userStack[chatId][0] === list.KoodakBimar.t) {
      CheckKoodakBimar(body);
    }

    return new Response("OK");
  } catch (error) {
    return new Response("Error", { status: 200 });
  }
}
