<?php

namespace FluxCap\TodoApp\ApiGateway\Adapters\Api;

use FluxCap\TodoApp\ApiGateway\{Adapters, Core\Ports};

class ApiGatewayApi
{
    private Ports\ApiGatewayService $apiGatewayService;

    private function __construct(Ports\ApiGatewayService $apiGatewayService)
    {
        $this->apiGatewayService = $apiGatewayService;
    }

    public static function new() : self
    {
        $apiGatewayService = Ports\ApiGatewayService::new(Adapters\Configs\Outbounds::new());
        return new self($apiGatewayService);
    }

    public function initialize() {
        $this->apiGatewayService->initialize();
    }
}