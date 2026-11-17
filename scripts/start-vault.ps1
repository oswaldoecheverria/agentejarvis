<#
.SYNOPSIS
    Inicia la galería web local de UI Vault en http://localhost:3333
.DESCRIPTION
    Arranca el servidor Vite ultra-ligero para visualizar y gestionar tus componentes locales.
#>

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path "$PSScriptRoot\..").Path
$viewerDir = Join-Path $repoRoot "viewer"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Iniciando UI Vault - Galeria Local" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si el puerto 3333 ya está en uso
$portInUse = Get-NetTCPConnection -LocalPort 3333 -ErrorAction SilentlyContinue

if ($portInUse) {
    Write-Host "  [i] UI Vault ya esta corriendo en: http://localhost:3333" -ForegroundColor Green
    Start-Process "http://localhost:3333"
    exit 0
}

Write-Host "  [+] Arrancando servidor local en segundo plano..." -ForegroundColor Yellow

$proc = Start-Process powershell -ArgumentList "-Command Set-Location '$viewerDir'; pnpm dev" -WindowStyle Hidden -PassThru

Start-Sleep -Seconds 2

Write-Host "  [OK] UI Vault listo en: http://localhost:3333" -ForegroundColor Green
Write-Host "  PID del proceso: $($proc.Id)" -ForegroundColor Gray
Write-Host "  Para detenerlo ejecuta: .\scripts\stop-vault.ps1" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan

# Abrir el navegador por comodidad
Start-Process "http://localhost:3333"
