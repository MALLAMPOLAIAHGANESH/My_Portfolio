@echo off
echo ===================================================
echo Pushing Portfolio changes to GitHub...
echo ===================================================
cd /d "%~dp0"

git remote remove origin 2>nul
git remote add origin https://github.com/MALLAMPOLAIAHGANESH/My_Portfolio

git add .
git commit -m "pushed"
git branch -M main
git push -u origin main --force

echo ===================================================
echo Done! Press any key to close.
echo ===================================================
pause
