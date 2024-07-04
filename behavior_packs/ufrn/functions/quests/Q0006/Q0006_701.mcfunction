#say rodou torre 7
function event/on_tickable_subphase 
execute if score ufrn:subphase_tick ufrn matches 5 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0006.walkietalkie.11"}]}
execute if score ufrn:subphase_tick ufrn matches 5 run function event/on_walkietalkie_speak

execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute if block -179.45 -8.00 -526.51 minecraft:lever["lever_direction"="up_east_west","open_bit"=true] run setblock -212.43 -17.00 -610.47 minecraft:redstone_torch




execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute if block -179.45 -8.00 -526.51 minecraft:lever["lever_direction"="up_east_west","open_bit"=false] run setblock -212.43 -17.00 -610.47 minecraft:air




execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned -178.46 -8.00 -525.49 unless entity @a[tag=Q0006_05,r=2,rm=0] run scoreboard players set ufrn:subphase ufrn 3

