<#
.SYNOPSIS
    Vincula el Agente Personal (skills y reglas base) a un proyecto nuevo o existente.
.PARAMETER ProjectPath
    Ruta del directorio del proyecto (ej: F:\proyectos\mi-proyecto).
.PARAMETER UseSymlink
    Si es $true, crea un Junction (enlace simbólico de Windows) para que los cambios en agentepersonal
    se reflejen automáticamente en tiempo real. Por defecto es $true.
#>

param (
    [Parameter(Mandatory=$true)]
    [string]$ProjectPath,

    [switch]$CopyInsteadOfLink
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $ProjectPath)) {
    Write-Error "El directorio del proyecto especificado no existe: $ProjectPath"
}

$agentRepoRoot = (Resolve-Path "$PSScriptRoot\..").Path
$skillsSource = Join-Path $agentRepoRoot "skills"
$agentsDir = Join-Path $ProjectPath ".agents"
$skillsDest = Join-Path $agentsDir "skills"
$agentsFile = Join-Path $ProjectPath "AGENTS.md"
$templateFile = Join-Path $agentRepoRoot "rules\AGENTS.template.md"
$projectName = (Get-Item $ProjectPath).Name

Write-Host ">>> Configurando Agente Personal para: $projectName ($ProjectPath)..." -ForegroundColor Cyan

# 1. Crear carpeta .agents
if (-not (Test-Path $agentsDir)) {
    New-Item -ItemType Directory -Path $agentsDir -Force | Out-Null
}

# 2. Enlazar o copiar skills
if (Test-Path $skillsDest) {
    Write-Host "[-] La carpeta de skills ya existe en el proyecto. Omitiendo enlace." -ForegroundColor Yellow
} else {
    if ($CopyInsteadOfLink) {
        Write-Host "[+] Copiando skills a: $skillsDest..." -ForegroundColor Green
        Copy-Item -Path $skillsSource -Destination $skillsDest -Recurse -Force
    } else {
        Write-Host "[+] Creando enlace simbólico (Junction) hacia: $skillsDest..." -ForegroundColor Green
        cmd /c mklink /J "$skillsDest" "$skillsSource" | Out-Null
    }
}

# 3. Crear AGENTS.md si no existe
if (-not (Test-Path $agentsFile)) {
    Write-Host "[+] Creando AGENTS.md base a partir de la plantilla..." -ForegroundColor Green
    $content = Get-Content $templateFile -Raw
    $content = $content.Replace("{{PROJECT_NAME}}", $projectName)
    Set-Content -Path $agentsFile -Value $content -Encoding UTF8
} else {
    Write-Host "[-] El archivo AGENTS.md ya existe en el proyecto. No fue modificado." -ForegroundColor Yellow
}

Write-Host "`n>>> ¡Agente Personal configurado exitosamente en $ProjectPath!" -ForegroundColor Green
Write-Host "Habilidades disponibles:" -ForegroundColor Cyan
Get-ChildItem $skillsSource | ForEach-Object { Write-Host "  - $($_.Name)" }
