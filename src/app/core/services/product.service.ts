import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import ApolloClient from 'apollo-client';
import { getCategories } from '../typeDefs/queries/categories.graphql';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private apollo: Apollo) { }

  getCategories(){
    return this.apollo.watchQuery({query: getCategories}).valueChanges;
  }
}
