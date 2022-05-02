#import node pour utiliser npm
FROM node:latest

#créer / designe un repertoire fictif
WORKDIR  /app

#Copie le ficher  
COPY package.json ./

# permet d'insaller les dependances du ficher package.json
RUN npm install 

#copier le repertoire du projet
COPY . .

#lance l'application avec npm start
CMD [ "npm", "start" ] 
