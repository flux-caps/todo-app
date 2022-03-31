# todo-app
This example application shows how the components of 
https://github.com//flux-eco can be used in interaction with each other.

## Requirements
* Docker: version >= 20.10
* docker-compose: >= v2.3.3
* npm: >= 6.14

## Run it
Clone the repository
```
git clone https://git.fluxlabs.ch/fluxlabs/flux-caps/todo-app.git
```
Change to the app directory 
```
cd todo-app
```
Update the submodules
```
git submodule update --init
```
Run in a first terminal
```
docker-compose up
```
Run in a second terminal
```
php bin/startWebinterfaceInDevMode.php
```
Acess webinterface by http://localhost:8001/

## Contributing :purple_heart:
Please ...
1. ... register an account at https://git.fluxlabs.ch
2. ... create pull requests :fire:


## Adjustment suggestions / bug reporting :feet:
Please ...
1. ... register an account at https://git.fluxlabs.ch
2. ... ask us for a Service Level Agreement: support@fluxlabs.ch :kissing_heart:
3. ... read and create issues
