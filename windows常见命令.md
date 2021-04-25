### windows常见命令

1.cd 切换目录

2.中断命令执行 Ctrl + Z

3.dir 显示目录中的内容

4.tree 显示目录结构

5.md 创建目录

6.rd 删除目录

7.copy 拷贝文件

例：copy key.txt c:\doc // 将当前目录下的key.txt拷贝到c:\doc下（若doc中也存在一个key.txt文件，会询问是否覆盖）

8.xcopy 更强大的复制命令

例：xcopy c:\bat\hai d:\hello\ /s /h /e /f /c // 将c:\bat\hai中的所有内容拷贝到d:\hello中 注意：需要在hello后加上\ 表示hello为一个目录，否则xcopy会询问hello是F，还是D

9.move 移动文件

例：move *.png test // 将当前目录下的png图片移动到当前目录下test文件夹中 （若test中也存在同名的png图片，会询问是否覆盖）

10.del 删除文件 注意：目录及子目录都不会删除

例：del test // 删除当前目录下的test文件夹中的所有非只读文件（子目录下的文件不删除；删除前会进行确认；等价于del test*）

11.