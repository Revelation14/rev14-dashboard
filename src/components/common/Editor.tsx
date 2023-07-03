import parse from 'html-react-parser';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface IDraftEditor {
  viewOnly?: boolean;
  handleEditorChange: (value: string) => void;
  defaultValue?: string;
}

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }, { size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ background: [] }, { color: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'background',
  'header',
  'color',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
];

const DraftEditor: React.FC<IDraftEditor> = ({
  viewOnly,
  handleEditorChange,
  defaultValue = '',
}) => {
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    handleEditorChange(newValue);
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return viewOnly ? (
    <div>{parse(value)}</div>
  ) : (
    <QuillNoSSRWrapper
      modules={modules}
      placeholder="My story is..."
      value={value}
      onChange={handleChange}
      formats={formats}
      theme="snow"
    />
  );
};

export default DraftEditor;
