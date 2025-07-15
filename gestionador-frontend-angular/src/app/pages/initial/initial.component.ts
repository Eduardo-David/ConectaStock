import { Component, Input } from '@angular/core';
import { IconComponentComponent } from "../../components/icon-component/icon-component.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [IconComponentComponent, RouterLink],
  template: `
    <main class="flex h-full w-full justify-center items-center ">
      <section class="flex gap-10 flex-row">
        <div routerLink="/login/proveedor" class="border-white border-4 rounded-lg p-4 flex flex-col items-center cursor-pointer">
          <h1 class="font-sans font-bold text-2xl">
            Proveedor
          </h1>
          <app-icon-component name="IconProveedor" size="200px" color="white"/>
        </div>
        <div routerLink="/login/vendedor" class="border-white border-4 rounded-lg p-4 flex flex-col items-center cursor-pointer">
          <h1 class="font-sans font-bold text-2xl">
            Vendedor
          </h1>  
          <app-icon-component name="IconVendedor" size="200px" color="white"/>
        </div>
      </section>
    </main>
  `,
  styles: ``
})
export class InitialComponent {

}
