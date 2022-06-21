# FROM nginx:1.15.2-alpine
# COPY ./build /var/www
# COPY ./nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80
# ENTRYPOINT ["nginx","-g","daemon off;"]

FROM nginx:alpine
COPY ./build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
