<?php

namespace FluxCap\TodoApp\ApiGateway\Core\Ports;

interface Outbounds
{
    function initialize() : void;

    public function command(string $correlationId, string $actorEmail, string $requestUri, array $requestContent) : void;

    public function query(
        string $correlationId,
        string $actorEmail,
        string $requestUri,
        array $requestContent
    ) : array;

    public function getNewUuid(): string;
}