import {InjectionToken} from "@angular/core";

export interface AppConstants {
  baseUrl: string;
}

const CONSTANTS = {
  baseUrl: 'http://localhost:3000',
};

export const APP_CONSTANTS = new InjectionToken('App Constants', {
  factory(): AppConstants {
    return CONSTANTS
  }
})
