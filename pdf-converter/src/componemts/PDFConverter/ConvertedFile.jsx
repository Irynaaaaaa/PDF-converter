import React from 'react';

const ConvertedFile = ({ fileName, isActive, onClick, onDelete }) => {
  return (
    <li
      onClick={onClick}
      className={`flex flex-row justify-between gap-5 rounded-lg p-3 cursor-pointer ${isActive ? 'bg-blue-400/50' : 'bg-blue-200/50'} hover:bg-blue-800/20`}
    >
      <span title="view file">{fileName}</span>
      <button title="delete" onClick={onDelete}>
        X
      </button>
    </li>
  );
};

export default ConvertedFile;
