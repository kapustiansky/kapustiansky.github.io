const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
	ctx.reply(
		'Отлично! Теперь просто введи нужное слово и я сформирую тебе набор хештегов 😉'
	)
);
bot.help((ctx) =>
	ctx.reply(`
- Вводи слово без "#" .
- Можешь использовать любой язык ввода (и даже эмоджи).
- Что бы выделить текст, нажми/зажми поле самого сообщения или рядом с ним.
- Что бы перезапустить бота нажми /start .

Если остались вопросы, напиши разработчику @oleg_kapustianky`)
);
bot.command('/about', (ctx) =>
	ctx.reply(`
🤖Бот - #хештег генератор.
Основан на выборке 30 самых популярных запросов Инстаграм.
Uses Instagram API.

Разработчик: @oleg_kapustianky
Сайт: https://kapustiansky.tk/`)
);
bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.on('text', async (ctx) => {
	try {
		const hashtagData = await fetchFun(ctx.message.text);
		return await ctx.reply(hashtagData);
	} catch (e) {
		ctx.reply('Упс, что-то пошло не так 🤔. Используй команду /help');
	}
});

bot.launch();

async function fetchFun(item) {
	try {
		const res = await fetch(
			`https://www.instagram.com/web/search/topsearch/?context=blended&count=10&query=%23${encodeURIComponent(
				item
			)}&rank_token=5&include_reel=true`
		);
		const data = await res.json();
		const hashtag = await data.hashtags.map((hash) => ({
			tag: hash.hashtag.name,
			posts: hash.hashtag.search_result_subtitle,
			count: hash.hashtag.media_count,
		}));

		const hashtags = hashtag
			.slice(0, 30)
			.map((tag) => '#' + tag.tag + ' ')
			.toString()
			.replace(/,/g, '');

		return hashtags;
	} catch (err) {
		console.log('Error!', err);
	}
}
