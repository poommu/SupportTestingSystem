import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RequirementComponent } from './requirement/requirement.component';
import { TestcaseComponent } from './testcase/testcase.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ReqTraceabilityMatrixComponent } from './req-traceability-matrix/req-traceability-matrix.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Auth service
import { AuthService } from "./services/auth.service";
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ViewScreenComponent } from './view-screen/view-screen.component';
import { PlanTestExecutionComponent } from './plan-test-execution/plan-test-execution.component';
import { DialogAddScreenComponent } from './dialog-add-screen/dialog-add-screen.component';
import { DialogAddDefectComponent } from './dialog-add-defect/dialog-add-defect.component';
import { DialogViewDefectComponent } from './dialog-view-defect/dialog-view-defect.component';
import { DialogViewAddDefectComponent } from './dialog-view-add-defect/dialog-view-add-defect.component';

// Config Firebase
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RequirementComponent,
    TestcaseComponent,
    ManageUserComponent,
    AddUserComponent,
    ViewScreenComponent,
    PlanTestExecutionComponent,
    DialogAddScreenComponent,
    ReqTraceabilityMatrixComponent,
    DialogAddDefectComponent,
    DialogViewDefectComponent,
    DialogViewAddDefectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents:[
    DialogAddScreenComponent,
    DialogAddDefectComponent,
    DialogViewDefectComponent,
    DialogViewAddDefectComponent
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
