say Rodou função reset

tag @initiator remove Q0006_01
tag @initiator remove Q0006_02
tag @initiator remove Q0006_03
tag @initiator remove Q0006_04
tag @initiator remove Q0006_05
tag @initiator remove Q0006_06
tag @initiator remove Q0006_07

# tp @initiator -221.94 -17.00 -619.20
scoreboard players set ufrn:phase ufrn 6
scoreboard players set ufrn:subphase ufrn 0
kill @e[name=sentinela]
structure load sentinela_t2 -248.43 -5.17 -656.70 0_degrees none true false false
structure load sentinela_t4 -255.55 -8.00 -574.56 0_degrees none true false false
structure load sentinela_t5 -260.30 -10.00 -532.47 0_degrees none true false false
structure load sentinela_t7 -179.50 -6.00 -525.42 0_degrees none true false false
setblock -212.56 -17.00 -615.48 minecraft:air
setblock -212.50 -17.00 -613.52 minecraft:air
setblock -212.46 -17.00 -612.49 minecraft:air
setblock -212.52 -17.00 -610.48 minecraft:air

setblock -249.49 -8.00 -656.43 minecraft:lever["lever_direction"="up_north_south","open_bit"=true]
setblock -209.52 -7.00 -629.45 minecraft:lever["lever_direction"="up_north_south","open_bit"=true]
setblock -251.53 -9.00 -615.53 minecraft:lever["lever_direction"="up_east_west","open_bit"=true]
setblock -255.43 -10.00 -573.46 minecraft:lever["lever_direction"="up_east_west","open_bit"=true]
setblock -260.43 -12.00 -531.58 minecraft:lever["lever_direction"="up_east_west","open_bit"=true]
setblock -218.50 -12.00 -530.46 minecraft:lever["lever_direction"="up_north_south","open_bit"=true]
setblock -179.54 -8.00 -526.57 minecraft:lever["lever_direction"="up_east_west","open_bit"=true]