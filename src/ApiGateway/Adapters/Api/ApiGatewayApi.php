<?php

namespace FluxCap\TodoApp\ApiGateway\Adapters\Api;

use FluxCap\TodoApp\ApiGateway\{Adapters, Core\Ports};
use Swoole\Http;

class ApiGatewayApi
{
    private Ports\ApiGatewayService $apiGatewayService;
    const REQUEST_TYPE_COMMAND = 'command';
    const REQUEST_TYPE_QUERY = 'query';

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

    final public function handleHttpRequest(Http\Request $request): array
    {
        $requestUri = $request->server['request_uri'];
        $requestType = $this->getRequestType($requestUri);
        //todo
        $actorEmail = 'actor@fluxlabs.ch';

        switch ($requestType) {
            case self::REQUEST_TYPE_COMMAND:
                $requestContent = [];
                if (!empty($request->getContent())) {
                    $requestContent = json_decode($request->getContent(), true);
                }
                $this->apiGatewayService->command($actorEmail, $requestUri,  $requestContent);
                return ['status' => 'success'];
            case self::REQUEST_TYPE_QUERY:
                $requestContent = [];
                if (!empty($request->get)) {
                    $requestContent = $request->get;
                }
                return $this->apiGatewayService->query($actorEmail, $requestUri,  $requestContent);
        }
    }

    private function getRequestType(string $requestUri): string
    {
        if (str_contains($requestUri, self::REQUEST_TYPE_COMMAND)) {
            return self::REQUEST_TYPE_COMMAND;
        }

        if (str_contains($requestUri, self::REQUEST_TYPE_QUERY)) {
            return self::REQUEST_TYPE_QUERY;
        }

        throw new \RuntimeException('No valid Request Type found for requestUri: ' . $requestUri);
    }
}