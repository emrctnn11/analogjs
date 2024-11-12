import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloLink, InMemoryCache } from '@apollo/client/core/core.cjs';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        const link = httpLink.create({ uri: 'http://localhost:3000/graphql' });
        return {
          cache: new InMemoryCache(),
          link: ApolloLink.from([link]),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
