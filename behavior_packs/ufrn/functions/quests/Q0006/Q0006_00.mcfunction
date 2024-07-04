function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 5 run tag @a remove Q0002
execute if score ufrn:subphase_tick ufrn matches 5 run tag @a add Q0006
scoreboard players set ufrn:path ufrn 0
execute if score ufrn:subphase_tick ufrn matches 6 run scoreboard players set ufrn:objective ufrn 601
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_subphase_complete