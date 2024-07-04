tickingarea add circle 375 -22 174 2 true
scoreboard objectives remove ufrn
scoreboard objectives add ufrn dummy
scoreboard objectives setdisplay sidebar ufrn
scoreboard players add ufrn:phase ufrn 9999
scoreboard players add ufrn:subphase ufrn 0
scoreboard players add ufrn:subphase_tick ufrn 0
scoreboard players add ufrn:subphase_tick_enabled ufrn 0
scoreboard players add ufrn:objective ufrn 0
scoreboard players add ufrn:path ufrn 0
scoreboard players add ufrn:random ufrn 0
scoreboard players add ufrn:timer ufrn 0
scoreboard players add ufrn:timer_tick ufrn 0
scoreboard players add ufrn:timer_enabled ufrn 0
kill @e[type=ufrn:tick]
summon ufrn:tick 375 -22 174
