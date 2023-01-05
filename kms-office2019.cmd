@REM 使用kms激活office 2019
cscript //Nologo %windir%\system32\cscript.exe "%~dp0office2019.vbs"
cscript //Nologo %windir%\system32\slmgr.vbs /skms kms.lidong.xin
cscript //Nologo %windir%\system32\slmgr.vbs /ato
cscript //Nologo %windir%\system32\slmgr.vbs /xpr
