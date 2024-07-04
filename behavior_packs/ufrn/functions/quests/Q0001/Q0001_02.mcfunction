function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 5 run function ui/clear_objective
title @a times 10 50 10
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a title { "rawtext": [ { "translate": "ufrn.Q0001.start.title", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a subtitle { "rawtext": [ { "translate": "ufrn.Q0001.start.subtitle", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_quest_start

execute if score ufrn:subphase_tick ufrn matches 80 run scoreboard players set ufrn:objective ufrn 151
execute if score ufrn:subphase_tick ufrn matches 80 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 90 run function event/on_subphase_complete