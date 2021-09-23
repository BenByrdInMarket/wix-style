import {Button, FileUpload} from "wix-style-react";
import type {VFC} from "react";

const FileUploadExample:VFC = () => (
  <>
    <FileUpload accept=".jpeg,.gif,.png" onChange={() => null}>
      {({ openFileUploadDialog }) => (
        <Button
          onClick={openFileUploadDialog}
        >
          Upload Image
        </Button>
      )}
    </FileUpload>
    <FileUpload accept=".doc,.pdf" onChange={() => null}>
      {({ openFileUploadDialog }) => (
        <Button
          onClick={openFileUploadDialog}
        >
          Upload Document
        </Button>
      )}
    </FileUpload>
    <FileUpload multiple onChange={() => null}>
      {({ openFileUploadDialog }) => (
        <Button onClick={openFileUploadDialog}>
          Upload Files
        </Button>
      )}
    </FileUpload>
  </>
)

export default FileUploadExample