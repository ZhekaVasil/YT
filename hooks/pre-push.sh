#!/bin/sh
# Wiki push

wikiFolder="YT.wiki"
wikiStatus=$(git status ../$wikiFolder --porcelain)

if [ -e ../$wikiFolder ]
then
  if [[ "$wikiStatus" = *"M $wikiFolder"* ]]
  then
  echo 'Wiki has changed'
  cd ../$wikiFolder
  git add -A
  git commit -m "Wiki update"
  git push origin master
  echo 'Wiki has been pushed'
  fi
else
  echo 'Wiki page is absent in your local repository'
fi

