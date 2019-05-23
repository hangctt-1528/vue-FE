FROM node:latest
 
# install simple http server for serving static content
RUN npm install -g @vue/cli
 
#RUN vue create pos
 
#RUN vue add @vue/pwa
 
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build
 
EXPOSE 8080
