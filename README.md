# thierry.beer - personal homepage

Personal homepage with more coffee jokes that are accepted by the society.

## Setup

To run the project in a local development environment, follow these steps:

1. Clone the repository.
2. Install dependencies using `pnpm install`.
3. Start the development server with `pnpm dev`.

## Docker

To run the project in a Docker container, follow these steps:

1. Clone the repository.
2. Update the docker-compose file. Remove networking and add `ports: ['8080:80']`.
3. Run `docker-compose up` to start the container.
