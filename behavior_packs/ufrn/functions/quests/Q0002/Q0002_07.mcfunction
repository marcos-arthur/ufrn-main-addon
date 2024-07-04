function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 5 run function ui/clear_objective
title @a times 10 50 10
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a title { "rawtext": [ { "translate": "ufrn.Q0002.conclusion.title", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a subtitle { "rawtext": [ { "translate": "ufrn.Q0002.conclusion.subtitle", "with": ["\n"] }]}
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_quest_complete
execute if score ufrn:subphase_tick ufrn matches 100 run execute positioned -221.03 -17.00 -619.80 if entity @a[tag=XQ0002,r=5,rm=0] run function play/Q0006