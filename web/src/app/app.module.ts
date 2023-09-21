import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { ButtonComponent } from './components/button/button.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './core/pages/home/home.component';
import { ActivitiesComponent } from './core/pages/activities/activities.component';
import { RankingAllComponent } from './components/ranking/ranking-all/ranking-all.component';
import { RankingSchoolComponent } from './components/ranking/ranking-school/ranking-school.component';
import { RankingTopAllComponent } from './components/ranking/ranking-top-all/ranking-top-all.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InputFieldComponent,
    SelectFieldComponent,
    ButtonComponent,
    HomeComponent,
    ActivitiesComponent,
    RankingAllComponent,
    RankingSchoolComponent,
    RankingTopAllComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
