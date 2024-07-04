execute if score ufrn:phase ufrn matches 0 run function quests/Q0000
execute if score ufrn:phase ufrn matches 1 run function quests/Q0001
execute if score ufrn:phase ufrn matches 2 run function quests/Q0002
execute if score ufrn:phase ufrn matches 6 run function quests/Q0006
#execute if score ufrn:phase ufrn matches 9999 run function
function timer/start
execute if score ufrn:subphase_tick_enabled ufrn matches 1 run scoreboard players add ufrn:subphase_tick ufrn 1
execute if score ufrn:timer_enabled ufrn matches 1 run scoreboard players add ufrn:timer_tick ufrn 1

