import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FirebaseAppModule } from '@angular/fire/app';
import { FirestoreService } from './service/firestore.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

import { collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirebaseAppModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Lives Stats';
  bets$ = collectionData(this.firestore.getCollection('bets'));

  constructor(private firestore: FirestoreService) {}

  ngOnInit(): void {
  }

  add() {
    this.firestore.store({ pick: 'City Gana y over 2.5', momio: '-125', bet: 100 });
  }

  update(id: string) {
    this.firestore.update(id, {bet: 1000});
  }

  remove(id: string) {
    this.firestore.remove(id)
  }
}
