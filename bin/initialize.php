<?php

require_once 'vendor/autoload.php';

$gatewayApi = FluxCap\TodoApp\ApiGateway\Adapters\Api\ApiGatewayApi::new();

$gatewayApi->initialize();