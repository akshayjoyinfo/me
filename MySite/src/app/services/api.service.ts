import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SkillHeader } from '../shared/models/skill-header.model';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { PersonalProfile } from '../shared/models/personal-profile.model';
import { Experience } from '../shared/models/experience.model';
import { Project } from '../shared/models/project.model';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private skillHeadersUrl = 'assets/skill-headers.json';
  private githubLangsUrl = 'assets/github-langs.json';
  private personalProfileUrl = 'assets/personal-profile.json';
  private experienceUrl = 'assets/experiences.json';
  private projectsUrl = 'assets/projects.json';
  constructor(private http: HttpClient) {
  }

  getAboutSkillHeaders(): Observable<SkillHeader[]> {
    return this.http.get<SkillHeader[]>(this.skillHeadersUrl).pipe(
      tap(data => console.log('API Service ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getGithubLangugaes(): Observable<any[]> {
    return this.http.get<SkillHeader[]>(this.githubLangsUrl).pipe(
      tap(data => console.log('API Service ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProfileDetails(): Observable<PersonalProfile[]> {
    return this.http.get<PersonalProfile[]>(this.personalProfileUrl).pipe(
      tap(data => console.log('API Service ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getExperiences(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.experienceUrl).pipe(
      tap(data => console.log('API Service ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      tap(data => console.log('API Service ' + JSON.stringify(data))),
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
