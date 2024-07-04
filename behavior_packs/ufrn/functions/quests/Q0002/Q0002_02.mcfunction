function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 5 run function ui/clear_objective
title @a times 10 50 10
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a title { "rawtext": [ { "translate": "ufrn.Q0002.start.title", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a subtitle { "rawtext": [ { "translate": "ufrn.Q0002.start.subtitle", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_quest_start
execute if score ufrn:subphase_tick ufrn matches 70 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.1"}]}
execute if score ufrn:subphase_tick ufrn matches 70 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 118 run scoreboard players set ufrn:objective ufrn 201
execute if score ufrn:subphase_tick ufrn matches 118 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 300 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.2"}]}
execute if score ufrn:subphase_tick ufrn matches 300 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 1200 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.3"}]}
execute if score ufrn:subphase_tick ufrn matches 1200 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 2400 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.4"}]}
execute if score ufrn:subphase_tick ufrn matches 2400 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 2400 run scoreboard players set ufrn:path ufrn 200
execute if score ufrn:subphase_tick ufrn matches 3000 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.5"}]}
execute if score ufrn:subphase_tick ufrn matches 3000 run function event/on_walkietalkie_speak
# execute if score ufrn:subphase_tick ufrn matches 600 run execute positioned 207.59 -24.00 113.13 if entity @a[tag=Q0002_01,r=5,rm=0] run function event/on_subphase_complete
execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned 207.59 -24.00 113.13 if entity @a[tag=Q0002_01,r=5,rm=0] run function event/on_subphase_complete
