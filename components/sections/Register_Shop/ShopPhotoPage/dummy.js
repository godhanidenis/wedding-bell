/*

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@environments';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  uri = environment.graphqlEndPoint;

  constructor(private http: HttpClient) {}

  uploadFile = (item: any) => {
    const operations = {
      query: `
      mutation uploadImage($file: Upload!) {
        upload(file: $file) {
          id
          url
          name
        }
      }
      `,
      variables: {
        file: null,
      },
    };

    const _map = {
      file: ['variables.file'],
    };

    const file = item.file;
    const fd = new FormData();
    fd.append('operations', JSON.stringify(operations));
    fd.append('map', JSON.stringify(_map));
    fd.append('file', file, file.name);

    return this.http.post(this.uri, fd);
  };
}*/
