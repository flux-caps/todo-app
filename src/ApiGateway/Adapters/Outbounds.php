<?php

namespace FluxCap\TodoApp\ApiGateway\Adapters;

use FluxCap\TodoApp\ApiGateway\{Adapters, Core\Ports};
use fluxApiGatewayEventSourcedApp;
use fluxValueObject;

class Outbounds implements Ports\Configs\Outbounds
{

    private function __construct()
    {

    }

    public static function new() : self
    {
        return new self();
    }

    public function initialize() : void
    {
        fluxApiGatewayEventSourcedApp\initialize();
    }

    public function command(string $correlationId, string $actorEmail, string $requestUri, array $requestContent) : void
    {
        fluxApiGatewayEventSourcedApp\command($correlationId, $actorEmail, $requestUri, $requestContent);
    }

    public function query(
        string $correlationId,
        string $actorEmail,
        string $requestUri,
        array $requestContent
    ) : array {
        return fluxApiGatewayEventSourcedApp\query($correlationId, $actorEmail, $requestUri, $requestContent);
    }


    final public function getNewUuid(): string
    {
        return fluxValueObject\getNewUuid();
    }
}