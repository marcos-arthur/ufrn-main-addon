function event/on_tickable_subphase

execute if score ufrn:subphase_tick ufrn matches 10 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.10"}]}
execute if score ufrn:subphase_tick ufrn matches 10 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 230 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.11"}]}
execute if score ufrn:subphase_tick ufrn matches 230 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 460 run tellraw @a {"rawtext":[{"translate":"ufrn.walkietalkie.chat.name"},{"translate":"ufrn.chat.separator"},{"translate":"ufrn.Q0002.walkietalkie.12"}]}
execute if score ufrn:subphase_tick ufrn matches 460 run function event/on_walkietalkie_speak
execute if score ufrn:subphase_tick ufrn matches 90 run scoreboard players set ufrn:objective ufrn 204
execute if score ufrn:subphase_tick ufrn matches 90 run function event/on_objective_update
# TODO: Adicionar localização correta
execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned -221.03 -17.00 -619.80 if entity @a[tag=Q0002_02,r=5,rm=0] run function event/on_subphase_complete