import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Pages
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FaqComponent } from './components/faq/faq.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContactFormComponent } from './components/contact/contact-form.component';
import { SubmissionFormComponent } from './components/submission/submission-form.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

//Articles
import { PortrayalvsrealityComponent } from './components/articles/portrayalvsreality/portrayalvsreality.component';
import { InterculturalinterracialdatingComponent } from './components/articles/interculturalinterracialdating/interculturalinterracialdating.component';
import { HowcanihelpComponent } from './components/articles/howcanihelp/howcanihelp.component';
import { ChoosingyournarrativeComponent } from './components/articles/choosingyournarrative/choosingyournarrative.component';
import { BollywoodperspectivesComponent } from './components/articles/bollywoodperspectives/bollywoodperspectives.component';
import { BengalibeautystandardsComponent } from './components/articles/bengalibeautystandards/bengalibeautystandards.component';
import { MytedtalkametoostoryComponent } from './components/articles/mytedtalkametoostory/mytedtalkametoostory.component';
import { TruthsComponent } from './components/articles/truths/truths.component';
import { FiftyshadesofrapeComponent } from './components/articles/fiftyshadesofrape/fiftyshadesofrape.component';
import { InterviewwithvijaysridharanComponent } from './components/articles/interviewwithvijaysridharan/interviewwithvijaysridharan.component';
import { SelfcarepoemComponent } from './components/articles/selfcarepoem/selfcarepoem.component';
import { ThemoonsheweepspoemComponent } from './components/articles/themoonsheweepspoem/themoonsheweepspoem.component';
import { SelfcareintheusComponent } from './components/articles/selfcareintheus/selfcareintheus.component';
import { PressuresofgettingmarriedComponent } from './components/articles/pressuresofgettingmarried/pressuresofgettingmarried.component';
import { DoublestandardsofmarriageinpatriarchalsocietiesComponent } from './components/articles/doublestandardsofmarriageinpatriarchalsocieties/doublestandardsofmarriageinpatriarchalsocieties.component';
import { NativerootspoemComponent } from './components/articles/nativerootspoem/nativerootspoem.component';
import { WomeninindianfilmsacritiqueComponent } from './components/articles/womeninindianfilmsacritique/womeninindianfilmsacritique.component';
import { MentalhealthinthesouthasiancommunityComponent } from './components/articles/mentalhealthinthesouthasiancommunity/mentalhealthinthesouthasiancommunity.component';
import { YogaforthecoldseasonComponent } from './components/articles/yogaforthecoldseason/yogaforthecoldseason.component';
import { DreamybedtimelatteComponent } from './components/articles/dreamybedtimelatte/dreamybedtimelatte.component';
import { HighfunctioninganxietyComponent } from './components/articles/highfunctioninganxiety/highfunctioninganxiety.component';
import { PermissiontomournComponent } from './components/articles/permissiontomourn/permissiontomourn.component';
import { PostgraddepressionComponent } from './components/articles/postgraddepression/postgraddepression.component';
import { SexualassaultinrelationtofeminisminterviewComponent } from './components/articles/sexualassaultinrelationtofeminisminterview/sexualassaultinrelationtofeminisminterview.component';
import { DoyoucareComponent } from './components/articles/doyoucare/doyoucare.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactFormComponent,
    SubmissionFormComponent,
    AboutComponent,
    FaqComponent,
    PostsComponent,
    NoPageFoundComponent,
    ProjectsComponent,
    PortrayalvsrealityComponent,
    InterculturalinterracialdatingComponent,
    HowcanihelpComponent,
    ChoosingyournarrativeComponent,
    BollywoodperspectivesComponent,
    BengalibeautystandardsComponent,
    MytedtalkametoostoryComponent,
    TruthsComponent,
    FiftyshadesofrapeComponent,
    InterviewwithvijaysridharanComponent,
    SelfcarepoemComponent,
    ThemoonsheweepspoemComponent,
    SelfcareintheusComponent,
    PressuresofgettingmarriedComponent,
    DoublestandardsofmarriageinpatriarchalsocietiesComponent,
    NativerootspoemComponent,
    WomeninindianfilmsacritiqueComponent,
    MentalhealthinthesouthasiancommunityComponent,
    YogaforthecoldseasonComponent,
    DreamybedtimelatteComponent,
    HighfunctioninganxietyComponent,
    PermissiontomournComponent,
    PostgraddepressionComponent,
    SexualassaultinrelationtofeminisminterviewComponent,
    DoyoucareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
