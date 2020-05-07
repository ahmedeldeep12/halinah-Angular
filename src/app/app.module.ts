import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { RechargeComponent } from './component/recharge/recharge.component';
import { HomeComponent } from './component/home/home.component';
import { CurriculaComponent } from './component/curricula/curricula.component';
import { NoteComponent } from './component/note/note.component';
import { VideoComponent } from './component/video/video.component';
import { ClassDefultComponent } from './component/class-defult/class-defult.component';
import { LiveComponent } from './component/live/live.component';
import { QuistionBankComponent } from './component/quistion-bank/quistion-bank.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { ExamComponent } from './component/exam/exam.component';
import { QustionComponent } from './component/qustion/qustion.component';
import { AnswersComponent } from './component/answers/answers.component';
import { QuestionExamComponent } from './component/question-exam/question-exam.component';
import { ResultComponent } from './component/result/result.component';
import { LoginComponent } from './component/login/login.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationComponent,
    RechargeComponent,
    HomeComponent,
    CurriculaComponent,
    NoteComponent,
    VideoComponent,
    ClassDefultComponent,
    LiveComponent,
    QuistionBankComponent,
    TeacherComponent,
    ExamComponent,
    QustionComponent,
    AnswersComponent,
    QuestionExamComponent,
    ResultComponent,
    LoginComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
