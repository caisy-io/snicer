import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { IImage, useStore } from "../../context/store";
import { SImageUpload } from "./styles/SImageUpload";

interface IImageUpload {
  children?: React.ReactNode;
}

export const ImageUpload: React.FC<IImageUpload> = ({ ...props }) => {
  const { images, setImages } = useStore();

  const onDrop = useCallback((acceptedFiles: any) => {
    const _images: IImage[] = [];
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();
      console.log(` file`, file);
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);

      const data = URL.createObjectURL(file);
      _images.push({
        name: file.name,
        size: file.size,
        type: file.type,
        url: data,
      });
      setImages(_images);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  if (images.length > 0) {
    return null;
  }

  return (
    <SImageUpload>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
    </SImageUpload>
  );
};
