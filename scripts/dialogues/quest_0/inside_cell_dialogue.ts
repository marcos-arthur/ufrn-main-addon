import { Player } from "@minecraft/server"

let player: Player

export const getInsideCellDialogue = (_player: Player) =>{
  player = _player

  return [
    {
      "rawtext":
      [
        {
          "text": `§uRádio Walk Talk: §rEi, ${player.name}\nÉ hora de escapar. Só siga o que eu disser e você vai sair dessa.`
        },
      ]
    },
    {
      "rawtext":
      [
        {
          "text": "§uRádio Walk Talk: §rNão importa quem eu sou no momento. \nO que importa é que você siga o que eu vou falar." 
        }
      ]
    },
    {  
      "rawtext":
      [
        {
          "text": "§uRádio Walk Talk: §rPrimeiro, estou hackeando a porta da sua cela. \nPorém só vou conseguir deixá-la aberta por um breve momento."
        }
      ]
    },
    {  
      "rawtext":
      [
        {
          "text": "§uRádio Walk Talk: §rMe informe quando você estiver pronto para que eu possa abrir."
        }
      ]
    },

  ]
}
  
