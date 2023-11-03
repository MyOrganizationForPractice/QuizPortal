import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { NormalDashboardComponent } from './pages/normal/normal-dashboard/normal-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { QuizComponent } from './pages/admin/quiz/quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ViewQuizQuestionComponent } from './pages/admin/view-quiz-question/view-quiz-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { AllQuizViewComponent } from './pages/normal/all-quiz-view/all-quiz-view.component';
import { PreStartQuizComponent } from './pages/normal/pre-start-quiz/pre-start-quiz.component';
import { StartQuizComponent } from './pages/normal/start-quiz/start-quiz.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { authGuard } from './gaurd/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'update-profile/:userId',
    component: UpdateProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'foget-password',
    component: ForgetPasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'start-quiz/:qId',
    component: StartQuizComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        canActivate: [authGuard],
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: CategoryComponent,
      },
      {
        path: 'add-categories',
        component: AddCategoryComponent,
      },
      {
        path: 'quiz',
        component: QuizComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'update-quiz/:qId',
        component: UpdateQuizComponent,
      },
      {
        path: 'view-quiz-question/:qId/:title',
        component: ViewQuizQuestionComponent,
      },
      {
        path: 'add-question/:qid/:title',
        component: AddQuestionComponent,
      },
      {
        path: 'update-question/:questionId',
        component: UpdateQuestionComponent,
      },
      {
        path: 'update-category/:cid',
        component: UpdateCategoryComponent,
      },
    ],

  },
  {
    path: 'normal-dashboard',
    component: NormalDashboardComponent,
    children: [
      {
        path: ':cId',
        component: AllQuizViewComponent,
      },
      {
        path: 'quiz-instruction/:qId',
        component: PreStartQuizComponent,
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
