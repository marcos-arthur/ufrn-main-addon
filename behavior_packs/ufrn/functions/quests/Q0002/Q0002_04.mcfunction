function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 3 run function ui/clear_objective
execute if score ufrn:subphase_tick ufrn matches 5 run execute positioned 200.56 -24.00 113.31 if entity @a run camera @a fade time 1 3 1 color 255 255 255
execute if score ufrn:subphase_tick ufrn matches 25 run execute positioned 200.56 -24.00 113.31 if entity @a run teleport @a 67.31 -9.00 -486.70
title @a times 10 50 10
execute if score ufrn:subphase_tick ufrn matches 5 run titleraw @a title { "rawtext": [ { "translate": "ufrn.bus.route.title", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 5 run titleraw @a subtitle { "rawtext": [ { "translate": "ufrn.bus.route.circular.direto.subtitle", "with": ["\n"] }]} 
# execute if score ufrn:subphase_tick ufrn matches 5 run
# execute if score ufrn:subphase_tick ufrn matches 5 run 
execute if score ufrn:subphase_tick ufrn matches 80 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.9"}]}
execute if score ufrn:subphase_tick ufrn matches 80 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 160 run scoreboard players set ufrn:objective ufrn 203
execute if score ufrn:subphase_tick ufrn matches 160 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned 64.41 -8.50 -477.67 if entity @a[tag=Q0002_02,r=5,rm=0] run function event/on_subphase_complete


