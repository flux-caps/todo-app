<?php

namespace FluxCap\TodoApp\ApiGateway\Core\Ports;

class Service
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
        $this->outbounds->initialize();
    }

    public function command(string $actorEmail, string $requestUri, array $requestContent) : void
    {
        $correlationId = $this->outbounds->getNewUuid();
        $this->outbounds->command($correlationId, $actorEmail, $requestUri,
            $requestContent);
    }

    public function query(string $actorEmail, string $requestUri, array $requestContent) : array
    {
        $correlationId = $this->outbounds->getNewUuid();
        return $this->outbounds->query($correlationId, $actorEmail, $requestUri, $requestContent);
    }

}