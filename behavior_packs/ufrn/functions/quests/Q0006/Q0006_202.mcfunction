
function event/on_tickable_subphase 
execute if score ufrn:subphase_tick ufrn matches 5 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0006.walkietalkie.11"}]}
execute if score ufrn:subphase_tick ufrn matches 5 run function event/on_walkietalkie_speak

# Alavanca ligada
execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute if block -249.54 -8.00 -656.44 minecraft:lever["lever_direction"="up_north_south","open_bit"=true] run setblock -212.69 -17.00 -615.54 minecraft:redstone_torch


# Alavanca Desligada
execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute if block -249.54 -8.00 -656.44 minecraft:lever["lever_direction"="up_north_south","open_bit"=false] run setblock -212.69 -17.00 -615.54 minecraft:air


# Saida
execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned -248.44 -8.00 -657.86 unless entity @a[tag=Q0006_02,r=2,rm=0] run scoreboard players set ufrn:subphase ufrn 3





