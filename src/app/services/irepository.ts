import { Observable } from 'rxjs/Observable';

export interface IRepository<T> {

  getAll(): Observable<T[]>;

  get(id: string): Observable<T>;

  add(entity: T): void;

  update(id: string, entity: T): void;

  delete(id: string): void;
}
