import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive, MatMenuModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit, OnDestroy {
  isHandset: boolean = false;
  hasRegistrations: boolean = false;
  private breakpointSubscription: Subscription = Subscription.EMPTY;

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  constructor(private breakpointObserver: BreakpointObserver, private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.breakpointSubscription = this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isHandset = result.matches;
        if (!this.isHandset && this.menuTrigger) {
          this.menuTrigger.closeMenu();
        }
      });

    this.hasRegistrations = this.registrationService.hasRegistrations();
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}
