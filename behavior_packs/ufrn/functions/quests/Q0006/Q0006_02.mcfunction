function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 5 run function ui/clear_objective
title @a times 10 50 10
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a title { "rawtext": [ { "translate": "ufrn.Q0006.start.title", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a subtitle { "rawtext": [ { "translate": "ufrn.Q0006.start.subtitle", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_quest_start

execute if score ufrn:subphase_tick ufrn matches 70 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0006.walkietalkie.1"}]}
execute if score ufrn:subphase_tick ufrn matches 70 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 118 run scoreboard players set ufrn:objective ufrn 602
execute if score ufrn:subphase_tick ufrn matches 118 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 119 run function event/on_timer_enable
execute if score ufrn:subphase_tick ufrn matches 119 run scoreboard players set ufrn:timer ufrn 300
execute if score ufrn:subphase_tick ufrn matches 121 run function event/on_subphase_complete


