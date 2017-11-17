Visual Cell
=================

#### Install:
```
$ git clone git@github.com:allen-cell-animated/base-react-redux-app.git

$ ./gradlew npmInstall
```

#### Configuration:

| Env var | Default | Options |
| ------- |-------- |---------|
|`PORT`   | 9002    |         |
|`DEPLOYMENT_ENV`    | dev     | "dev", "staging", "production" |


Differences in builds by environment:

| Target | Sources Maps |  NODE_ENV === 'production' |
| ------ | ------------ |  ------------------------- |
| dev    | true         |  false                     |
| staging| true         |  true                      |
|production| false      |  true                      |


#### Developing:
To run this application in development, run `$ ./gradlew start`. This will start `webpack-dev-server`, running by default
on port 9002. To view, visit `http://localhost:9002`. Webpack-dev-server will watch all relevant files, and reload the browser
automatically.
