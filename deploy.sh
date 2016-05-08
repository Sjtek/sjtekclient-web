#! /bin/bash

webroot=/var/sjteklocal/config/nginx/html

read -p "This will clean $webroot. Press [Enter] to continue."

rm -rfv $webroot/*

echo "\nCopying files..."
cp -rv old/ $webroot/old
cp -rv dashboard/ $webroot/screen
cp -rv control-panel/* $webroot/