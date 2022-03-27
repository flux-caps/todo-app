<?php


require_once __DIR__ . '/../vendor/autoload.php';
$shellExecutor = FluxEco\ShellExecutor\Adapters\Api\ShellExecutorApi::new();

$navigateToDirectory = 'cd '.__DIR__ . '/../webinterface';
$installWebinterface = 'npm install';
$startWebinterface = 'npm start';

$shellExecutor->execute(
    [
        $navigateToDirectory,
        $installWebinterface,
        $startWebinterface
    ]
);