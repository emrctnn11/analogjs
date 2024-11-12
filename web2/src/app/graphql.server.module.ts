import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [GraphQLModule, ServerModule],
  bootstrap: [AppComponent],
})
export class GraphQLServerModule {}
