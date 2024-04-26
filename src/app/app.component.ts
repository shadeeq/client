import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {EMPTY, map, switchAll, switchMap, tap} from "rxjs";
import {AsyncPipe, formatDate, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {
  ButtonComponentModule,
  DividerComponentModule,
  EmptyStateComponentModule,
  StepperComponentModule,
  SnackbarComponentModule,
  SnackbarService,
  CheckboxComponentModule,
  RadioButtonComponentModule,
  FieldComponentModule,
  AutocompleteComponentModule, DropdownComponentModule, ProgressBarComponentModule,
  ApplicationTheme, NavbarComponentModule, PhoneInputComponentModule, TableComponentModule, RatingComponentModule
} from "@testgorilla/tgo-ui";
import {MatButton} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AgGridAngular} from "ag-grid-angular";
import {ColDef} from 'ag-grid-community';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {Editor, NgxEditorModule} from "ngx-editor";
import {QuillEditorComponent} from "ngx-quill";
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbTypeahead
} from "@ng-bootstrap/ng-bootstrap";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {MatIconModule} from "@angular/material/icon";

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
  owners?: any[];
  currentDate: string,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SnackbarComponentModule, ReactiveFormsModule, AsyncPipe, JsonPipe, DividerComponentModule, StepperComponentModule, ButtonComponentModule, EmptyStateComponentModule, AgGridAngular, CheckboxComponentModule, RadioButtonComponentModule, MatCheckboxModule, MatCardModule, FieldComponentModule, AutocompleteComponentModule, DropdownComponentModule, MatRadioModule, FormsModule, NgIf, ProgressBarComponentModule, NgForOf, NgxEditorModule, QuillEditorComponent, NgbTypeahead, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, MatIconModule, NavbarComponentModule, PhoneInputComponentModule, TableComponentModule, RatingComponentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  form = new FormGroup({
    dropDownList: new FormControl('')
  });
  countryList = [
    {
      "name": "Bouvet Island",
      "alpha2Code": "BV",
      "callingCode": "+0"
    },
    {
      "name": "Brazil",
      "alpha2Code": "BR",
      "callingCode": "+55"
    },
    {
      "name": "British Indian Ocean Territory",
      "alpha2Code": "IO",
      "callingCode": "+246"
    },
    {
      "name": "Brunei Darussalam",
      "alpha2Code": "BN",
      "callingCode": "+673"
    },
  ]

  dropDownList = [
    {
      value: 'Item 1',
    },
    {
      value: 'Item 2',
    },
    {
      value: 'Item 3',
    },
    {
      value: 'Item 4',
    },
    {
      value: 'Item 5',
    }
  ];

  ngOnInit(): void {
    this.form.markAllAsTouched()
  }

}
