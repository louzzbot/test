
const TelegramBot = require('node-telegram-bot-api');
const token = '5169043817:AAEiKTo0pupUHG2Pa-AqK7r-RqXnjec1p3I';
const bot = new TelegramBot(token, {polling: true});

export default function handler(req, res) {
    bot.sendMessage('5022078554', req.body.msg);
    bot.sendMessage('1127379850', req.body.msg);
    res.status(200).json({ name: req.body.msg })
}