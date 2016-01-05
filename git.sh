git status

read -n1 -r -p "Proceed to add all"

git add -A

git status

read -n1 -r -p "Proceed to commit"
echo "Type commit mesage: "
read message

git commit -m "$message"

git push origin

echo "rebasing with master"

git checkout gh-pages
git rebase master
git push origin gh-pages
git checkout master
