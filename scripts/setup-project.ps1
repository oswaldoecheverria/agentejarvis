<#
.SYNOPSIS
    Instala el agente (skills + AGENTS.md) en un proyecto nuevo o existente.
.PARAMETER ProjectPath
    Ruta del directorio del proyecto destino (ej: F:\proyectos\mi-proyecto).
.PARAMETER UpdateSkills
    Si se especifica, actualiza/sobreescribe las skills existentes en el proyecto.
.EXAMPLE
    .\setup-project.ps1 -ProjectPath "F:\proyectos\mi-proyecto"
    .\setup-project.ps1 -ProjectPath "F:\proyectos\mi-proyecto" -UpdateSkills
#>

param (
    [Parameter(Mandatory=$true)]
    [string]$ProjectPath,

    [switch]$UpdateSkills
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $ProjectPath)) {
    Write-Error "El directorio no existe: $ProjectPath"
    exit 1
}

$agentRepoRoot  = (Resolve-Path "$PSScriptRoot\..").Path
$skillsSource   = Join-Path $agentRepoRoot "skills"
$agentsDir      = Join-Path $ProjectPath ".agents"
$skillsDest     = Join-Path $agentsDir "skills"
$agentsFile     = Join-Path $ProjectPath "AGENTS.md"
$templateFile   = Join-Path $agentRepoRoot "rules\AGENTS.template.md"
$projectName    = (Get-Item $ProjectPath).Name

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  AgentKit - Instalando en: $projectName" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Crear carpeta .agents si no existe
if (-not (Test-Path $agentsDir)) {
    New-Item -ItemType Directory -Path $agentsDir -Force | Out-Null
    Write-Host "  [+] Creada carpeta .agents" -ForegroundColor Green
}

# 2. Copiar skills
if ((Test-Path $skillsDest) -and -not $UpdateSkills) {
    Write-Host "  [~] Skills ya existen. Usa -UpdateSkills para actualizar." -ForegroundColor Yellow
} else {
    if (Test-Path $skillsDest) {
        Remove-Item -Path $skillsDest -Recurse -Force
        Write-Host "  [*] Actualizando skills existentes..." -ForegroundColor Cyan
    } else {
        Write-Host "  [+] Copiando skills..." -ForegroundColor Green
    }
    Copy-Item -Path $skillsSource -Destination $skillsDest -Recurse -Force
    $skillCount = (Get-ChildItem $skillsDest -Directory).Count
    Write-Host "      -> $skillCount skills instaladas" -ForegroundColor Gray
}

# 3. Crear AGENTS.md si no existe (NO sobreescribir si ya hay uno personalizado)
if (-not (Test-Path $agentsFile)) {
    $content = Get-Content $templateFile -Raw
    $content = $content.Replace("{{PROJECT_NAME}}", $projectName)
    Set-Content -Path $agentsFile -Value $content -Encoding UTF8
    Write-Host "  [+] Creado AGENTS.md base (personalizalo para tu proyecto!)" -ForegroundColor Green
} else {
    Write-Host "  [~] AGENTS.md ya existe - no fue modificado." -ForegroundColor Yellow
}

# 4. Resumen
Write-Host ""
Write-Host "  [OK] Agente instalado en $ProjectPath!" -ForegroundColor Green
Write-Host ""
Write-Host "  Skills disponibles:" -ForegroundColor Cyan
Get-ChildItem $skillsSource -Directory | ForEach-Object {
    Write-Host "    - $($_.Name)" -ForegroundColor Gray
}
Write-Host ""
Write-Host "  Proximo paso: edita $projectName\AGENTS.md con las reglas especificas del proyecto." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
