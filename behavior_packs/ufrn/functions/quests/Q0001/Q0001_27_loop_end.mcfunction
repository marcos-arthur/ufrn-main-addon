
function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 0 run function ui/clear_random_objective
execute if score ufrn:subphase_tick ufrn matches 0 run function ui/clear_objective
execute if score ufrn:subphase_tick ufrn matches 5 run scoreboard players set ufrn:random ufrn 0
execute if score ufrn:subphase_tick ufrn matches 5 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0001.walkietalkie.6","with":{"rawtext":[{"score":{"name":"@a","objective":"points"}}]}}]}
execute if score ufrn:subphase_tick ufrn matches 5 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 160 run scoreboard players set ufrn:objective ufrn 152
execute if score ufrn:subphase_tick ufrn matches 160 run function event/on_objective_update
# execute if score ufrn:subphase_tick ufrn matches 20 run function event/on_timer_enable
execute if score ufrn:subphase_tick ufrn matches 160 run function event/on_subphase_complete
