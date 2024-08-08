import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  contador: number = 0;
  private contadorSubscription!: Subscription;

  ngOnInit() {
    this.contadorSubscription = interval(10).subscribe(() => {
      if (this.contador < 100) {
        this.contador++;
      } else {
        this.contadorSubscription.unsubscribe(); 
      }
    });
  }

  ngOnDestroy() {
    this.contadorSubscription.unsubscribe();
  }
}
