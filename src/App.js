import { Input } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import Typograf from 'typograf';
import { Typography } from 'antd';
import Header from './Header';
import { CopyOutlined } from '@ant-design/icons';
import ClipboardCopy from './ClipboardCopy'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const { TextArea } = Input;
  const { Text } = Typography;

  const onChange = (e) => {
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

  const copyToClipboard = (e) => {
    let text = document.getElementsByClassName('input1');
    text[0].select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
    alert('!!!!');
  };

  useEffect(() => {}, [text]);

  useEffect(() => {}, [copySuccess]);

  return (
    <div className='App'>
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

      <Button onClick={handleClick} type='primary' className='button1'>
        Подготовить текст к публикации
      </Button>
      <ClipboardCopy copyText={text} />

      {isVisible && (
        <div className='container2'>
          <TextArea
            readOnly
            autoFocus={true}
            showCount
            allowClear={true}
            bordered={true}
            className='input2'
            placeholder='Скопируйте сюда ваш шедевр мировой литературы'
            value={text}
          />
          {copySuccess && <span>{copySuccess}</span>}

          
        </div>
      )}
    </div>
  );
}

export default App;
