# build
FROM gradle:6.8.3-jdk11 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon

# run
FROM openjdk:14-jdk-alpine

WORKDIR /app

COPY --from=build /home/gradle/src/build/libs/backend-1.0.jar backend-1.0.jar

ENTRYPOINT ["java","-jar","backend-1.0.jar"]