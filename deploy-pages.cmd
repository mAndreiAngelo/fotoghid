@echo off
rem Rebuilds the site and republishes it to GitHub Pages (gh-pages branch).
rem Run this after any content change to update the live site.
setlocal
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"
set "DEPLOY_TARGET=pages"
call npm run build
if errorlevel 1 (
  echo Build failed - nothing was published.
  exit /b 1
)
type nul > out\.nojekyll
cd out
git init -q -b gh-pages
git add -A
git -c user.name="mAndreiAngelo" -c user.email="m.andrei.angelo@gmail.com" commit -q -m "Publicare pe GitHub Pages"
git -c credential.helper= -c "credential.helper=!gh auth git-credential" push -f https://github.com/mAndreiAngelo/fotoghid.git gh-pages
cd ..
rmdir /s /q out\.git
echo.
echo Publicat: https://mandreiangelo.github.io/fotoghid/
endlocal
