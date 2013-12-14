#!/usr/bin/python
import shutil
import sys
import SRCDS
import socket

#The path to our dev server's Sourcemod plugin folder
destination = "/home/bill/servers/srcds/tf2/tf/addons/sourcemod/plugins/"
#destination = "C:/Program Files (x86)/Valve/HLServer/orangebox/tf/addons/sourcemod/plugins"
#destination = "M:\Programming\Sourcemod\compile"

#copy file to destination
try:
	smx = "../plugins/" + sys.argv[1] + ".smx"
	print "Copying ", smx, " to ", destination
	shutil.copy(smx, destination)
except:
	print "file not found"

#Login to our server
#serverAddress = socket.gethostbyname(socket.gethostname())
serverAddress = "192.168.1.xxx"
try:
    server = SRCDS.SRCDS(serverAddress, 27015, "xxx")
    print "[SRCDS] Reloading sourcemod"
    server.say("[SRCDS] Reloading sourcemod")
    server.rcon_command("sm plugins unload_all")
    server.rcon_command("sm plugins refresh")
    print "[SRCDS] Reload completed"
    server.say("[SRCDS] Reload completed")

except:
    print "[SRCDS] Could not connect to server ", serverAddress

print "end of script"
