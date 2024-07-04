
function event/on_tickable_subphase 
execute if score ufrn:subphase_tick ufrn matches 5 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0006.walkietalkie.11"}]}
execute if score ufrn:subphase_tick ufrn matches 5 run function event/on_walkietalkie_speak

execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute if block -260.52 -12.00 -531.48 minecraft:lever["lever_direction"="up_east_west","open_bit"=true] run setblock -212.56 -17.00 -612.51 minecraft:redstone_torch



execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute if block -260.52 -12.00 -531.48 minecraft:lever["lever_direction"="up_east_west","open_bit"=false] run setblock -212.56 -17.00 -612.51 minecraft:air



execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned -261.58 -12.00 -532.47 unless entity @a[tag=Q0006_04,r=2,rm=0] run scoreboard players set ufrn:subphase ufrn 3





