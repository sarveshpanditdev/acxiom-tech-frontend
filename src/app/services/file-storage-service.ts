import { Injectable } from '@angular/core';
import { CommonService } from './common-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileStorageService {
  private readonly baseEndpoint = '/files';

  constructor(private commonService: CommonService) {}

uploadFile(file: File): Observable<any> {
    const endpoint = `${this.baseEndpoint}/upload`;
    const formData = new FormData();
    formData.append('file', file);

    // Use CommonService POST method (multipart support)
    return this.commonService.post(endpoint, formData);
  }


  downloadFile(filePath: string): Observable<Blob> {
    const endpoint = `${this.baseEndpoint}/download?filePath=${encodeURIComponent(filePath)}`;
    // For file download, make GET request and set responseType as blob
    return this.commonService.get(endpoint, { responseType: 'blob' });
  }
}
