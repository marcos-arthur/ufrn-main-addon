function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 0 run function ui/clear_random_objective
execute if score ufrn:subphase_tick ufrn matches 20 run scoreboard players random ufrn:random ufrn 1 3
execute if score ufrn:subphase_tick ufrn matches 30 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 31 run scoreboard players add @a points 1

execute if score ufrn:subphase_tick ufrn matches 35 unless score ufrn:timer_tick ufrn matches 0 run scoreboard players set ufrn:subphase ufrn 99
execute if score ufrn:subphase_tick ufrn matches 35 if score ufrn:timer_tick ufrn matches 0 run function event/on_subphase_complete
