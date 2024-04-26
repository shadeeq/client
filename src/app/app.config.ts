import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {NgxEditorModule} from "ngx-editor";
import {provideQuillConfig, QuillModule} from "ngx-quill";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(QuillModule.forRoot())
  ]
};
