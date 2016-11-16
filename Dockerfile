FROM node:6-slim
ADD app.js app.js
EXPOSE 8080
ENTRYPOINT ["nodejs","app.js"]
