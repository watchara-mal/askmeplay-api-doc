FROM nginx:1.19.9-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/ /usr/share/nginx/html