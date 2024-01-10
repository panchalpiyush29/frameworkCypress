FROM cypress/included:13.6.2
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run test
CMD ["npm","run","test"]