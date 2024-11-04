export interface FileItem {
  id: number;
  file: File;
}

export interface UploadButtonProps {
  onFileSelect: (files: File[]) => void;
}
