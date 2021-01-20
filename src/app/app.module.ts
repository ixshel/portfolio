import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ErrorComponent } from './components/error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsService } from './services/skills.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WorkService } from './services/works.service';
import { SplitPipe } from './pipes/split.pipe';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment'

//Services
import { CrudFirebaseService } from './services/crud-firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    ErrorComponent,
    FooterComponent,
    NavigationComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    SkillsService,
    WorkService,
    CrudFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
