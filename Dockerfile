From node:14.16.1
#AS build

RUN mkdir /var/www
RUN mkdir /var/www/shadow-root-prj
RUN npm install -g @angular/cli@12.2.7 @angular-devkit/build-angular

Workdir /var/www/shadow-root-prj

# COPY . /var/www/shadow-root-prj
COPY package.json package-lock.json ./

RUN npm i
# RUN npm run build

# FROM nginx:latest

# COPY --from=build /var/www/shadow-root-prj /usr/share/nginx/html
# COPY ./shadow-root.conf /etc/nginx/conf.d/
# EXPOSE 80
# ENTRYPOINT ['/var/www/shadow-root-prj/ng']
# CMD ['server', '--host', '0.0.0.0', '--port', '4200']
