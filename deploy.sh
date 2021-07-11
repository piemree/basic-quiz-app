#!/usr/bin/env sh
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'