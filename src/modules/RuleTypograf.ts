// Модуль подставляет кавычки "ёлочки", меняет тире, помогает автоматически расставить неразрывные пробелы, исправить мелкие опечатки (замена латинских букв на русские, правка опечаток, возникающих при переключении клавиатурной раскладки) и многое другое. 

import Typograf from 'typograf';

const RuleTypograf = (text: string) => {
  let tp = new Typograf({ locale: ['ru', 'en-US'] });
  return tp;
};

export default RuleTypograf;
