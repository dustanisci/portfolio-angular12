import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerAboutComponent } from './container-about/container-about.component';
import { ContainerContactComponent } from './container-contact/container-contact.component';
import { ContainerPortfolioComponent } from './container-portfolio/container-portfolio.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { ContainerGeometricComponent } from './shared/components/container-geometric/container-geometric.component';
import { ContainerSkillsComponent } from './container-skills/container-skills.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ReversePipe } from '@shared/pipes/reverse/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContainerAboutComponent,
    ContainerContactComponent,
    ContainerPortfolioComponent,
    ContainerSkillsComponent,
    FooterComponent,
    NavbarComponent,
    ContainerGeometricComponent,
    LoaderComponent,
    ReversePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }