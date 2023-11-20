import http from "../../http-common";

class UploadFilesService {
  upload(file: File | Blob) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/statistics", formData);
  }
}

export default new UploadFilesService();
