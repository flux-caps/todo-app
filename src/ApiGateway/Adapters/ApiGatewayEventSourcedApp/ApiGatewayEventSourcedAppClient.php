<?php

namespace FluxCap\TodoApp\ApiGateway\Adapters\ApiGatewayEventSourcedApp;

use FluxCap\TodoApp\ApiGateway\Core\{Ports};
use FluxEco\ApiGatewayEventSourcedApp\Adapters\Api\ApiGatewayEventSourcedAppApi;

class ApiGatewayEventSourcedAppClient implements Ports\ApiGatewayEventSourcedApp\ApiGatewayEventSourcedAppClient
{
    private ApiGatewayEventSourcedAppApi $apiGatewayEventSourcedAppApi;

    private function __construct(ApiGatewayEventSourcedAppApi $apiGatewayEventSourcedAppApi)
    {
        $this->apiGatewayEventSourcedAppApi = $apiGatewayEventSourcedAppApi;
    }

    public static function new() : self
    {
        return new self(ApiGatewayEventSourcedAppApi::new());
    }

    public function initialize() : void
    {
        $this->apiGatewayEventSourcedAppApi->initialize();
    }
}