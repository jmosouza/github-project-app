# GitHub Project App

## Examining GitHub API

This is the first time I’m using GitHub API so I took some time to exam the documentation. The first thing I looked for was authentication. There seems to be two main ways to authenticate through the API: OAuth2 and Basic Authorization. The former is more secure, but requires server-to-server communication and that’s out of the scope of this assignment. The latter is simpler and works fine with a browser-only app and so I chose that one.

After that, I examined how I would fetch an organization’s projects using the API. GitHub’s documentation on projects is a work in progress and not all endpoints are documented. So I started a Postman project to try out the endpoints on my own. Soon I realized I wouldn’t be able to fetch a real organization’s projects because I don’t have a Team account. Instead, I decided I would use the signed-in user’s projects.

## Performance considerations

Although using the signed-in user is fine in place of an organization, it causes a little more overhead because there is no single “user’s projects” endpoint, and so the app will need to fetch the projects endpoint once for each repository. Even if that weren’t true, after a project is fetched it is necessary to request all its columns, and for each column, all the cards. If all that is not managed in an organized manner, it could easily start hundreds of simultaneous requests and impact performance seriously.

Fortunately, there is a smooth way to handle this situation. `redux-saga` is library on top of `redux` that aims to make application side effects (i.e. networking) easier to manage. Although I had never used it before, I knew it was the right tool for the job so I took some time to learn it. It’s the right tool because it allows to loop through a user’s projects asynchronously, but fetch one at a time, avoiding the danger of parallel requests. It’s different from other async libraries such as `redux-thunk` because it executes one task at a time.

## Authentication

I started the project by writing the authentication logic. I often prefer to start by writing the fundamental React components, but this time I did it differently for two reasons:

- I need authentication to request the other endpoints
- It's a good flow to try `redux-saga` for the first time

Authentication has two side effects: making network requests and configuring the HTTP library and the saga did handle both nicely. Although React doesn't require this, I named the form fields (e.g. "username") so any browser and password manager can suggest auto-fill options.

# Project organization

Writing the authentication flow was also a good opportunity to define the organization for the React and Redux pieces of the project. I decided every domain of the app would include a components folder, a containers folder and a set of files as needed: actions, action types, sagas, reducers and selectors. In actions, I'd only write formal functions for those that need parameters and those that are used in containers -- all the others are simple enough to rely only on action types. Action types follow a pattern like "DOMAIN:SUBDOMAIN:WHAT_HAPPENED". Reducers follow a similar pattern: "domain.subdomain.data".

## Switching to the dashboard

After the user authenticates successfully, the app should show the dashboard. The most React-ish way to handle browser paths is `react-router`. It's declarative and easy to use. Ideally, the authentication saga that I wrote should use a child library called `react-router-redux` to change the path (`/dashboard`) after login, but due to a recent change in the library's API, I was unable to do it that way. As a workaround, to avoid spending too much time on this, I passed `react-router`'s "history" property from the AuthForm component to the redux action. This can be addressed later.

I took care to ensure that the user is redirected to login if they attempt to manually enter `/dashboard` in the URL without being authenticated.

## The dashboard

The dashboard should show all projects for the authenticated user. Using GitHub's API for projects was no trivial task. The entities are too nested. The structure is: repository >> projects >> columns >> cards. It took a couple of hours until I finally got a working saga that fetched an entire project and appended it to the app's state. But it was well worth the effort. It works beautifully and smoothly.

After that, I proceeded to writing the dashboard's React components and all the redux wirings. At this point I had a working version of the app, but it still needed a lot of polishing, which I describe next.

## Persisting state

I was having a hard time testing the dashboard because every time I changed a component, webpack reloads the app and so the app loses state. To fix that, I used a library called `redux-persist`. It keeps state in local storage so the app's data is there after reloading or closing the browser.

This change, however, was not enough. Not all state lives in redux. I had to refactor a few components to re-configure Basic Authentication on the HTTP library (`axios`) every time the app mounts. That chained changes in the auth flow and a few components, took extra time, but that's part of the job.

## Styles

For styles I used Bulma, the CSS framework. It comes with ready-to-use components and matches GitHub's overall design. To save time, I just used class names, but that could be improved. I could have written reusable React components with the corresponding CSS classes. That would make it easier to keep up with new versions of the CSS framework if, say, a class name changes in the future, because there would be only one place to change: the React component. But I was short of time so I didn't do that.

## Polishing

After styling the components, I just took some time to fix React warnings (such as adding keys to repeated children), remove debug configuration and delete `console.log`s spread across the code base.

## Git

For each development step I started a new git branch. Whenever I made a larger commit, I added a description below the commit message summarizing the purpose of the change. I followed most best practices described in this article: https://chris.beams.io/posts/git-commit/ the exception being I didn't wrap lines at 72 characters :) Sorry for that, the git UI soft-wraps the text for me.

## Conclusion

At this point I have a production-ready MVP of the app that shows the authenticated user's projects. It's not interactable, but it demonstrates many concepts I use in React apps:

- Breaking down React components into reusable pieces
- Breaking down redux actions and reducers into manageable parts
- Handling APIs and other side effects asynchronously
- Observing details that enhance user experience and security
- Organizing the project in a scalable manner
- Following best practices
- Studying new ways to solve specific requirements

This project took me 8 hours to complete. That's more than expected because I invested time to deliver more than what was asked -- not on number of features, but on range of skills and organization. I hope you like my solution and I'd like to know your impressions. I welcome all feedback and advice.

João Marcelo Oliveira de Souza <joaomarcelo9393@gmail.com>
