function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 2 run tag @a add Q0006_06
execute if score ufrn:subphase_tick ufrn matches 6 run scoreboard players set ufrn:objective ufrn 603
execute if score ufrn:subphase_tick ufrn matches 6 run function event/on_timer_desable
execute if score ufrn:subphase_tick ufrn matches 50 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0006.walkietalkie.12"}]}
execute if score ufrn:subphase_tick ufrn matches 50 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 60 run execute as @a at @s run playsound ufrn:mission_completed @s ~ ~ ~ 1.00 1.00 0.5
execute if score ufrn:subphase_tick ufrn matches 80 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 80 run function event/on_subphase_complete