Credits to Jincod for the building the buildpack and the template to use it

## Usage

```bash
npm install
dotnet restore
dotnet run -p src/jsonapexgeneratorcore/jsonapexgeneratorcore.csproj
npm start
```

## Deploy to Heroku

### Manual

Using custom buildpack [dotnetcore-buildpack](https://github.com/jincod/dotnetcore-buildpack)

```bash
heroku buildpacks:set https://github.com/jincod/dotnetcore-buildpack
heroku buildpacks:add --index 1 heroku/nodejs
```

[Using Multiple Buildpacks for an App](https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app)
