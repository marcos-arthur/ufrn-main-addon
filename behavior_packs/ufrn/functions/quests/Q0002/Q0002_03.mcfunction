function event/on_tickable_subphase
scoreboard players set ufrn:path ufrn 0
execute if score ufrn:subphase_tick ufrn matches 1 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.6"}]}
execute if score ufrn:subphase_tick ufrn matches 1 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 30 run scoreboard players set ufrn:objective ufrn 202
execute if score ufrn:subphase_tick ufrn matches 30 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn matches 220 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.7"}]}
execute if score ufrn:subphase_tick ufrn matches 220 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned 200.56 -24.00 113.31 if entity @a[tag=Q0002_01,r=5,rm=0] run execute if block 200.50 -23.00 112.50 minecraft:acacia_button["button_pressed_bit"=true,"facing_direction"=3] run function event/on_subphase_complete

