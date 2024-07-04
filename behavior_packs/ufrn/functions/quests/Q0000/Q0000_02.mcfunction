function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 10 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.walkietalkie.1"}]}
execute if score ufrn:subphase_tick ufrn matches 10 run function event/on_walkietalkie_speak

execute if score ufrn:subphase_tick ufrn matches 130 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.walkietalkie.2"}]}
execute if score ufrn:subphase_tick ufrn matches 130 run function event/on_walkietalkie_speak

execute if score ufrn:subphase_tick ufrn matches 230 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.walkietalkie.3"}]}
execute if score ufrn:subphase_tick ufrn matches 230 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 400 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.walkietalkie.4"}]}
execute if score ufrn:subphase_tick ufrn matches 400 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 410 run execute if block 352 -54 226 iron_door["direction"=1,"open_bit"=false] run setblock 352 -56 226 redstone_torch
execute if score ufrn:subphase_tick ufrn matches 410 run scoreboard players set ufrn:objective ufrn 102

execute if score ufrn:subphase_tick ufrn matches 450 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 450 run function event/on_subphase_complete