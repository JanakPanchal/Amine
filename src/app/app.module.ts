import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeenjsonformatterComponent } from './teenjsonformatter/teenjsonformatter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavarComponent } from './main-navar/main-navar.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { CourseDialogComponentComponent } from './course-dialog-component/course-dialog-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TeenjsonformatterComponent,
    MainNavarComponent,
    SubNavbarComponent,
    CourseDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
