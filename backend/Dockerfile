# Utiliser Node.js 20
FROM node:20-alpine

# Créer le dossier app
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code
COPY . .

# Exposer le port
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]

