#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'submit' &&
git remote add origin git@github.com:silent-cat/my-bookkeeping-website.git &&
git branch -M main &&
git push origin main -f
cd -
