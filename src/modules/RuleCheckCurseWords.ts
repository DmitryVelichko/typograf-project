// Проверяет, нет ли в тексте жестких ругательств, заменяет их на звёздочки
import React from 'react';
const replaceDisallowedWords = require('disallowed-word-filter');

// Список стоп-слов можно дополнять (всего их 600, что очень мало), вот еще 2 источника, откуда можно взять стоп-слова:
// https://disk.yandex.ru/d/McrzPrrcj3hd7
// https://www.myadept.ru/index.php/page/spisok-necenzurnyh-slov-dlja-anti-spama-i-cenzury
const myFilter = new replaceDisallowedWords({
  additionalWords: 'ругательство1, ругательство2',
}); // через запятую можно добавить стоп-слова

