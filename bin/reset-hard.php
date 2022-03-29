<?php

require_once __DIR__ . '/../vendor/autoload.php';

$gitClient = \FluxEco\GitClient\Adapters\Api\GitClientApi::new();

$commitMessage = $argv[1];

$gitClient->gitResetHard(
    [
        __DIR__ . '/../vendor/flux-eco/aggregate-root',
        __DIR__ . '/../vendor/flux-eco/api-gateway-event-sourced-app',
        __DIR__ . '/../vendor/flux-eco/biotope',
        __DIR__ . '/../vendor/flux-eco/git-client',
        __DIR__ . '/../vendor/flux-eco/global-stream',
        __DIR__ . '/../vendor/flux-eco/json-schema-assertion',
        __DIR__ . '/../vendor/flux-eco/json-schema-document',
        __DIR__ . '/../vendor/flux-eco/json-schema-instance',
        __DIR__ . '/../vendor/flux-eco/open-api-client',
        __DIR__ . '/../vendor/flux-eco/projection',
        __DIR__ . '/../vendor/flux-eco/shell-executor',
        __DIR__ . '/../vendor/flux-eco/storage',
        __DIR__ . '/../vendor/flux-eco/ui-transformer',
        __DIR__ . '/../vendor/flux-eco/value-object',
        __DIR__ . '/../webinterface',
        __DIR__ . '/..',
    ],
    'main'
);