# <p align="center">TP - WIK-DPS-TP02</p>

## Configuration 

Pour lancer le projet il faut que vous ayez docker d'installé.
Après avoir récupérer le repo, placez vous à la racine puis lancez la commande :
- ```docker build -t api-single .``` puis ```docker run -p 3000:3000 api-single```
ou
- ```docker build -f Dockerfile2 -t api-multi .``` puis ```docker run -p 3000:3000 api-multi```

Vous avez maintenant un serveur web qui tourne et que vous pouvez accéder à [http://localhost:3000](http://localhost:3000)


