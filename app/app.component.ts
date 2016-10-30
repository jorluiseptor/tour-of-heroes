import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`<h1>{{title}}</h1>
              <my-heroes></my-heroes>
             `
})


export class AppComponent{11
    title = 'Tour of Heroes';
}