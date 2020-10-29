#!/usr/bin/env sh

# abort on errors
set -e

git pull
git add -A
git commit -m "[#11] feat: .env로 dev / build 환경 구분 자동화"
git push origin master

# build
vuepress build
# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy with vuepress'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Kyounghwan01/blog.git master:gh-pages

cd -
