function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 0 run function ui/clear_objective
execute if score ufrn:subphase_tick ufrn matches 20 run scoreboard players set ufrn:objective ufrn 156
execute if score ufrn:subphase_tick ufrn matches 20 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 20 run function event/on_subphase_complete
