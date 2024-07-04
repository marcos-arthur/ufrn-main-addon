tag @initiator add Q0002_01
execute unless entity @e[hasitem={item=minecraft:lodestone_compass},r=5] run structure load bussola 379.50 -20.94 187.58 0_degrees none true false false 0.00
execute unless entity @e[hasitem={item=ufrn:walkie_talkie},r=5] run structure load walkietalkie 379.50 -20.94 187.58 0_degrees none true false false 0.00
execute at @initiator positioned ~ ~ ~ run structure load mapa_Q0002_01 ~ ~ ~ 0_degrees none true false false 0.00
# structure load mapa_Q0002_01 379.50 -20.94 187.58 0_degrees none true false false 0.00
# ufrn:walkie_talkie

# @a[hasitem=[{item=minecraft:lodestone_compass,location=slot.weapon.mainhand}]]