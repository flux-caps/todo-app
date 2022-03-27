<?php

namespace  FluxCap\TodoApp\ApiGateway\Core\Ports;

class ApiGatewayService {

    private ApiGatewayEventSourcedApp\ApiGatewayEventSourcedAppClient $apiGatewayEventSourcedAppClient;

    private function __construct(ApiGatewayEventSourcedApp\ApiGatewayEventSourcedAppClient $apiGatewayEventSourcedAppClient)
    {
        $this->apiGatewayEventSourcedAppClient = $apiGatewayEventSourcedAppClient;
    }

    public static function new(Configs\Outbounds $outbounds) : self
    {
        return new self($outbounds->getApiGatewayEventSourcedAppClient());
    }

    public function initialize() {
        $this->apiGatewayEventSourcedAppClient->initialize();
    }

}