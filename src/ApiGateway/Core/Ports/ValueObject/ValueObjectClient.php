<?php


namespace FluxCap\TodoApp\ApiGateway\Core\Ports\ValueObject;

interface ValueObjectClient
{
    public function createUuid(): string;
    public function createCurrentTime(): string;
}