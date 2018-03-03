import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checked: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.checked = this.store.select('checked');
  }
}
