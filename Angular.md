What is the difference between ngOnInit() and a constructor in Angular components?

Constructor:
The constructor is a TypeScript feature, not Angular-specific.
It’s called when the class is instantiated — that is, before Angular initializes the component’s lifecycle.
Used mainly for dependency injection (DI) and basic variable initialization.

ngOninit:
ngOnInit() is part of Angular’s component lifecycle hooks.
It runs after Angular initializes the component,

To Prevent re render of list again and again 
use trackBy
HTML:

<li *ngFor="let item of items; let i = index; trackBy: trackByFn">
  {{ heavyComputation(item) }}
</li>
.ts:

trackByFn(index: number, item: any) {
  return item.id; // or anything unique
}

<p *ngIf="true" *ngFor="let i of [1,2,3]">{{i}}</p>
so why we not use two angular directive on same element?
Ans:You cannot use two structural directives (*ngIf, *ngFor, *ngSwitchCase, etc.) on the same element because Angular transforms each structural directive into its own <ng-template> behind the scenes — and one element cannot be converted into two templates at the same time.


How does Angular's change detection mechanism work?
Angular uses a View tree (created by the compiler) to track bindings for each component.
Angular’s change detection runs automatically whenever something asynchronous happens that might change data:
Browser events (e.g., click, input)
HTTP requests
Timers (setTimeout, setInterval)
Promises
When triggered:
Angular starts from the root component.
It recursively checks all components in the component tree.
For each component:
It compares bound data values (e.g., from {{ }}, [property], [(ngModel)]).
This continues until the entire tree is checked.


what is Pure and impure pipes?
Pure Pipes:
A pure pipe executes only when the input value or reference changes (by reference, not by content).
Angular caches the previous output, so it avoids re-running the pipe if the same input is passed again.

@Pipe({
  name: 'pureExample',
  pure: true  // (default)
})
export class PureExamplePipe implements PipeTransform {
  transform(value: number): number {
    console.log('Pure pipe executed');
    return value * 2;
  }
}


Impure Pipes:
An impure pipe executes on every change detection cycle, regardless of whether the input changed or not.

@Pipe({
  name: 'impureExample',
  pure: false 
})
export class ImpureExamplePipe implements PipeTransform {
  transform(value: number): number {
    console.log('Impure pipe executed');
    return value * 2;
  }
}

How do you optimize performance in Angular applications?
1.Lazy Loading Modules
2.Use Pure Pipes Instead of Methods in Templates
3.Avoid to use Timers if use then destroy the timer when component destroy.
4.Preloading all modules.

What are the key differences between template-driven and reactive forms?
Template Driven:
Driven by the template (HTML)
Uses Angular directives like [(ngModel)]
Simple forms with few inputs
Two-way binding between view and model
Defined in the template using Angular directives (e.g. required, minlength)
Difficult, since logic is in the template

Reactive Forms:
Driven by the component (TypeScript)
Explicitly created using FormControl, FormGroup, and FormArray
Uses reactive APIs like formControlName, FormBuilder
Complex forms with dynamic validations or logic
Unidirectional, data flows from model to view
using built-in or custom validators
Easier to manage, test, and scale

Explain dependency injection in Angular?
Dependency Injection in Angular is a design pattern where components or services receive their dependencies from Angular’s injector rather than creating them manually. It helps achieve loose coupling, reusability, and easier testing.

@Injectable({
  providedIn: 'root' // Service is registered at the root level
})
export class UserService {
  getUser() {
    return { name: 'Omkar' };
  }
}

@Component({
  selector: 'app-user',
  template: '{{ user.name }}'
})
export class UserComponent {
  user: any;

  // Angular injects UserService here
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
The UserService is registered with Angular’s injector (via @Injectable).
When UserComponent is created, Angular automatically provides an instance of UserService in the constructor.

What are angular lifecycle hooks?
ngOnchanges() :
Runs whenever an @Input() property changes (including the first time).
Receives a SimpleChanges object with previous and current values.

ngOninit():
Called once after the first ngOnChanges().
Used for initialization logic like fetching data or setting up values.

ngDoCheck():
Called during every change detection run,

ngAfterContentInit():
Called once after Angular projects external content (<ng-content>) into the component.

ngAfterContentChecked():
Called after every check of projected content.

ngAfterViewInit():
Called once after the component’s view (and child views) has been initialized.

ngAfterViewChecked():
Called after every check of the component’s view and child views.

ngOnDestroy():
Called just before the component is destroyed.


What is ng-template, ng-container, and ng-content used for?

ng-template:
ng-template defines a template block that Angular does not render directly in the DOM.
Instead, it acts as a blueprint that Angular can render conditionally or dynamically.
<ng-template #noData>
  <p>No records found!</p>
</ng-template>

<div *ngIf="data.length; else noData">
  <p>Data Loaded!</p>
</div>
The <ng-template> block is not rendered unless referenced (else noData).
Angular uses it when the condition in *ngIf is false.

ng-container:Similar like React.fragment 
ng-container lets you group elements logically without adding an extra HTML element to the DOM.
<ng-container *ngIf="isLoggedIn">
  <h2>Welcome, {{ user.name }}</h2>
  <button (click)="logout()">Logout</button>
</ng-container>
Output in DOM:
<h2>Welcome, {{ user.name }}</h2>
<button (click)="logout()">Logout</button>

ng-content: Similar like Component Composition in React
In Simple Words:ng-content acts as a placeholder in child component and projected data from parent component

Parent Component:
<app-card>
  <h3>Angular Tips</h3>
  <p>Learn about ng-template, ng-container, and ng-content.</p>
</app-card>

Child ComPonent:
<div class="card">
  <ng-content></ng-content>
<!-- Output In Dom -->
<div class="card">
</div>
  <h3>Angular Tips</h3>
  <p>Learn about ng-template, ng-container, and ng-content.</p>
</div>

How do you prevent API calls from firing multiple times when switching between tabs?
switchMap unsubscribes from the previous observable when a new one is emitted.
That means — old requests are effectively abandoned, preventing race conditions and redundant calls.

How do you manage state between multiple components (without NgRx)?
So take scenario one userlist api which is use in multiple component
So at service level i use obj or map to store an api data unitil some time and if that time is over then it fetch from api again and stroe in map or object.

What is Subject and BehaviourSubject?
Subject:A Subject which like an event emitter instead of emit it use next
It does not store the current value — new subscribers won’t receive previous values, only future emissions.
CODE:
import { Subject } from 'rxjs';
const subject = new Subject<number>();
subject.next(1);
subject.next(2);
subject.subscribe(value => console.log('Subscriber A:', value));
subject.next(3);

BehaviorSubject:
A BehaviorSubject is like a Subject but it holds one current value (the latest emitted value).
It requires an initial value at creation.
When a new subscriber subscribes, it immediately receives the current/latest value, even if it was emitted before subscription.
CODE:
import { BehaviorSubject } from 'rxjs';
const behaviorSubject = new BehaviorSubject<number>(0); // initial value = 0
behaviorSubject.next(1);
behaviorSubject.next(2);
behaviorSubject.subscribe(value => console.log('Subscriber B:', value));
behaviorSubject.next(3);

InterCeptor.service.ts
it normally intercept a request 
Common Use Case: Adding a auth token
It's an normal service where just implement interface of HttpInterceptor and it has two arrguments req and next
sample code:
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   return this.authService.userdata.pipe(take(1),exhaustMap(user=>{
    if(!user){
      return next.handle(req);
    }
     const modifiedreq=req.clone(
      {
        params:new HttpParams().set('auth',user.token)
      }
     )
     return next.handle(modifiedreq);
   }))
  }


resolver:
It's also an service where Resolve interface is imaplement
Here one resolve method used which should retun something
This resolver gives data before route entierly load.

Sample Code:
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorage.fetchRecipe();
}


What are route guards and their types?
In Angular, Route Guards are used to control access to routes in an application.
Different type:
CanActivate,
CanDeactivate,
CanLoad
Resolve

CanActivate 
.Used to check access before navigating to a route (e.g., authentication).
e.g.
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}


Directive:
ng g d directive-name
import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // use as an attribute: <div appHighlight></div>
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight = ''; // allows passing custom color from component

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Apply default or input background color
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appHighlight || 'lightblue');
  }

  // Optional: Add hover effects
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appHighlight || 'lightblue');
  }
}

Template-driven Form
small e.g.
<form #shoppingForm="ngForm" (ngSubmit)="add(shoppingForm)">
<div class="col-sm-5 form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" [(ngModel)]="ingredientName" name="ingredientName" required ngModel #name="ngModel" />
                    <span class="help-block" *ngIf="!name.valid && name.touched">Item Name Is required.**</span>
                </div>
                <div class="col-sm-2 form-group">
                    <label for="amount">Amount</label>
                    <input type="number" id="amount" class="form-control" [(ngModel)]="ingredientAmount" name="ingredientAmount" required ngModel #amount="ngModel"[pattern]="'^[1-9]+[0-9]*$'"/>
                    <span class="help-block" *ngIf="!amount.valid && amount.touched">Item amount Is required.**</span>
                </div>
                    <button  class="btn btn-success" type="submit" [disabled]="!shoppingForm.valid">{{ editmode ? 'Update':'Add'}}</button>
</form>

So here we declate form name using #shoppingForm='ngForm' (ngSubmit) for submit
For data passing [(ngModel)]

Reactive Form
Structure
this.recipeForm=new FormGroup({
  recipeName:new FormControl('',Validators.required),
  recipeImage:new FormControl('',Validators.required),
  recipeDescription:new FormControl('',Validators.required),
  recipeIngredients:new FormArray([]);
});

<!-- using formBuilder -->
this.recipeForm = this.fb.group({
  recipeName: ['', Validators.required],
  recipeImage: ['', Validators.required],
  recipeDescription: ['', Validators.required],
  recipeIngredients: this.fb.array([])
});

Can Deactivate sample e.g.
Component.ts
// edit-profile.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  template: `
    <h2>Edit Profile</h2>
    <form [formGroup]="profileForm">
      <label>Name:</label>
      <input formControlName="name" />
    </form>
  `
})
export class EditProfileComponent {
  profileForm: FormGroup;
  isSaved = false;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['']
    });
  }

  save() {
    this.isSaved = true;
    alert('Profile saved!');
  }

  // 👇 method checked by CanDeactivate guard
  canDeactivate(): boolean {
    if (this.profileForm.dirty && !this.isSaved) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}

canDeactivateGuard
// unsaved-changes.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditProfileComponent } from './edit-profile.component'; // above component

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<EditProfileComponent> {
  canDeactivate(component: EditProfileComponent): boolean {
    return component.canDeactivate();
  }
}

apply canDeactivate on component in router file.


@Input()
Parent to Child

@Output()
Child To Parent

Normal syntax:
  @Input() parentMessage!: string;
  @Output() messageEvent = new EventEmitter<string>();

What is an Observable in Angular?
Observable is a data stream provided by RxJS that allows asynchronous programming. It emits values over time and you can subscribe to it to receive those values.

What is the difference between Observable and Promise?
Observable is lazy, Promise is eager
Observable can emit multiple values, Promise only one
Observable is cancelable (unsubscribe), Promise is not
Uses RxJS operators for transformation

What is the purpose of pipe() in Observables?
Used to chain multiple RxJS operators to transform the data stream.

What is the difference between tap() and map()?
tap: Side effects (logging, debugging), does NOT modify data
map: Transforms and returns a new value

What is the use of subscribe()?
To listen to observable values. It has 3 callbacks:
next, error, complete.

<!-- RXJS OPERATORS. -->
1.switchMap:
Use case avoid api calles while switching tabs
Sample e.g.
service.ts
fetchData(data){
    return this.http.get(
      `${this.Mapurl}rcs-summary-graph?username=${data.username}&startdate=${data.from_date}&endDate=${data.to_date}`,
      { params }
    );

};
component.ts
private fetchTrigger$ = new Subject<any>(); // this is because we have to use switchMap and pipe.

 constructor(private mapService: MapService) {
    this.fetchTrigger$.pipe( // pipe is used for chaining multiple observable.
      switchMap(data => this.mapService.fetchMapData(data))
      catchError(err=>{
        console.log(err);
        this.spinner.hide();
        return null;
      })
    ).subscribe(response => {
      this.data = response;
    });
  }

onTabChange(data: any) {
    // emit new tab request
    this.fetchTrigger$.next(data);
}

2.exhaustMap 
Prevent double click multiple API calls like throttling in js
Use case to avoid multiple calls on click.
component.ts.
private loginSubject=new Subject();
login(){
  this.loginSubject.next();
};
constructor(private authService:AuthService){
  this.loginSubject$.pipe(exhaustMap(()=>this.authService.login()))
}
service.ts
login(data){
  return this.http.post('http://localhost:3000/api/v1/login',data);
}

3.take
It takes only N values from the observable → ignores the rest → then completes the subscription automatically.
Useful for one-time or limited events
Example: take only first click, first value, first API response, etc.
Combine with other operators

NGRX:
Store -> Selector -> Component -> Action -> Reducer
Store -> Selector -> Component -> Action -> Effect ->Reducer

Normal Reducer File 
Reducer.ts
export interface State{
  ingredients:Ingredient[],
  editedIndex:number;
  editIngredient:Ingredient,
}

let initialState:State={
  ingredients:[],
  editedIndex:1;
  editIngredient:null,
}

export const shoppingListReducer=createReducer(initialState,on(<Action-name>,(state,action)=>{
  return 
}),on(<Action-name>,(state,action)=>{
  return 
})...);

Action.ts
export const <Action-name>=createAction('<str-action-name>',props<<Type>>());
So here when we create action we give normal string action name and if action want data then we pass props.

app.reducer.ts:
import { ActionReducerMap } from "@ngrx/store";
import * as fromShopping from './shopping-list/store/shopping-list.reducer';

export interface AppState{
    shopping:fromShopping.State,
}

export const appreducer:ActionReducerMap<AppState>={
    shopping:fromShopping.shopListReducer,
}
app.module.ts
in imports array.
StoreModule.forRoot(fromApp.appreducer)

Note:In any component if you fetch value in constructor(private store:Store<fromApp.AppState>){}
this.store.select('shopping').subscribe((data)=>console.log(data));

Effect.ts.
export class recipeEffect{

constructor(private actions$:Actions,private http:HttpClient,private store:Store<fromApp.AppState>){}
    switchMap(()=>{
<Effect->=crnameeateEffect(()=>{
  this.action$.pipe(
    ofType(<Action-name>),
    <!-- use any rxjs oprtators.
    e.g. -->
               return this.http.get<Recipe[]>('https://recipe-shoppinglist-672ce-default-rtdb.firebaseio.com/Recipes.json').pipe(
                tap((res)=>{
                    console.log(res);
                }),
                map((recipeData)=>{
                    return recipeData.map(data=>{
                        return{
                            ...data,
                            ingredients:data.ingredient ? data.ingredient:[]
                        }
                    })
                }),
                map((recipes)=>{
                    return recipeAction.setRecip({recipe:recipes})
                })
               )
            })
  );
})
}

in App.module.ts
inside imports array
EffectsModule.forRoot([recipeEffect]),

How Use this store in component
constructor(private store:Store<fromApp.AppState>);

if you get a data from store then use 
this.stroe.select('store-name');

If you want to update a state
this.store.dispatch('Action-name'(data))
sample .e.g.
  this.store.dispatch(recipeAction.updaeRecipe({editIndex:+this.id,recipe:new Recipe(this.recipeForm.value.recipeName,this.recipeForm.value.recipeDescription,this.recipeForm.value.recipeImage,this.recipeForm.value.recipeIngredients)}));

IMP
Note:Here when we create an efffect so we update a state using action , but some effect not update state using action so for that we need one more arrrgument {dispatch:false}.
Sample e.g.
storeRecipe=createEffect(()=>
       this.actions$.pipe(
        ofType(recipeAction.storeRecipe),
        exhaustMap(()=>{
            return this.store.select('recipe');
        }),
        switchMap((recipeState)=>{
            return this.http.put('https://angular-test-fd57f-default-rtdb.firebaseio.com/recipes.json',recipeState.recipe);
        })
       ),
       {dispatch:false}
    )
