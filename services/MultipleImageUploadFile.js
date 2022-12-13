import axios from "axios";
import FormData from "form-data";
import appConfig from "../config";

export const MultipleImageUploadFile = async (data) => {
  var formData = new FormData();
  formData.append(
    "operations",
    `{ "query": "mutation multipleUpload($file: Upload!, $fileType: String) {multipleUpload(file: [$file], fileType: $fileType)}", "variables": { "file": [${new Array(
      data.length
    ).fill("null")}], "fileType": "image" } }`
  );
  if (data.length > 0) {
    const map = {};
    data.forEach((file, i) => {
      map[i] = [`variables.file.${i}`];
    });
    formData.append("map", JSON.stringify(map));
    data.forEach((file, i) => {
      formData.append(`${i}`, file);
    });
  }
  return await axios.post(`${appConfig.appUrl}`, formData, {});
};
