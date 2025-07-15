import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IconComponentComponent } from "../../components/icon-component/icon-component.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [IconComponentComponent, ReactiveFormsModule],
  template: `
<main class="grid grid-cols-3 grid-rows-3 justify-center items-center w-full h-full">
<button class="col-start-1 row-start-1 justify-self-start self-start ml-5 mt-5
    h-auto max-w-min w-full p-3 border-2 rounded-2xl font-bold text-2xl"
    (click)="irHome()">⬅Volver</button>
            <form class="col-start-2 row-start-2 justify-self-center flex flex-col justify-center items-center border-2 rounded-3xl h-auto max-w-md gap-4 p-10 self-center" [formGroup]="registerFrom" (ngSubmit)="onSubmit()">
                <h1 class='font-sans text-2xl h-auto w-auto'>
                  {{title}}
                </h1>
                <div class='h-auto w-auto'>
                   <app-icon-component name={{icon}} size="200px" color="white"/>
                </div>
                <div class="flex flex-col gap-3 h-auto w-auto">
                <label htmlFor="username" class='h-auto w-auto'>Usuario</label>
                <input type="text" id="username" formControlName="username" class='rounded-sm border-white border-2 h-auto w-auto bg-black' required/>
                <label htmlFor="password" class='h-auto w-auto'>
                    Contraseña</label>
                <input type="password" id="password" formControlName="password" class='rounded-sm border-white border-2 bg-black h-auto w-auto' required/>
                </div>
                <button type="summit" class='border rounded-sm w-auto font-bold h-auto p-2'>Iniciar Sesión</button>
                <p>
                    ¿No tienes cuenta?
                    <a href='/register' class='font-bold underline'>
                        Regístrate
                    </a>
                </p>
            </form>
  </main>
  `,
  styles: ``
})
export class LoginComponent {
  registerFrom: FormGroup;
  icon: string = '';
  title: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.registerFrom = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.title = this.route.snapshot.data['title'];
    this.icon = this.route.snapshot.data['icon'];
  }
  irHome() {
    this.router.navigate(['']);
  }
  async onSubmit() {
    if (this.registerFrom.invalid) return;
    try {
      await this.authService.login(this.registerFrom.value);
      switch (this.title) {
        case 'Vendedor':
          this.router.navigate(['/interface/vendedor']);
          break;
        case 'Proveedor':
          this.router.navigate(['/interface/proveedor']);
          break;
      }
      this.router.navigate(['/']);
      setTimeout(() => this.router.navigate(['InterfaceProveedor']), 2000);
    } catch (error) {
      alert('Error al iniciar sesion');
    }
  }
}
