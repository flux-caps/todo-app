<?php

require_once '../vendor/autoload.php';

$gitClient = \FluxEco\GitClient\Adapters\Api\GitClientApi::new();

$commitMessage = $argv[1];

$gitClient->gitCheckoutCommitAndPublish(
    [
        '../vendor/flux-eco/aggregate-root',
        '../vendor/flux-eco/api-gateway-event-sourced-app',
        '../vendor/flux-eco/biotope',
        '../vendor/flux-eco/git-client',
        '../vendor/flux-eco/global-stream',
        '../vendor/flux-eco/http',
        '../vendor/flux-eco/json-schema-assertion',
        '../vendor/flux-eco/json-schema-document',
        '../vendor/flux-eco/json-schema-instance',
        '../vendor/flux-eco/open-api-client',
        '../vendor/flux-eco/projection',
        '../vendor/flux-eco/shell-executor',
        '../vendor/flux-eco/storage',
        '../vendor/flux-eco/ui-transformer',
        '../vendor/flux-eco/value-object',
        '..',
    ],
    'main',
    $commitMessage
);