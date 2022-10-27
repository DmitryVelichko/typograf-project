// Модуль подставляет кавычки "ёлочки", меняет тире, помогает автоматически расставить неразрывные пробелы, исправить мелкие опечатки (замена латинских букв на русские, правка опечаток, возникающих при переключении клавиатурной раскладки) и многое другое. 

import Typograf from 'typograf';

const ruleTypograf = (text: string) => {
  let tp = new Typograf({ locale: ['ru', 'en-US'] });
  let result = tp.execute(text)
  return result;
};

export default ruleTypograf;
