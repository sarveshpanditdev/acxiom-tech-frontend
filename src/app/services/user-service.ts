import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common-service';
import { UserModel } from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseEndpoint = '/user';

  constructor(private commonService: CommonService) {}

  login(userData: UserModel): Observable<any> {
    const endpoint = `${this.baseEndpoint}/login`;
    return this.commonService.post<any>(endpoint, userData);
  }


  submitUserDetails(userData: UserModel): Observable<any> {
    const endpoint = `${this.baseEndpoint}/submitUserDetails`;
    return this.commonService.post<any>(endpoint, userData);
  }

}
