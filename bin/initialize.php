<?php

require_once __DIR__ . '/../vendor/autoload.php';

$gatewayApi = FluxCap\TodoApp\ApiGateway\Adapters\Api\ApiGatewayApi::new();

$gatewayApi->initialize();