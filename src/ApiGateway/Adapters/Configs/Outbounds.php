<?php

namespace FluxCap\TodoApp\ApiGateway\Adapters\Configs;

use FluxCap\TodoApp\ApiGateway\{Adapters, Core\Ports};

class Outbounds implements Ports\Configs\Outbounds
{

    private function __construct()
    {

    }

    public static function new() : self
    {
        return new self();
    }

    public function getApiGatewayEventSourcedAppClient(
    ) : Ports\ApiGatewayEventSourcedApp\ApiGatewayEventSourcedAppClient
    {
        return Adapters\ApiGatewayEventSourcedApp\ApiGatewayEventSourcedAppClient::new();
    }

    public function getValueObjectClient(): Ports\ValueObject\ValueObjectClient {
        return Adapters\ValueObject\ValueObjectClient::new();
    }
}