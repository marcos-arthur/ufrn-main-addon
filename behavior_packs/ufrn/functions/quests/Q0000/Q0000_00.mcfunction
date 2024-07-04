function event/on_tickable_subphase

execute if score ufrn:subphase_tick ufrn matches 5 run function ui/clear_objective
title @a times 10 50 10
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a title { "rawtext": [ { "translate": "ufrn.Q0000.start.title", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run titleraw @a subtitle { "rawtext": [ { "translate": "ufrn.Q0000.start.subtitle", "with": ["\n"] }]} 
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_quest_start

#execute if score ufrn:subphase_tick ufrn matches 10 run execute as @a at @s run playsound ufrn:walkietalkie_fx @s ~ ~ ~ 0.9
execute if score ufrn:subphase_tick ufrn matches 5 run execute as @a at @s run setworldspawn 349.43 -54.00 228.88
execute if score ufrn:subphase_tick ufrn matches 5 run execute as @a at @s run spawnpoint @a
execute if score ufrn:subphase_tick ufrn matches 60 run tellraw @a {"rawtext":[{"translate":"ufrn.unknown.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.unknown.1"}]}
execute if score ufrn:subphase_tick ufrn matches 150 run tellraw @a {"rawtext":[{"translate":"ufrn.unknown.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.unknown.2"}]}
execute if score ufrn:subphase_tick ufrn matches 290 run tellraw @a {"rawtext":[{"translate":"ufrn.unknown.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.unknown.3"}]}
execute if score ufrn:subphase_tick ufrn matches 380 run tellraw @a {"rawtext":[{"translate":"ufrn.unknown.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.unknown.4"}]}
execute if score ufrn:subphase_tick ufrn matches 460 run structure load walkietalkie 345.30 -45.80 226.46 0_degrees none true false false 0.00
execute if score ufrn:subphase_tick ufrn matches 550 run tellraw @a {"rawtext":[{"translate":"ufrn.unknown.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.unknown.5"}]}
execute if score ufrn:subphase_tick ufrn matches 550 run scoreboard players set ufrn:objective ufrn 101
execute if score ufrn:subphase_tick ufrn matches 550 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 560 run function event/on_subphase_complete
