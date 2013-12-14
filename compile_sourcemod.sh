#!/bin/bash

test -e ../plugins || mkdir ../plugins
SOURCEMOD=~/current_work/sourcemod/scripting

if [[ $# -ne 0 ]]
then
    for i in "$@"; 
    do
        smxfile="`echo $i | sed -e 's/\.sp$/\.smx/'`";
	    echo -n "Compiling $i...";
	    $SOURCEMOD/spcomp $i -i"$PWD/include" -o"../plugins/$smxfile" -w203 -w204
    done
else

for sourcefile in *.sp
do
	smxfile="`echo $sourcefile | sed -e 's/\.sp$/\.smx/'`"
	echo -n "Compiling $sourcefile ..."
	$SOURCEMOD/spcomp $sourcefile -o"../plugins/$smxfile" -w203 -w204
done
fi
