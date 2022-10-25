// Подставляет "ёлочки", не внося ошибок в Markdown

import Typograf from 'typograf';

const Rule1 = () => {
  Typograf.addRule({
    name: 'common/other/typographicSmiley',
    handler: function (text) {
      return text.replace(/:-\)/g, ':-D');
    },
  });
  return null;
};

export default Rule1;
