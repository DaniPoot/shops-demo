# Project Title

This is a repository for a FullStack Challenge

## Demo

- [Backend](https://shops-demo.onrender.com)
- [Frontend](https://shops-demo-blush.vercel.app)

## Run Locally

Clone the project

```bash
  git clone https://github.com/DaniPoot/shops-demo
```

Go to the project directory

```bash
  cd my-project
```

Go to backend or frontend directory

```bash
 cd frontend # or backend
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
### backend
```js
MONGODB_URI="MONGODB_URI"
JWT_SECRET="JWT_SECRET"
```

### frontend
```js
VITE_MAPBOX="MAXPBOX_KEY"
VITE_API_URL="http://localhost:3001/api"
VITE_SUPABASE_URL="VITE_SUPABASE_URL"
VITE_SUPABASE_PUBLIC_KEY="VITE_SUPABASE_PUBLIC_KEY"
```

## Demo

Insert gif or link to demo


## Roadmap

- [x] Create a project
- [x] Create a server
- [x] Create connection with mongodb
- [x] Add authentication
- [x] Add validations
- [x] Create ubications crud
  - [x] Create
  - [x] Update
  - [x] Delete
