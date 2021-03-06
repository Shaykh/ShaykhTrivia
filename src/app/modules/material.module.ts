import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MaterialModule { }
