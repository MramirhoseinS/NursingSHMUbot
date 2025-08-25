import { userIdList, userNameList } from "../libs/info";
import { userStack } from "../libs/stack";
import bot from "../libs/telegram";
import { Term5ReplyMarkup } from "./TotalReplyMarkup";

export const Start = async (chatId: any, userName: any) => {
  userStack[chatId] = [];
  const existUser = userIdList.find((id) => id === chatId);
  if (!existUser) {
    userIdList.push(chatId);
    userNameList.push(`@${userName}`);
  }

  await bot.sendMessage(
    chatId,
    `خوش اومدی⛄️
از منویی که برات باز میشه درسی که میخوای رو انتخاب کن

یه سایتی طراحی کردم که سوالایی که برای استاد خطیبی هست به صورت رندم برات میاد تا بتونی راحت تر جواب رو حفظ کنی
برای دسترسی به این سایت از دکمه شیشه ای پایین استفاده کن و یا روی دکمه Open که پایین صفحه هست بزن`,
    {
      disable_web_page_preview: true,
      reply_markup: {
        ...Term5ReplyMarkup,
        inline_keyboard: [[{ text: "Website", url: "https://t.me/NursingShmu_bot/web" }]],
      },
    }
  );
};
