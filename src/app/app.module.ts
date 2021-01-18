import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    NgbModule
  ],
  providers: [SkillsService,WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
