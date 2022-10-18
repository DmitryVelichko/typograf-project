import { useState } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './ClipboardCopy.css';

export default function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);
