import { userIdList } from "../libs/info";
import bot from "../libs/telegram";

export let adminStack = false;

export const AdminSendMassage = async (text: any) => {
  if (!adminStack) {
    adminStack = true;
    await bot.sendMessage(245633649, "پیامتو بفرس");
  } else {
    adminStack = false;
    for (const user of userIdList) {
      await bot.sendMessage(user, text);
    }
    await bot.sendMessage(245633649, "پیام شما به همه کاربران ارسال شد");
  }
};
