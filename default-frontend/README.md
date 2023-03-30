# CHECK24 GenDev Holiday Challenge: Default Frontend

This folder includes a simple implementation for a frontend that can be used to complete the challenge.
You can either:
- use it as is and just implement the missing backend
- use it but make changes to it when necessary
- implement your own frontend

## Getting Started

The project makes use of next.js 13 (and thereby also react, node and npm).
Make sure that you have node, npm and docker installed.

You can start the project locally by running:
1. `docker compose up -d` (this starts a mocked version of the backend to give the frontend some sample data => you will have to replace that mock with your own backend)
2. `npm i` (installs all required dependencies on your machine)
3. `npm run dev` (starts a server that listens on port 3000 => you can now open localhost:3000 in your browser and should see the running frontend)

When you open the app inside your browser you should then see a search form.
You can use the form to run searches.
These will perform queries of type 1 (see the [top level README.md](../README.md)).
Don't be surprised that your searches to not really change the data that is returned for your searches (remember, this is only mocked data).

When you select one of the offers you get to a second page.
This one shows you a list of offers.
To get these offer a query of type 2 has been executed for a specific hotel (see the [top level README.md](../README.md)).

## Regenerate types
The frontend generates its types from an openapi spec that defines the API of the backend.
If you want to make changes to that openapi spec (because you want to change the backend's API), you can regenerate these types by running:
`npx openapi-client-axios-typegen ./apimock/__files/openapi.json > app/types/openapi.d.ts`
