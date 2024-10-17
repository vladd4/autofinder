import TelegramBot from "node-telegram-bot-api";
import UserService from "../UserService.js";
import SavedSearchService from "../SavedSearchService.js";

class TelegramBotService {
  constructor(token) {
    this.bot = new TelegramBot(token, { polling: true });
    this.chatId = null;
    this.telegram = null;

    this.setCommands();
    this.startListening();
  }

  setCommands() {
    this.bot.setMyCommands([
      { command: "/start", description: "Розпочати" },
      {
        command: "/showsaved",
        description: "Показати всі мої збережені пошуки",
      },
    ]);
  }

  async sendNewCar(car, chatId) {
    const {
      brand,
      model,
      year,
      photo_url,
      type,
      gearbox,
      state,
      fuel,
      price,
      mileage,
      power,
      link,
    } = car;

    const carInfo = `${brand} ${model} (${year})\nТип: ${type}\nСтан: ${state}\nКоробка передач: ${gearbox}\nПаливо: ${fuel}\nПробіг: ${mileage}\nПотужність: ${power}\nЦіна: ${price}$`;

    const caption = `${carInfo}`;
    const keyboard = {
      inline_keyboard: [[{ text: "Перейти на сайт", url: link }]],
    };

    if (photo_url && photo_url.trim() !== "") {
      await this.bot.sendPhoto(chatId, photo_url, {
        caption,
        reply_markup: JSON.stringify(keyboard),
      });
    } else {
      await this.bot.sendMessage(chatId, caption, {
        reply_markup: JSON.stringify(keyboard),
      });
    }
  }

  async sendSaved(saved, chatId) {
    const {
      brand,
      model,
      type,
      gearbox,
      state,
      fuel,
      min_price,
      max_price,
      min_year,
      max_year,
    } = saved;

    const carInfo = `${brand} ${model}\nТип: ${type}\nСтан: ${state}\nКоробка передач: ${gearbox}\nПаливо: ${fuel}\nЦіна: ${min_price}$ - ${max_price}$\nРік: ${min_year} - ${max_year}`;
    const caption = `${carInfo}`;
    const keyboard = {
      inline_keyboard: [
        [{ text: "Редагувати збережене", url: "https://five.com.ua" }],
      ],
    };

    await this.bot.sendMessage(chatId, caption, {
      reply_markup: JSON.stringify(keyboard),
    });
  }

  setChatId(id) {
    this.chatId = id;
  }

  getChatId() {
    return this.chatId;
  }

  setTelegram(id) {
    this.telegram = id;
  }

  getTelegram() {
    return this.telegram;
  }

  startListening() {
    this.bot.on("message", async (msg) => {
      const text = msg.text;
      this.setChatId(msg.chat.id);

      const userResult = await UserService.getUserByTelegram(msg.from.username);
      if (!userResult) {
        return await this.bot.sendMessage(
          this.getChatId(),
          `Схоще ви ще не зареєстровані на сайті або не підключили телеграм!`
        );
      } else {
        this.setTelegram(msg.from.username);
      }

      if (text === "/start") {
        return await this.handleStart(msg);
      } else if (text === "/showsaved") {
        return await this.handleShowSaved();
      } else {
        return await this.bot.sendMessage(
          this.getChatId(),
          `Я тебе не розумію. Спробуй ще раз!`
        );
      }
    });
  }

  async handleStart(msg) {
    const userResult = await UserService.getUserByTelegram(msg.from.username);

    if (!userResult) {
      return await this.bot.sendMessage(
        this.getChatId(),
        `Схоще ви ще не зареєстровані на сайті або не підключили телеграм!`
      );
    } else {
      this.setTelegram(msg.from.username);
      return await this.bot.sendMessage(
        this.getChatId(),
        `Привіт ${msg.from.first_name}!\nТепер всі нові автомобілі за вашими збереженими пошуками будуть автоматично надсилатись сюди!`
      );
    }
  }

  async handleShowSaved() {
    const savedResults = await SavedSearchService.getSavedByUserTelegram(
      this.getTelegram()
    );
    for (const saved of savedResults) {
      await this.sendSaved(saved, this.getChatId());
    }
  }
}

export default new TelegramBotService(process.env.BOT_TOKEN);
