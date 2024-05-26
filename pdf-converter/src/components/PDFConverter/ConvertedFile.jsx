import React from 'react';

const ConvertedFile = ({ fileName, isActive, onClick, onDelete }) => {
  return (
    <li
      title="view file"
      onClick={onClick}
      className={`flex flex-row justify-between gap-3 rounded-sm p-3 cursor-pointer ${isActive ? 'bg-blue' : 'bg-blue-light'} hover:bg-blue-dark`}
      data-testid={`file-${fileName}`}
    >
      <span>{fileName}</span>
      <button
        title="delete"
        data-testid={`delete-${fileName}`}
        onClick={onDelete}
        className="hover:text-white"
      >
        X
      </button>
    </li>
  );
};

export default ConvertedFile;
