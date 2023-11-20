import { Component, ChangeEvent } from "react";
import UploadService from "../services/upload-files.service";

interface UploadFilesState {
  selectedFile: File | undefined;
  currentFile: string | undefined;
  message: string;
  fileInfos: string[];
}

export default class UploadFiles extends Component<{}, UploadFilesState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      selectedFile: undefined,
      currentFile: undefined,
      message: "",
      fileInfos: [],
    };
  }

  selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      this.setState({
        selectedFile: event.target.files[0],
      });
    }
  };

  upload = () => {
    const { selectedFile } = this.state;

    if (selectedFile) {
      UploadService.upload(selectedFile)
        .then((response) => {
          this.setState({
            message: response.data.message,
          });
        })
        .catch(() => {
          this.setState({
            message: "Could not upload the file!",
            currentFile: undefined,
          });
        });

      this.setState({
        selectedFile: undefined,
      });
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button className="btn btn-success" onClick={this.upload}>
          Upload
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>
      </div>
    );
  }
}
