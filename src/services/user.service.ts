import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {APP_CONSTANTS, AppConstants} from "../constants/app-constants";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser$ = new Subject<any>()

  constructor(private readonly http: HttpClient, @Inject(APP_CONSTANTS) private appConstants: AppConstants) {
  }

  saveUser(body: any) {
    return this.http.post(this.appConstants.baseUrl + '/create-user', body);
  }

  logIn(body: any) {
    return this.http.post<any>(this.appConstants.baseUrl + '/log-in', body);
  }

  getCurrentUserById(userId: string) {
    const params = new HttpParams().set('userId', userId);
    return this.http.get(this.appConstants.baseUrl + '/current-user', { params })
  }

  registerCurrentUser(user: any): void {
    this.currentUser$.next(user)
  }
}
