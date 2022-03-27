<?php

namespace FluxCap\TodoApp\ApiGateway\Core\Ports;

class ApiGatewayService
{

    private Configs\Outbounds $outbounds;

    private function __construct(Configs\Outbounds $outbounds)
    {
        $this->outbounds = $outbounds;
    }

    public static function new(Configs\Outbounds $outbounds) : self
    {
        return new self($outbounds);
    }

    public function initialize()
    {
        $this->outbounds->getApiGatewayEventSourcedAppClient()->initialize();
    }

    public function command(string $actorEmail, string $requestUri, array $requestContent) : void
    {
        $correlationId = $this->outbounds->getValueObjectClient()->createUuid();
        $this->outbounds->getApiGatewayEventSourcedAppClient()->command($correlationId, $actorEmail, $requestUri,
            $requestContent);
    }

    public function query(string $actorEmail, string $requestUri, array $requestContent) : array
    {
        $correlationId = $this->outbounds->getValueObjectClient()->createUuid();
        return $this->outbounds->getApiGatewayEventSourcedAppClient()->query($correlationId, $actorEmail, $requestUri, $requestContent);
    }

}