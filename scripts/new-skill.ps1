<#
.SYNOPSIS
    Crea el scaffold de una nueva skill en agentepersonal.
.PARAMETER SkillName
    Nombre de la skill en minúsculas y con guiones (ej: "mi-nueva-skill").
.EXAMPLE
    .\new-skill.ps1 -SkillName "code-reviewer"
#>

param (
    [Parameter(Mandatory=$true)]
    [string]$SkillName
)

$ErrorActionPreference = "Stop"
$agentRepoRoot = (Resolve-Path "$PSScriptRoot\..").Path
$skillDir      = Join-Path $agentRepoRoot "skills\$SkillName"
$skillFile     = Join-Path $skillDir "SKILL.md"

if (Test-Path $skillDir) {
    Write-Error "❌ La skill '$SkillName' ya existe en: $skillDir"
    exit 1
}

New-Item -ItemType Directory -Path $skillDir -Force | Out-Null
New-Item -ItemType Directory -Path "$skillDir\scripts"   -Force | Out-Null
New-Item -ItemType Directory -Path "$skillDir\references" -Force | Out-Null

$template = @"
---
name: $SkillName
description: >-
  [REQUERIDO] Describe aquí cuándo el agente debe activar esta skill.
  Escribe en tercera persona. Sé específico sobre el tipo de tarea y el contexto.
  Ejemplo: "Usar cuando el usuario pida revisar código en busca de vulnerabilidades de seguridad."
---

# Skill: $SkillName

[Describe brevemente qué hace esta skill y su objetivo principal.]

## Prerequisitos

- [Lista cualquier archivo, herramienta o contexto necesario antes de comenzar]

## Pasos

1. **Paso 1**: [Descripción clara de la acción]
   - Detalle adicional si es necesario.

2. **Paso 2**: [Descripción clara de la acción]

3. **Verificación**: [Cómo confirmar que el paso fue exitoso]

## Notas

- [Advertencias, casos especiales o decisiones de diseño importantes]

## Referencias

- [Links a documentación en references/ si aplica]
"@

Set-Content -Path $skillFile -Value $template -Encoding UTF8

Write-Host ""
Write-Host "  ✅ Skill '$SkillName' creada en:" -ForegroundColor Green
Write-Host "     $skillFile" -ForegroundColor Gray
Write-Host ""
Write-Host "  Próximo paso:" -ForegroundColor Cyan
Write-Host "    1. Edita el SKILL.md con las instrucciones reales." -ForegroundColor Gray
Write-Host "    2. Agrega scripts de ayuda en scripts\ si necesitas." -ForegroundColor Gray
Write-Host "    3. Haz commit: git add . && git commit -m 'feat(skills): add $SkillName'" -ForegroundColor Gray
Write-Host ""
