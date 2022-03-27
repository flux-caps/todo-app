<?php

namespace FluxCap\TodoApp\ApiGateway\Core\Ports\ApiGatewayEventSourcedApp;

interface ApiGatewayEventSourcedAppClient
{
    public function initialize() : void;
}
