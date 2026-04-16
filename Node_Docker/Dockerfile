
# From -> create new build images from old images
FROM  node:22

# ? all the package and my files places here inisde the container 

WORKDIR /app   

# ? copy package.json to the /app dir we can use . or /app for the desination 
COPY package.json .

RUN npm install

COPY . ./

EXPOSE 4004

CMD [ "npm" , "run" , "dev" ]


