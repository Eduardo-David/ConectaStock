import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
<main class="grid grid-cols-3 grid-rows-3 h-screen w-screen">
  <button class="col-start-1 row-start-1 justify-self-start self-start ml-5 mt-5
    h-auto max-w-min w-full p-3 border-2 rounded-2xl font-bold text-2xl"
    (click)="home()">⬅Volver</button>
  <form [formGroup]="registerForm"
        class="grid grid-cols-1 col-start-2 row-start-2 gap-4 max-w-md w-full px-5 py-10 h-auto justify-self-center self-center items-center border-2 rounded-xl"
        (ngSubmit)="onSubmit()">
    <h1 class="relative font-bold text-4xl left-1">Registro</h1>
    <label class="font-sans text-lg">☛nombre de usuario</label>
    <input type="text" formControlName="name" class="rounded-sm border-white border-2 px-2 py-1 bg-black" required />

    <label class="font-sans text-lg">☛Contraseña</label>
    <input type="password" formControlName="password" class="rounded-sm border-white border-2 px-2 py-1 bg-black" required />

    <label class="font-sans text-lg">☛Carnet de identidad</label>
    <input type="text" formControlName="ci" class="rounded-sm border-white border-2 px-2 py-1 bg-black" required />

    <label class="font-sans text-lg">☛Numero de telefono</label>
    <input type="text" formControlName="telefono" class="rounded-sm border-white border-2 px-2 py-1 bg-black" required />

    <label class="font-sans text-lg">☛Tipo de usuario:</label>
    <select formControlName="role" class=" border-2 px-2 py-1 bg-black cursor-pointer text-green-500">
      <option value="">--Seleccione un rol--</option>
      <option value="vendedor">Vendedor</option>
      <option value="proveedor">Proveedor</option>
    </select>
    <button type="submit" class="font-sans font-bold border-2 border-white p-2 w-auto rounded-sm h-auto cursor-pointer">
      Crear cuenta
    </button>
    <!-- <div *ngIf="valido !== null" class="mt-2">
      <span *ngIf="valido" class="text-green-500">Registro exitoso</span>
      <span *ngIf="valido === false" class="text-red-500">Registro fallido</span>
    </div> -->
  </form>
</main>
  `,
  styles: ``
})
export class RegisterComponent {
  registerForm: FormGroup;
  // valido: boolean | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      ci: ['', Validators.required],
      telefono: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  home() {
    this.router.navigate(['']);
  }

 async onSubmit() {
    if (this.registerForm.invalid) return;
    try {
      await this.authService.register(this.registerForm.value);
      setTimeout(() => this.router.navigate(['']), 2000);
    } catch (error) {
      alert('Error al registrarse');
    }
  }
}