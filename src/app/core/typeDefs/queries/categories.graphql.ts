import gql from 'graphql-tag';

export const getCategories = gql`
    {
        categories{
            children {
      enName
      color
      isActive
    }
    enName
  }
}
 `

 export interface Cateogry {
     enName: string;
     children: { enName: string , color: string, isActive:boolean}
 }
