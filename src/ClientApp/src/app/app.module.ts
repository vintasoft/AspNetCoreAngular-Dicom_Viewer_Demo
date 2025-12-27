import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DicomViewerDemoComponent } from './dicom-viewer-demo/dicom-viewer-demo';

import { BlockUiDialog, BlockUiDialogContent } from './dialogs/block-ui-dialog';
import { ErrorMessageDialog, ErrorMessageDialogContent } from './dialogs/error-message-dialog';

@NgModule({
  declarations: [
    AppComponent,
    DicomViewerDemoComponent,
    BlockUiDialog,
    BlockUiDialogContent,
    ErrorMessageDialog,
    ErrorMessageDialogContent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DicomViewerDemoComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
