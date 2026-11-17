<#
.SYNOPSIS
    Detiene la galería web local de UI Vault
#>

$ErrorActionPreference = "SilentlyContinue"

Write-Host ">>> Deteniendo UI Vault en el puerto 3333..." -ForegroundColor Cyan

$connections = Get-NetTCPConnection -LocalPort 3333 -ErrorAction SilentlyContinue

if (-not $connections) {
    Write-Host "[i] No hay ningun proceso activo en el puerto 3333." -ForegroundColor Yellow
    exit 0
}

$pids = $connections | Select-Object -ExpandProperty OwningProcess -Unique

foreach ($pidToKill in $pids) {
    Stop-Process -Id $pidToKill -Force -ErrorAction SilentlyContinue
    Write-Host "[+] Proceso detenido (PID: $pidToKill)" -ForegroundColor Green
}

Write-Host "[OK] UI Vault ha sido detenido." -ForegroundColor Green
