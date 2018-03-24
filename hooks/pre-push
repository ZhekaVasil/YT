#!/bin/sh
# Wiki push

wikiFolder="YT.wiki"
wikiStatus=$(git status ./$wikiFolder --porcelain)

if [ -e ./$wikiFolder ]
then
  if [[ "$wikiStatus" = *"M $wikiFolder"* ]]
  then
  echo 'Wiki has changed'
  fi
else
  echo 'Wiki page is absent in your local repository'
fi

