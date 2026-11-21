<#
.SYNOPSIS
Checks the CivicSpan hardware quote endpoint.
.DESCRIPTION
By default, checks JSON response headers and rejects an incomplete quote.
Use -SendTestQuote to submit one valid synthetic request through the configured
email provider. The provider may deliver it to the configured quote inbox.
.EXAMPLE
./scripts/test-form-backend.ps1
.EXAMPLE
./scripts/test-form-backend.ps1 -TargetUrl 'http://localhost:3000/api/hardware-quote' -SendTestQuote
#>
#Requires -Version 7.0

[CmdletBinding()]
param (
    [uri]$TargetUrl = 'http://localhost:3000/api/hardware-quote',
    [string]$TestEmail = 'procurement-test@civicspanitgroup.com',
    [switch]$SendTestQuote
)

$ErrorActionPreference = 'Stop'
$payload = @{
    kind           = 'hardware-quote'
    name           = 'TEST - James Mercer'
    role           = 'Procurement specialist'
    company        = 'TEST - Synthetic quote request'
    email          = $TestEmail
    phone          = '703-555-0144'
    zip            = '22102'
    procurement    = 'Virginia state or local procurement (SWaM participation)'
    vendors        = @('Dell Technologies', 'Cisco')
    quantity       = '12 workstations'
    specifications = 'TEST ONLY. 64 GB RAM and OpenRoads compatibility.'
    timeline       = 'Urgent deployment (within 30 days)'
}

$expectedStatus = 400
if ($SendTestQuote) {
    $expectedStatus = 200
    Write-Host 'Submitting one synthetic quote to the configured delivery provider.'
} else {
    $payload.Remove('specifications')
}

$timer = [System.Diagnostics.Stopwatch]::StartNew()
$response = Invoke-WebRequest -Uri $TargetUrl -Method Post `
    -ContentType 'application/json; charset=utf-8' `
    -UserAgent 'CivicSpan Quote Smoke Test/1.0' `
    -Body ($payload | ConvertTo-Json -Depth 4) -TimeoutSec 15 `
    -MaximumRedirection 0 -SkipHttpErrorCheck
$timer.Stop()

if (($response.Headers['Content-Type'] -join ', ') -notmatch '^application/json(?:\s*;|$)') {
    throw "Expected a JSON response from $TargetUrl (HTTP $($response.StatusCode))."
}

$result = $response.Content | ConvertFrom-Json
if ($response.StatusCode -ne $expectedStatus) {
    throw "Expected HTTP $expectedStatus but received $($response.StatusCode). $($result.error)"
}
if ($result.success -isnot [bool] -or $result.success -ne $SendTestQuote.IsPresent) {
    throw 'Unexpected success flag in the response.'
}
if (-not $SendTestQuote -and $result.error -notlike 'Complete the required quote fields*') {
    throw 'The endpoint did not return the expected quote validation error.'
}

if ($SendTestQuote -and $result.confirmationAccepted -ne $true) {
    throw 'The quote was accepted, but the provider did not accept the customer confirmation.'
}

Write-Host "PASS: HTTP $($response.StatusCode), JSON response, $($timer.ElapsedMilliseconds) ms."
