scoreboard players set ufrn:subphase_tick ufrn 0
scoreboard players set ufrn:subphase_tick_enabled ufrn 0
# Norte
execute if block 317.50 -12 280.50 minecraft:polished_blackstone_button["button_pressed_bit"=true,"facing_direction"=1] if score ufrn:random ufrn matches 1 run scoreboard players set ufrn:subphase ufrn 26
execute if block 317.50 -12 280.50 minecraft:polished_blackstone_button["button_pressed_bit"=true,"facing_direction"=1] unless score ufrn:random ufrn matches 1 run titleraw @a actionbar {"rawtext":[{"translate":"ufrn.Q0001.wrong.direction"}]}
# Leste
execute if block 323.50 -12.00 286.50 minecraft:polished_blackstone_button["button_pressed_bit"=true,"facing_direction"=1] if score ufrn:random ufrn matches 2 run scoreboard players set ufrn:subphase ufrn 26
execute if block 323.50 -12.00 286.50 minecraft:polished_blackstone_button["button_pressed_bit"=true,"facing_direction"=1] unless score ufrn:random ufrn matches 2 run titleraw @a actionbar {"rawtext":[{"translate":"ufrn.Q0001.wrong.direction"}]}

# Sul
execute if block 317.50 -12.00 292.50 minecraft:polished_blackstone_button["button_pressed_bit"=true,"facing_direction"=1] if score ufrn:random ufrn matches 3 run scoreboard players set ufrn:subphase ufrn 26
execute if block 317.50 -12.00 292.50 minecraft:polished_blackstone_button["button_pressed_bit"=true,"facing_direction"=1] unless score ufrn:random ufrn matches 3 run titleraw @a actionbar {"rawtext":[{"translate":"ufrn.Q0001.wrong.direction"}]}

# Oeste
execute if block 311.50 -12.00 286.50 minecraft:polished_blackstone_button["button_pressed_bit"=true,"facing_direction"=1] if score ufrn:random ufrn matches 4 run scoreboard players set ufrn:subphase ufrn 26
execute if block 311.50 -12.00 286.50 minecraft:polished_blackstone_button["button_pressed_bit"=true,"facing_direction"=1] unless score ufrn:random ufrn matches 4 run titleraw @a actionbar {"rawtext":[{"translate":"ufrn.Q0001.wrong.direction"}]}


