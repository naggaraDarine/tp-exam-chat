# Utilise l'image Nginx
FROM nginx:alpine

# Copier le fichier index.html dans le dossier par défaut de Nginx
COPY index.html /usr/share/nginx/html/index.html

# Expose le port 80
EXPOSE 80

