import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GraphQLModule } from './app/graphql.module';
import 'zone.js';

platformBrowserDynamic()
  .bootstrapModule(GraphQLModule)
  .catch((err) => console.error(err));

  if (typeof window !== 'undefined') {
    import('./apollo-client').then(({ default: client }) => {
      //
    });
  }

