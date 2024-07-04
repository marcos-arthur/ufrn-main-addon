function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 5 run tag @a remove Q0000
execute if score ufrn:subphase_tick ufrn matches 5 run tag @a add Q0001
execute if score ufrn:subphase_tick ufrn matches 6 run scoreboard players set ufrn:objective ufrn 113
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_subphase_complete