
import Typograf from 'typograf';

const Rule1 = () => {
  Typograf.addRule({
    name: 'common/other/typographicSmiley',
    handler: function (text) {
      return text.replace(/:-\)/g, ':-D');
    },
  });
  return undefined;
};

export default Rule1;
