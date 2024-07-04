function setup/world
function dev/remove_alltags
function ui/clear_objective
function dev/hide_debug
function setup/Q0001/setup
tag @s add Q0000
execute if block 352 -54 226 iron_door["direction"=1,"open_bit"=true] run setblock 352 -56 226 minecraft:air
scoreboard players set ufrn:phase ufrn 0
tp @s 349.43 -54.00 228.88