function event/on_tickable_subphase
scoreboard players set ufrn:path ufrn 100
execute if score ufrn:subphase_tick ufrn matches 5 run function ui/clear_objective
title @a times 10 50 10
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a title { "rawtext": [ { "translate": "ufrn.Q0001.conclusion.title", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a subtitle { "rawtext": [ { "translate": "ufrn.Q0001.conclusion.subtitle", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_quest_complete
execute if score ufrn:subphase_tick ufrn matches 100 run execute positioned 381.83 -22.00 187.42 if entity @e[tag=XQ0001,r=6,rm=0] run function play/Q0002