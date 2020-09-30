import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmissionFormComponent } from './components/submission/submission-form.component';
import { ContactFormComponent } from './components/contact/contact-form.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { FaqComponent } from './components/faq/faq.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

//Articles
import { PortrayalvsrealityComponent } from './components/articles/portrayalvsreality/portrayalvsreality.component';
import { InterculturalinterracialdatingComponent } from './components/articles/interculturalinterracialdating/interculturalinterracialdating.component';
import { HowcanihelpComponent } from './components/articles/howcanihelp/howcanihelp.component'
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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent},
  { path: 'submission-form', component: SubmissionFormComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact-form', component: ContactFormComponent },
  //Links to articles begin here
  { path: 'articles/portrayalvsreality', component: PortrayalvsrealityComponent},
  { path: 'articles/interculturalinterracialdating', component: InterculturalinterracialdatingComponent},
  { path: 'articles/howcanihelp', component: HowcanihelpComponent},
  { path: 'articles/choosingyournarrative', component: ChoosingyournarrativeComponent },
  { path: 'articles/bollywoodperspectives', component: BollywoodperspectivesComponent },
  { path: 'articles/bengalibeautystandards', component: BengalibeautystandardsComponent },
  { path: 'articles/mytedtalkametoostory', component: MytedtalkametoostoryComponent },
  { path: 'articles/truths', component: TruthsComponent },
  { path: 'articles/fiftyshadesofrape', component: FiftyshadesofrapeComponent },
  { path: 'articles/interviewwithvijaysridharan', component: InterviewwithvijaysridharanComponent },
  { path: 'articles/selfcarepoem', component: SelfcarepoemComponent },
  { path: 'articles/themoonsheweepspoem', component: ThemoonsheweepspoemComponent },
  { path: 'articles/selfcareintheus', component: SelfcareintheusComponent },
  { path: 'articles/pressuresofgettingmarried', component: PressuresofgettingmarriedComponent },
  { path: 'articles/nativerootspoem', component: NativerootspoemComponent },
  { path: 'articles/womeninindianfilmsacritique', component: WomeninindianfilmsacritiqueComponent },
  { path: 'articles/doublestandardsofmarriageinpatriarchalsocieties', component: DoublestandardsofmarriageinpatriarchalsocietiesComponent },
  { path: 'articles/mentalhealthinthesouthasiancommunity', component: MentalhealthinthesouthasiancommunityComponent },
  { path: 'articles/permissiontomourn', component: PermissiontomournComponent },
  { path: 'articles/yogaforthecoldseason', component: YogaforthecoldseasonComponent },
  { path: 'articles/dreamybedtimelatte', component: DreamybedtimelatteComponent },
  { path: 'articles/highfunctioninganxiety', component: HighfunctioninganxietyComponent },
  { path: 'articles/sexualassaultinrelationtofeminisminterview', component: SexualassaultinrelationtofeminisminterviewComponent },
  { path: 'articles/postgraddepression', component: PostgraddepressionComponent },
  { path: 'articles/doyoucare', component: DoyoucareComponent },
  //Redirection items
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //Redirect to home page
  { path: '**', component: NoPageFoundComponent } //Redirect to 404


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
