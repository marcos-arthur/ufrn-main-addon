function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 0 run tellraw @a {"rawtext":[{"translate":"ufrn.unknown.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0000.unknown.6"}]}
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_subphase_complete






