import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'web2-analog-welcome',
  standalone: true,
  template: `
    <main class="main">
      <section class="intro-section">
        <div class="intro-container">
          <img
            class="intro-logo"
            src="https://analogjs.org/img/logos/analog-logo.svg"
            alt="AnalogJs logo. Two red triangles and a white analog wave in front"
          />
          <a
            class="intro-badge"
            target="_blank"
            href="https://twitter.com/analogjs"
            >Follow along on Twitter</a
          >
          <h1 class="intro-heading">
            <span class="intro-analog">Analog.</span> The fullstack Angular
            meta-framework
          </h1>
          <p class="intro-description">
            Analog is for building applications and websites with Angular.
            <br />Powered by Vite.
          </p>
          <div class="btn-container">
            <a class="darkBtn" href="https://analogjs.org">Read the docs</a>
            <a
              target="_blank"
              rel="noreferrer"
              class="lightBtn"
              href="https://github.com/analogjs/analog"
              >Star on GitHub</a
            >
          </div>
        </div>
      </section>
      <section id="counter-demo" class="section">
        <div class="counter-container">
          <h2 class="counter-heading">Counter</h2>
          <p class="counter-description">
            This is a simple interactive counter. Powered by Angular.
          </p>
          <button (click)="increment()" class="lightBtn">
            Count: <span class="count">{{ count }}</span>
          </button>
        </div>
      </section>
    </main>
  `,
})
export class AnalogWelcomeComponent implements OnInit {
  GET_USERS = gql`
    query getUsers_query($input: PaginatedUserInput) {
      getUsers(input: $input) {
        email
        id
        name
        phone
        role
        username
      }
    }
  `;

  queryRef = this.apollo.watchQuery({
    query: this.GET_USERS,
    variables: {
      input: {
        limit: 10,
        offset: 0,
      },
    },
    fetchPolicy: 'cache-first',
  });

  count = 0;
  increment() {
    this.count++;
  }

  constructor(private readonly apollo: Apollo) {}

  ngOnInit() {
    this.queryRef.valueChanges.subscribe((result) => {
      const data: any = result.data;
      console.log(data.getUsers);
    });
  }
}
