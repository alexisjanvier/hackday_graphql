# hackday_graphql

## Development

### Run the API
```sh
cd api
make run
```

### Run the client
```sh
cd api
make run
```

## Deployments
```sh
    CLIENT_URL=http://client-hackday-apollo.now.sh REACT_APP_API_URL=http://api-hackday-apollo.now.sh make deploy
```

In the console you should have received two temporary urls, one for the API and another for the client.

```sh
  now alias [URL_FOR_API] api-hackday-apollo.now.sh
  now alias [URL_FOR_CLIENT] client-hackday-apollo.now.sh
```