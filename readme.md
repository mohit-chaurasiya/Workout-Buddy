M: MongoDb (Database)
E: ExpressJs (Backend)
R: ReactJs (Frontend)
N: NodeJs (Backend)

## Frontend (browser / Client Side) Backend (Server) Db

          React App                         ExpressJsNodeJs                       MonogDb

# Backend:

npm init -y
npm i express
npm i -g nodemon
npm i dotenv

## Running :-

npm run dev

## API Endpoints:

GET /workouts --> Get all the Workout Docs
Post /workouts --> Create a new workout docs
GET /workouts/:id --> Get a single workout doc
DELETE /workouts/:id --> Deletes a singe workouts
PATCH /workouts/:id --> Updates a singe workout
