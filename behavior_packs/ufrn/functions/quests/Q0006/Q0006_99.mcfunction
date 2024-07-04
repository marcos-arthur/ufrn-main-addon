function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 5 run function ui/clear_objective
title @a times 10 50 10
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a title { "rawtext": [ { "translate": "ufrn.Q0006.failed.title", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a subtitle { "rawtext": [ { "translate": "ufrn.Q0006.failed.subtitle", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_quest_failed
execute if score ufrn:subphase_tick ufrn matches 2 run tag @a add Q0006_07
execute if score ufrn:subphase_tick ufrn matches 80 run scoreboard players set ufrn:objective ufrn 603
execute if score ufrn:subphase_tick ufrn matches 100 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0006.walkietalkie.13"}]}
execute if score ufrn:subphase_tick ufrn matches 100 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 150 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 150 run function event/on_subphase_complete