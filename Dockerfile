FROM cypress/included:13.6.2
WORKDIR /app
COPY . /app
RUN npm install
RUN npx cypress verify
CMD ["npx","cypress","run"]