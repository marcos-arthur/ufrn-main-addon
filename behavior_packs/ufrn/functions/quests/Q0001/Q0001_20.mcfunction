function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 0 run function ui/clear_random_objective
execute if score ufrn:subphase_tick ufrn matches 20 run scoreboard players random ufrn:random ufrn 1 3
execute if score ufrn:subphase_tick ufrn matches 30 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 30 run function event/on_subphase_complete
