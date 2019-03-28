#!/bin/bash

#随机数,表示随机一个30以内的数
randNum1=$(($RANDOM%25))
randNum2=$(($RANDOM%25))
currentTime=`date "+%Y-%m-%d %H:%M:%S"`

path="/etc/crontab"
path_log="/root/wwwroot/m.jandou.com/data/runlog.txt"

#生成crontab 任务配置文件


echo "SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root

# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed

# 每120分钟运行一次
120 * * * * root . /root/cache.sh
# 每60分钟执行一次
1 9-18  * * * root node /root/house/app.js
" > $path

echo "
# 每周 1 ~ 5 的 9:00 ~ 9:25 ，随机时间，执行一次
"$[randNum1]" 9 * * 1-5 node /root/qiandao/app.js" >> $path

echo "
# 每周 1 ~ 5 的 18:00 ~ 18:25 ，随机时间，执行一次
"$[randNum2]" 18 * * 1-5 node /root/qiandao/app.js" >> $path

echo "
# 每周 1 ~ 5 的 06:00，执行一次，用于自动生成 crontab 配置
0 6 * * 1-5 node /root/qiandao/timing.sh" >> $path

echo "#生成时间："$currentTime >> $path
echo "
生成 crontab 配置成功！" >> $path_log

#设置可执行权限
# chmod 777 $path

# #使用crontab 命令添加到定时任务
# crontab $path

# #重启服务
service crond restart

echo "重启 crond 服务成功！
时间："$currentTime"
****************************" >> $path_log

cat $path