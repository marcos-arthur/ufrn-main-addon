
export default class dialogue{
  insideCellDialogue = {
    "rawtext":
    [
      {
        "text": "§uRádio Walk Talk: §rEi, você aí"
      },
      // selector not working
      {
        "selector": "@s"
      },
      {
        "text": "! \nÉ hora de escapar. Só siga o que eu disser e você vai sair dessa."
      },
    ]
  }
  
  insideCellDialogue_1 = {
    "rawtext":
    [
      {
        "text": "§uRádio Walk Talk: §rNão importa quem eu sou no momento. \nO que importa é que você siga o que eu vou falar." 
      }
    ]
  }
  
  insideCellDialogue_2 = {
    "rawtext":
    [
      {
        "text": "§uRádio Walk Talk: §rPrimeiro, estou hackeando a porta da sua cela. \nPorém só vou conseguir deixá-la aberta por um breve momento, \nme informe quando você estiver pronto para que eu possa abrir."
      }
    ]
  }
  

  getDialogues(){
    return this.insideCellDialogue;
  }
}