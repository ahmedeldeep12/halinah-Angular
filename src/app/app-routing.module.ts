import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './component/teacher/teacher.component';
import { HomeComponent } from './component/home/home.component';
import { CurriculaComponent } from './component/curricula/curricula.component';
import { ClassDefultComponent } from './component/class-defult/class-defult.component';
import { AnswersComponent } from './component/answers/answers.component';
import { QuistionBankComponent } from './component/quistion-bank/quistion-bank.component';
import { ExamComponent } from './component/exam/exam.component';
import { QustionComponent } from './component/qustion/qustion.component';
import { QuestionExamComponent } from './component/question-exam/question-exam.component';
import { ResultComponent } from './component/result/result.component';
import { VideoComponent } from './component/video/video.component';
import { NoteComponent } from './component/note/note.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'student', component: CurriculaComponent},
  {path: 'class', component: ClassDefultComponent},
  {path: 'student', component: CurriculaComponent},
  {path: 'bank', component: QuistionBankComponent},
  {path: 'exam', component: ExamComponent},
  {path: 'quistion', component: QustionComponent},
  {path: 'answers', component: AnswersComponent},
  {path: 'quistionE', component: QuestionExamComponent},
  {path: 'result', component: ResultComponent},
  {path: 'video', component: VideoComponent},
  {path: 'note', component: NoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
