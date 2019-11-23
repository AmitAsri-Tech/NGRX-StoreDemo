import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [ ...state, {...action.payload}];
      case 'REMOVE':
        return state.filter(p => p.id !== action.payload.id);
        case 'UPDATE':
      return state.map(p => {
        if (p.id === action.payload.id) {
          return { ...p, ...action.payload};
        } else {
          return p;
        }
      });
    default:
      return state;
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      products: productsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
