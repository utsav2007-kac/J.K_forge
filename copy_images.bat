@echo off
echo Creating images folder...
mkdir "d:\J.K\images" 2>nul

echo Copying and renaming images...
copy /Y "C:\Users\iGen Systems\.gemini\antigravity-ide\brain\f4c75a8b-a373-4203-8cc8-22fcf1133774\hero_bg_1785742596711.png" "d:\J.K\images\hero-bg.jpg"
copy /Y "C:\Users\iGen Systems\.gemini\antigravity-ide\brain\f4c75a8b-a373-4203-8cc8-22fcf1133774\automotive_1785742677418.png" "d:\J.K\images\automotive.jpg"
copy /Y "C:\Users\iGen Systems\.gemini\antigravity-ide\brain\f4c75a8b-a373-4203-8cc8-22fcf1133774\gear_1785742693122.png" "d:\J.K\images\gear.jpg"
copy /Y "C:\Users\iGen Systems\.gemini\antigravity-ide\brain\f4c75a8b-a373-4203-8cc8-22fcf1133774\facility_1785742712070.png" "d:\J.K\images\facility.jpg"
copy /Y "C:\Users\iGen Systems\.gemini\antigravity-ide\brain\f4c75a8b-a373-4203-8cc8-22fcf1133774\hero_bg_1785742596711.png" "d:\J.K\images\page-bg.jpg"
copy /Y "C:\Users\iGen Systems\.gemini\antigravity-ide\brain\f4c75a8b-a373-4203-8cc8-22fcf1133774\media__1785752094086.png" "d:\J.K\images\logo.png"

echo.
echo Images successfully installed into d:\J.K\images!
echo You can now close this window.
pause
