FROM fluxms/flux-eco-biotope:latest AS flux-ecosystem

ENV UI_DEFINITIONS_DIRECTORY="/app/schemas/ui"
ENV FLUXECO_AGGREGATEROOT_DIRECTORY="/app/vendor/flux-eco/aggregate-root"
ENV FLUXECO_PROJECTION_DIRECTORY="/app/vendor/flux-eco/projection"
ENV AGGREGATEROOT_API_FQCN="\FluxEco\AggregateRoot\Adapters\Api\AggregateRootApi"
ENV PROJECTION_API_FQCN="\FluxEco\Projection\Adapters\Api\ProjectionApi"
ENV USERINTERFACE_API_FQCN="\FluxEco\UiTransformer\Adapters\Api\UserInterfaceApi"
ENV PROJECTION_JSON_SCHEMA_DIRECTORY="/app/schemas/projections"
ENV TRANSLATION_FILES_DIRECTORY="/app/schemas/translations"
ENV APP_ABAC_SCHEMA_DIRECTORY="/app/schemas/Abac"
ENV APP_PROJECTION_SCHEMA_DIRECTORY="/app/schemas/projections"
ENV APP_AGGREGATEROOT_SCHEMA_DIRECTORY="/app/schemas/domain"
ENV ECO_PROJECTION_SCHEMA_DIRECTORY="/app/vendor/flux-eco/projection/src/schemas"
ENV ASYNCAPI_SCHEMA_FILE_PATH="/app/schemas/asyncapi.yaml"
ENV DIRECTORY_PATH_CONFIGURATION_FILES="/app/data/configs"
ENV STREAM_JSON_SCHEMA_FILE="/app/vendor/flux-eco/global-stream/src/Core/Domain/State.yaml"
ENV FILE_SHARE_DIRECTORY_PATH="/app/data"
ENV DIRECTORY_PATH_SRC_FILES="/app/vendor/flux-eco"
ENV URN_PREFIX="ch:flux-ecosystem"
ENV DIRECTORY_IMPORT_DEFINITION_FILES="/app/configs/definitions/imports"
ENV DIRECTORY_SCHEMA_OBJECT_FILES="/app/configs/schemas/objects"
ENV PROJECTION_MYSQL_HOST="flux-projection-storage"
ENV PROJECTION_MYSQL_DRIVER="Pdo_Mysql"
ENV PROJECTION_MYSQL_DATABASE="projection"
ENV EVENTS_MYSQL_HOST="flux-event-storage"
ENV EVENTS_MYSQL_DRIVER="Pdo_Mysql"
ENV EVENTS_MYSQL_DATABASE="events"
ENV STREAM_MYSQL_HOST="flux-globalstream-storage"
ENV STREAM_MYSQL_DRIVER="Pdo_Mysql"
ENV STREAM_MYSQL_DATABASE="stream"
ENV STREAM_MYSQL_TABLE="stream"
ENV MYSQL_PORT=3306

USER root
RUN apk --no-cache add mariadb-client
COPY --chown=www-data:www-data . /app/

USER www-data
WORKDIR /app
RUN composer install # --no-dev
EXPOSE 8010
ENTRYPOINT ["sh", "docker_entrypoint.sh"]

FROM nginx:1.21.6 AS webinterface
ENV NGINX_API_DOWNSTREAM="flux-ecosystem"

COPY "./nginx/html/dist" "/usr/share/nginx/html/"
COPY "./nginx/configs/default.conf.template" "/etc/nginx/templates/"
