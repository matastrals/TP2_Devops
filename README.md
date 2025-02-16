# <p align="center">TP - WIK-DPS-TP01</p>

## Configuration 

Pour lancer le projet il faut que vous fassiez les commandes suivantes à la racine du projet :

- npm install
- npx tsc
- node .\build\index.js 

Vous pouvez également changer le port d'écoute (par défault 3000) en éxécutant la commande :

*(Windows CMD)* - ```set PING_LISTEN_PORT={port_choisis}```

*(Windows Powershell)* - ```$env:PING_LISTEN_PORT={port_choisis}```

*(Linux)* - ```export PING_LISTEN_PORT={port_choisis}```

Vous avez maintenant un serveur web qui tourne et que vous pouvez accéder à [http://localhost:3000](http://localhost:3000)

## Qu'est ce ?

C'est un petit server web développer en TypeScript.
Le serveur tourne en local et peut renvoyer 2 status au client : 

- Si la requète est sur http://localhost:{port_choisis}/ping et en méthode GET alors il renvoit les headers de la requète en format json
- Sinon il renvoit un statut 404 vide.
