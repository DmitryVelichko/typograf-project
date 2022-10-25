import React, { useState, useEffect } from 'react';
import Typograf from 'typograf';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';

import Header from '../Header';
import ClipboardCopy from '../ClipBoardCopy';
import RuleEmDash from '../../modules/RuleEmDash';
import './App.css';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const { TextArea } = Input;

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
    setIsVisible(false);
  };

  const handleClick = () => {
    setIsVisible(true);
    var tp = new Typograf({ locale: ['ru', 'en-US'] });
    setText(tp.execute(text));
    if (text === '') {
      alert('Введите, пожалуйста, текст! Поле не может быть пустым.');
      setIsVisible(false);
    }
  };

  useEffect(() => {}, [text]);

  // // Типографический смайлик
  // Typograf.addRule({
  //   name: 'common/other/typographicSmiley',
  //   handler: function (text) {
  //     return text.replace(/:-\)/g, ':-D');
  //   },
  // });

  return (
    <div className='App'>
      <RuleEmDash />
      <Header />
      <TextArea
        autoFocus={true}
        showCount
        allowClear={true}
        bordered={true}
        className='input1'
        onChange={onChange}
        placeholder='Скопируйте сюда ваш шедевр мировой литературы'
      />

      <div className='buttonContainer'>
        <Button onClick={handleClick} type='ghost' className='button1'>
          Подготовить текст к публикации
        </Button>
        <ClipboardCopy copyText={text} />
      </div>

      {isVisible && (
        <>
          <TextArea
            readOnly
            autoFocus={true}
            showCount
            allowClear={true}
            bordered={true}
            className='input2'
            value={text}
          />
        </>
      )}

      {isVisible && (
        <>
          <TextArea
            readOnly
            autoFocus={true}
            showCount
            allowClear={true}
            bordered={true}
            className='input2'
            placeholder='Вывод логов'
            value='Поле с ошибками'
          />
        </>
      )}
    </div>
  );
};

export default App;
