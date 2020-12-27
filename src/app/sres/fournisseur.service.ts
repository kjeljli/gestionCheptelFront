import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { filter, map, mergeAll } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private apiServer = "http://localhost:8080";

constructor(private httpClient: HttpClient) { }


 getUsers():Observable<User[]>{
  return of(
[
{id :11 ,name:"dr nice"},
{id :12 ,name:"AMAL"},
{id :13 ,name:"KHALIL"}
]

);
}
getUsersWithHttpCall():Observable<any>{

 /* return this.httpClient.get(this.apiServer + '/fournisseur/all').pipe(
    map((users:User[])=>
     users.filter((user:User)=>user.id>3)
     ))*/

     return this.httpClient.get(this.apiServer + '/fournisseur/all');
}

ajouterFournisseur(fournisseur :any):Observable<any>{
  return this.httpClient.post(this.apiServer + '/fournisseur/createOrUpdate',fournisseur);
}

}