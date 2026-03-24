// Ejercicio 2: Crea una directiva que muestre un elemento solo si el rol coincide.
import { Directive, effect, ElementRef, input } from '@angular/core';

@Directive({
    selector: '[appShowIfRole]',
    standalone: true,
})
export class ShowIfRoleDirective {

    // Deprecated, mejor utilizar Signals de Entrada (Input Signals)
    //   @Input() appShowIfRole: string = '';   // rol requerido
    //   @Input() userRole: string = '';        // rol del usuario


    // Signals de entrada (Input Signals)
    requiredRole = input<string>();
    userRole = input<string>();

    // FORMA 1: HOOK ngOnInit(). El rol se evalúa sólo una vez.
    // constructor(private el: ElementRef<HTMLElement>) { }

    // ngOnInit() {
    //     if (this.userRole() !== this.requiredRole()) { //Las signals se leen como funciones
    //         this.el.nativeElement.style.display = 'none';
    //     }
    // }

    // FORMA 2: EFFECT().  Para aprovechar la reactividad de los input signals,
    // especificamos en el constructor un effect para que el cambio sea dinámico.
    constructor(private el: ElementRef<HTMLElement>) {

        effect(() => {
            const required = this.requiredRole();
            const current = this.userRole();


            // En el primer ciclo de rendering, las constantes son undefined. No actuar hasta que tengamos valor real
            if (!required || !current) {
                return;
            }

            this.el.nativeElement.style.display =
                required === current ? '' : 'none';
        });

    }

}
