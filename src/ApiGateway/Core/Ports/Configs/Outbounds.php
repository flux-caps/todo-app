<?php

namespace FluxCap\TodoApp\ApiGateway\Core\Ports\Configs;

use  FluxCap\TodoApp\ApiGateway\Core\Ports;

interface Outbounds
{
    public function getApiGatewayEventSourcedAppClient(
    ) : Ports\ApiGatewayEventSourcedApp\ApiGatewayEventSourcedAppClient;

    public function getValueObjectClient() : Ports\ValueObject\ValueObjectClient;
}