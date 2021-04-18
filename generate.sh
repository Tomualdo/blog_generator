#!/usr/bin/env bash
rm -v $(dirname $0)/dst/.files
ssg5 $(dirname $0)/src $(dirname $0)/dst "MyBlog" "myURL"
sudo cp -vr $(dirname $0)/dst/* /var/www/html
