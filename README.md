# AngularBases2

## Comandos para arrancar
- DEV SRV: `ng serve` | `http://localhost:4200/`
- OTROS: `ng generate directive|pipe|service|class|guard|interface|enum|module`
    - Modulo: `ng generate module <nombre>` | `ng g m <nombre>`
    - Componente: `ng generate component <nombre>` | `ng g c <nombre>`
    - Servicio `ng g s <nombre>`
    - Directiva: `ng g d <nombre>` 

## Build
- CONSTRUCCIÓN DE APP: `ng build`, será almacenado en `dist/`

## Correr tests
- TEST UNITARIOS `ng test`

## Correr tests end-to-end
- TESTS COMPLETOS: `ng e2e`.

## TEORÍA Y BASES:

### Router:
- Permite hacer SPA donde los cambios en la URL desencadenan cambios en los componentes y la vista en general
- Da una experiencia de usuario mas fluida
- Angular por defecto ya trae rutas
- `<router-outlet/>` usado en la plantilla, indica a angular donde debe cargar los componentes asociados a url
- `<a routerLink="/inicio">_</a>` la navegacion se dispara con los enlaces, botones, o con el servicio Router si no es visible
- `{path:'prod/:id', component: Component}` podemos mandarle parametros especificos para pasar datos al componente
- `{path:'prod/:category/:id', component: Component}` se puede con mas de un parametro
- `<a [routerLink]="['/prod'], prod.id">_</a>` podemos mandarle parametros especificos para pasar datos al componente
- `<a routerLink="/inicio" routerLinkActive="active">_</a>` pone la clase css active si el link hace match con la url
- Hoy en dia se usa `ngClass` en ves de routerLinkActive estos dias
- En el controlador, para recuperar parametros de la url en el componente inyectamos `ActivatedRoute` de angular y con `ngOnInit` `this.route.params.suscribe(){...}` recuperamos los valores
- Para navegar desde el controlador importamos `Router` de angular y lo inyectamos. Podemos navegar haciendo `this.router.navigate(['/ruta',id])`

### Estructuras de control:
- Permite manipular el flujo de ejecución en la aplicación, recuerda importar `CommonModule` en cada componente que los use
- `*ngIf="mostrarElemento"` si es true renderiza, se pueden anidar
- `*ngFor="let item of items"` bucle for renderiza elementos
- `<div [ngSwitch]="evaluador"> <p *ngSwitchCase="'op1'">Opcion 1</p> ... <*ngSwitchDefault></></div>` estructura switch de multiples casos
- `<div [ngClass]="{'cls1':condicion1,'cls2':condicion2}"></div>` permite cambiar las clases css de un elemento
- `<div [ngStyle]="{'color':color,'font-size':tamanio}"></div>` solo admite valores para atributos css
- `<ng-container *ngIf="condicion"></ng-container>` Es un document fragment, no agrega elementos adicionales al dom, agrupa elementos
- Otras: `ngTemplate` ,`ngPlural` ,`ngComponentOulet`
- 

### Plantillas:
- Son instrucciones en el marcado HTML que dan funcionalidad adicional a los elementos del DOM existentes
o personalizan su comportamiento.


### Metadata: 
- Son representado por los decoradores, es la información que define
    - modulos, servicios, etc.
- se usa para configurar y personalizar el comportamiento del estado de la app
- @Component, @NgModule, @Injectable se usan para adjuntar metadata a las clases