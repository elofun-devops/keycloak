#!/usr/bin/env bash
set -ex

# ./mvnw -pl quarkus/deployment,quarkus/dist -am -DskipTests install

java -jar quarkus/server/target/lib/quarkus-run.jar start-dev \
    --https-certificate-file=/home/thoai/keycloak/certfile.pem \
    --https-certificate-key-file=/home/thoai/keycloak/keyfile.pem \
    --https-port 8443
