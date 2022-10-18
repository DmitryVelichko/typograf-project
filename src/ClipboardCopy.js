import { useState } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './ClipboardCopy.css';

export default function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

