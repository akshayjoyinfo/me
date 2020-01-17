import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SkillHeader } from '../shared/models/skill-header.model';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { PersonalProfile } from '../shared/models/personal-profile.model';
import { Experience } from '../shared/models/experience.model';
import { Project } from '../shared/models/project.model';
import { EducationComponent } from '../pages/components/education/education.component';
import { Education } from '../shared/models/education.model';
import { Blog } from '../shared/models/blog.model';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private skillHeadersUrl = 'assets/skill-headers.json';
  private githubLangsUrl = 'assets/github-langs.json';
  private personalProfileUrl = 'assets/personal-profile.json';
  private experienceUrl = 'assets/experiences.json';
  private projectsUrl = 'assets/projects.json';
  private educationUrl = 'assets/education.json';
  private blogurl = 'assets/blog-list.json';
  constructor(private http: HttpClient) {
  }

  getAboutSkillHeaders(): Observable<SkillHeader[]> {
    return this.http.get<SkillHeader[]>(this.skillHeadersUrl).pipe(
      tap(data => console.log('API Service -getAboutSkillHeaders')),
      catchError(this.handleError)
    );
  }

  getGithubLangugaes(): Observable<any[]> {
    return this.http.get<SkillHeader[]>(this.githubLangsUrl).pipe(
      tap(data => console.log('API Service - getGithubLangugaes')),
      catchError(this.handleError)
    );
  }

  getProfileDetails(): Observable<PersonalProfile[]> {
    return this.http.get<PersonalProfile[]>(this.personalProfileUrl).pipe(
      tap(data => console.log('API Service getProfileDetails')),
      catchError(this.handleError)
    );
  }

  getExperiences(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.experienceUrl).pipe(
      tap(data => console.log('API Service getExperiences')),
      catchError(this.handleError)
    );
  }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      tap(data => console.log('API Service getProjects')),
      catchError(this.handleError)
    );
  }

  getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(this.educationUrl).pipe(
      tap(data => console.log('API Service getEducation')),
      catchError(this.handleError)
    );
  }

  getBlogList(): Observable<Blog[]>{
    return this.http.get<Blog[]>(this.blogurl).pipe(
      tap(data => console.log('API Service getBlogList')),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
