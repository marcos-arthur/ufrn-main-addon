
function event/on_tickable_subphase 
execute if score ufrn:subphase_tick ufrn matches 5 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0006.walkietalkie.11"}]}
execute if score ufrn:subphase_tick ufrn matches 5 run function event/on_walkietalkie_speak

execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute if block -255.50 -10.00 -573.50 minecraft:lever["lever_direction"="up_east_west","open_bit"=true] run setblock -212.50 -17.00 -613.50 minecraft:redstone_torch



execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute if block -255.50 -10.00 -573.50 minecraft:lever["lever_direction"="up_east_west","open_bit"=false] run setblock -212.50 -17.00 -613.50 minecraft:air



execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned -256.69 -10.00 -574.49 unless entity @a[tag=Q0006_03,r=2,rm=0] run scoreboard players set ufrn:subphase ufrn 3






