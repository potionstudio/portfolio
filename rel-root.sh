# you can custom target_file 
target_file='./dist/index.html'

ab_path='=\"/'
re_path='=\"/.'

sed -i 's/$ab_path/$re_path/g' $target_file

echo "========== rel-root.sh =========="
echo "$target_file was converted to relative path from absolute path!"