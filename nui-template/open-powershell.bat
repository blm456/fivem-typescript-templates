@echo off
REM Always open Powershell in the directory where the .bat is
REM even if the path contains square brackets

cd /d "%~dp0"

powershell.exe -NoExit -Command "Set-Location -LiteralPath '%CD%'"
