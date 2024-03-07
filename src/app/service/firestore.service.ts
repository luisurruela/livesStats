import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Bet } from '../types/bet';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore: Firestore = inject(Firestore);

  constructor(
  ) {}

  getCollection(items: string) {
    return collection(this.firestore, items);
  }

  async store(item: Bet) {
    const newItem = await addDoc(collection(this.firestore, 'bets'), <Bet>item);
    await this.addIdToItem(newItem.id);
    return newItem;
  }

  remove(id: string) {
    const documentRef = doc(this.firestore, 'bets', id);
    return deleteDoc(documentRef);
  }

  addIdToItem(id: string) {
    const documentRef = doc(this.firestore, 'bets', id);
    return updateDoc(documentRef, {id});
  }

  update(id: string, newData: any) {
    const documentRef = doc(this.firestore, 'bets', id);
    return updateDoc(documentRef, newData);
  }
}
