
function event/on_tickable_subphase 
execute if score ufrn:subphase_tick ufrn matches 0 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0006.walkietalkie.10"}]}
execute if score ufrn:subphase_tick ufrn matches 0 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 10 run execute as @a at @s run playsound ufrn:sentinela_error @s ~ ~ ~ 1.00 1.00 0.5


execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned -248.44 -8.00 -657.86 unless entity @a[tag=Q0006_01,r=2,rm=0] run scoreboard players set ufrn:subphase ufrn 3
execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned -248.44 -8.00 -657.86 if entity @a[tag=Q0006_01,tag=Q0006_02,r=2,rm=0] run scoreboard players set ufrn:subphase ufrn 3




