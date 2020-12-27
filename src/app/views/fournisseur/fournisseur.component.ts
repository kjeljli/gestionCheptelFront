import { FournisseurService } from './../../sres/fournisseur.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    
  constructor(private formBuilder: FormBuilder,private fournisseurSerivice :FournisseurService) { }

  ngOnInit(): void {
    
    this.fournisseurSerivice.getUsersWithHttpCall().subscribe(data=> {
      alert(data)
      console.log(data);
     });

    this.registerForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
  });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  console.log(this.registerForm.value);
  this.fournisseurSerivice.ajouterFournisseur(this.registerForm.value).subscribe(data=> {
    alert(data)
    console.log(data);
   });
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

}
