import React, { useState } from "react";
import { FiTrash2, FiSend, FiSearch } from "react-icons/fi";
import { FileItem } from "../../../services/types";

export const Main: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [fileIdCounter, setFileIdCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFileSelect = (selectedFiles: File[]) => {
    setFiles((prevFiles) => [
      ...prevFiles,
      ...selectedFiles.map((file) => ({
        id: fileIdCounter + prevFiles.length,
        file,
      })),
    ]);
    setFileIdCounter((prevId) => prevId + selectedFiles.length);
  };

  const handleRemoveFile = (id: number) => {
    console.log(files);
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  const handleSendFiles = () => {
    alert(`Отправлено ${files.length} файлов!`);
  };

  const filteredFiles = files.filter((file) =>
    file.file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenFileDialog = () => {
    document.getElementById("upload-input")?.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Загрузить PDF файлы
        </h2>

        {files.length === 0 ? (
          <button
            onClick={handleOpenFileDialog}
            className="flex items-center justify-center w-full py-2 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Выбрать файлы
          </button>
        ) : (
          <>
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Поиск файлов..."
                className="w-full px-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="absolute right-3 top-3 text-gray-500" />
            </div>

            <ul className="mt-6 space-y-4">
              {filteredFiles.map(({ id, file }) => (
                <li
                  key={id}
                  className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg"
                >
                  <span className="text-gray-700 truncate max-w-[80%]">
                    {file.name}
                  </span>
                  <button
                    onClick={() => handleRemoveFile(id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 />
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={handleSendFiles}
              className="mt-6 w-full py-2 flex items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400"
              disabled={files.length === 0}
            >
              <FiSend className="mr-2" />
              Отправить файлы
            </button>
          </>
        )}

        <input
          id="upload-input"
          accept="application/pdf"
          type="file"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files) {
              handleFileSelect(Array.from(e.target.files));
            }
          }}
        />
      </div>
    </div>
  );
};
