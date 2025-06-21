# Portfolio

## Git setup after installation
  - git config --global user.email "xyz@email.com" (for set email in the config)
  - git config --global user.name "xyz" (for set name in the config)
  - git config --list (for check all config list)
  - ssh-keygen -t ed25519 -C "xyz@email.com" (it will generate public and private key in a specific file like "/c/Users/ratul/.ssh/id_ed25519")
  go to that location open id_ed25519.pub and copy the code from there.
  - github=>setting=>ssh and gpg keys=>add new ssh key=>give any title,key type should be signing key, pest the key in the key field=> save.

## Initial git in a project
  - rm -rf .git (remove git from project)
  - git init (initialize git)
  - git add . (add all file in staging mode)
  - git commit -m "initial commit" (commit all file meanse save)

## If we already create a github repo having readme.md and our code is ready in our system with some commits, then bellow steps we need to follow for push.
  - git branch -M main (rename the current brunch to main)
  - git remote add origin https://github.com/Sourav-personal/- - - portfolio.git (use this for add the remote origin)
  - git remote -v (use for check that successfully added the fetch and push remote origin)
  - git pull origin main --allow-unrelated-histories (it will pull all code from there and allow all unrelated-histories)
  - git add .
  - git commit -m "Resolve merge conflict in README.md" (it will comit all merge and conflict)
  - git push --set-upstream origin main (push local code to remote branch --set-upstream tracking relationship between local and remote)
  - git push -u origin main --force (forcefully update all changes in github)
  - git checkout -b dev (create development branch and copy all code from main branch)
  - git brunch (check total exsting branch)
  - git checkout master (for switch branch)
  - git marge dev (for marge branch)

## If we create new blank reposetory without readme.md fle, and in our local system the code is already commited, then bellow steps we need to follow for push.
  - git init
  - git add .
  - git commit -m "first commit"
  - git branch -M main
  - git remote add origin git@github.com:ratulbmg/test.git
  - git push -u origin main

## For fork and contribute in a project
  - git clone git@github.com:ratulbmg/test.git (for clone the project)
  - cd test
  - git add .
  - git commit -m "feature add"
  - git push