<?php

require_once __DIR__ . '/../vendor/autoload.php';

$gatewayApi = FluxCap\TodoApp\ApiGateway\Adapters\Api\Api::new();

$gatewayApi->initialize();