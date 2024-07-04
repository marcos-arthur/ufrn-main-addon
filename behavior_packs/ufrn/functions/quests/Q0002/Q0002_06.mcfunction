function event/on_tickable_subphase
execute if score ufrn:subphase_tick ufrn matches 2 run scoreboard players set ufrn:objective ufrn 205
execute if score ufrn:subphase_tick ufrn matches 2 run function event/on_objective_update
execute if score ufrn:subphase_tick ufrn >= ufrn:subphase_tick ufrn run execute positioned -221.03 -17.00 -619.80 if entity @a[tag=XQ0002,r=5,rm=0] run function event/on_subphase_complete