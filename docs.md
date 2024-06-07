# Documentação da criação de _quests_ para o _addon_ da UFRN no Minecraft

## Estrutura de pastas

A estrutura de pastas é importante para podermos organizar os códigos de cada missão, tornando mais fácil a legibilidade e a manutenção neles.

Os colchetes [_] simbolizam que haverão várias pastas e arquivos irmãos que serão diferenciados pelo que substituirá os símbolos.

```bash
.
├── behavior_packs/
│   ├── dialogue/
│   │   └── [NPC_NAME]/
│   │       └── [QUEST_TAG]_scenes.json
│   ├── manifest.json
│   └── pack_icon.json
└── scripts/
    ├── [QUEST_TAG]/
    │   ├── dialogues.ts
    │   └── [QUEST_TAG].ts
    ├── main.ts
    └── Utilities
```

### Pastas [QUEST_TAG]

Dentro da pastas _scripts_ estarão as pastas com os códigos das quests do jogo.\
Cada _quest_ terá uma pasta para ela e dentro dessa pasta haverão dois arquivos.

O primeiro arquivo é o _dialogues.ts_, nesses arquivos estarão todos os diálogos corridos que aparecem na tela do jogador como legendas. \

> Leve-me para a seção [Arquivos dialogue.ts](#arquivos-dialoguests)

O segundo arquivo é [QUEST_TAG].ts, nesse arquivo estarão os códigos relacionados à quest.\
O texto [QUEST_TAG] deverá ser substituído pela _tag_ da quest, que seguirá o padrão QXXXX, ou seja, a _quest 0_ terá como tag o valor Q0000.

> Leve-me para a seção [Exemplos de códigos](#exemplos-de-códigos)

## Exemplos de códigos

### Código inicial de uma _quest_

Dentro dos arquivos [QUEST_TAG].ts, haverá a seguinte estrutura inicial:

```js
import { world, Vector3, Dimension, Player } from "@minecraft/server";
import Utilities from "../Utilities";
import [QXXXX]Dialogues from "./dialogues";

const overworld: Dimension = world.getDimension("overworld");

export default class Quest[XXXX] {
  static runQuest() {

  }
}

```

> Obs.: Lembrar de substituir os valores entre colchete [ _ ]

As primeiras três linhas importarão arquivos necessários para escrever códigos gerais das quests.\
Na quinta linha está sendo _setada_ a varíavel **_overworld_** pelo mesmo motivos anterior.

Além disso, nas ultimas linhas está sendo _setada_ a classe referente à _quest_ que será usada para executar a função no arquivo _main.ts_.\
Por fim, toda a lógica que o programador quiser aplicar para essa lógica estará dentro da função **_static runQuest()_**

### Obter jogadores

É possível obter uma lista contendo jogadores que estão conectados no servidor no momento da execução, para isso pode-se executar o seguinte comando:

```js
const players = world.getPlayers();
```

A variável **_players_** guardará a lista com todos os jogadores.

Também é possível filtrar os jogadores com base em diferentes critérios.\
Os mais importantes são os filtros _tags_ e _excludeTags_, que vão procurar jogadores que possuem as _tags_ especificadas e que vão ignorar jogadores que possuem as _tags_ especificadas respectivamente.

Para isso, deve-se executar o seguinte comando:

```js
const players: Player[] = world.getPlayers({
  tags: ["TAG_EXAMPLE_1", "TAG_EXAMPLE_2"],
  excludeTags: ["EXCLUDE_TAG_EXAMPLE_1", "EXCLUDE_TAG_EXAMPLE_2"],
});
```

#### **Sugestão**

Ao invés de declarar uma variável para guardar uma lista de jogadores, muitas vezes será mais interessante executar um código diretamente da função getPlayers().

Para isso pode-se executar o seguinte comando:

```js
world
  .getPlayers({
    tags: [],
    excludeTags: [],
  })
  .forEach((_player) => {
    console.log(_player);
  });
```

O código acima fará uma execucação para cada jogador que foi adicionado à lista sem que precisemos declarar uma variável.\
O código será escrito no lugar do **_console.log(player);_**

### Adicionar/remover _tags_

Durante o desenvolvimento das _quests_ será necessário utilizas _tags_ para identificar em qual _quest_ e em qual momento da _quest_ o jogador vai estar no momento.\
Para isso, utilizamos as _tags_ nativas do Minecraft, na qual podemos adicionar executando a seguinte função:

```js
world.getPlayers({ excludeTags: ["Q0000"] }).forEach((_player) => {
  _player.addTag("Q0000");
});
```

O código acima adicionará a _tag_ _Q000_ para todos os jogadores que não a possuírem.

E para remover uma tag basta executar a seguinte função:

```js
world.getPlayers({ tags: ["Q0000"] }).forEach((_player) => {
  _player.removeTag("Q0000");
});
```

O código acima removerá a _tag_ _Q000_ para todos os jogadores que a possuírem.

### Teleportar jogador

Caso deseje teleportar um jogador para uma coordenada específica, execute a seguinte função:

```js
world.getPlayers({ tags: ["quero_teleportar"] }).forEach((_player) => {
  _player.teleport({ x: [COORDENADA_X], y: [COORDENADA_Y], z: [COORDENADA_Z] });
});
```

Caso deseje que o jogador esteja olhando para uma direção específica, você pode utilizar o parâmentro **_facingLocation_**. Para isso, basta executar o código informando para a coordenada na qual o jogador deve olhar da seguinte forma:

```js
world.getPlayers({ tags: ["quero_teleportar"] }).forEach((_player) => {
  _player.teleport(
    { x: [COORDENADA_X], y: [COORDENADA_Y], z: [COORDENADA_Z] },
    {
      facingLocation: { x: [COORDENADA_X].x + 3, y: [COORDENADA_Y].y - 1, z: [COORDENADA_Z].z },
    }
  );
});
```

O parâmetro **_facingLocation_**, vai receber a coordenada na qual ele vai ser teleportado como base somado com os valores que vão dar a coordenada para onde o jogador deve estar olhando.\
No exemplo acima, se o jogador estiver sendo teleportado para a coordenada **{x: 10, y: 15 z: 20}**, então, ao ser teleportado, ele vai estar olhando para a coordenada **{x: 13, y: 14 z: 20}**.

## Classe Utilities

A classe **_Utilities_** possui funções que serão utilizadas para acelerar alguns processos durante o desenvolvimento das Quests.

Abaixo estão listadas as funções da classe e o que elas fazem.

### displayDialogueInit()

```js
static async displayDialogueInit(_dialogue_list: Array<RawMessage>, _player: Player) : void
```

Esta função é responsável por exibir as legendas relacionadas a diálogos ou a dicas que aparecem para o jogador enquanto sem abrir nenhum popup.

#### Parâmetros

| Nome            | Tipo               | Descrição                                  |
| --------------- | ------------------ | ------------------------------------------ |
| \_dialogue_list | Array\<RawMessage> | Lista com os diálogos                      |
| \_player        | Player             | Jogador para o qual o diálogo será exibido |

#### Exemplo de uso

```js
import Utilities from "../Utilities";

const _example_dialogue_list = [
  //Primeira fala
  {
    rawtext: [
      {
        text: `§uCharles-Bô: §rPronto para a aventura?`,
      },
    ],
  },
  //Segunda fala
  {
    rawtext: [
      {
        text: `§uAluno: §rSIM!`,
      },
    ],
  },
  // ... //
];

world.getPlayers({ tags: ["exibir_legenda"] }).forEach((_player) => {
  Utilities.displayDialogueInit(_example_dialogue_list, _player);
});
```

### Obter jogadores dentro de uma área

### getPlayersInVolume()

```js
static async getPlayersInVolume(_location: Vector3, _maxDistance: number, _tags?: string[], _excludeTags?: string[]) : Player[]
```

Esta função é responsável por obter uma lista com todos os jogadores dentro de um volume.

#### Parâmetros

| Nome          | Tipo     | Descrição                                                           |
| ------------- | -------- | ------------------------------------------------------------------- |
| \_location    | Vector3  | Coordenadas do centro da busca.                                     |
| \_maxDistance | number   | Raio de busca.                                                      |
| \_Tags        | string[] | Tags para incluir somente os jogadores que as possuírem. Opicional. |
| \_excludeTags | string[] | Tags para ignorar os jogadores que as possuírem. Opicional.         |

#### Exemplo de uso

No exemplo abaixo, cada jogador dentro de um raio de 3 blocos de distância do local específicado que possuir a tag Q0001 e não possuir a tag Q0001_1 será teleportado para outro local.

```js
import Utilities from "../Utilities";

Utilities.getPlayersInVolume({ x: 248, y: -9, z: 187 }, 3, ["Q0001"], ["Q0001_1"]).forEach((_player) => {
  _player.teleport({ x: 200, y: -9, z: 300 });
});
```

## Arquivos dialogues.ts

Os arquivos **_dialogues.ts_** localizados dentro das pastas **[QUEST_TAG]** possuirão uma classe com funções que representam uma seção de diálogos corridos que ocorrerão durante uma quest específica.

### Modelo de uma classe de dialogo

Abaixo pode-se ver um exemplo de classe de diálogo.\
Na primeira linha, está sendo importada a classe Player para que possamos obter no futuro as obter as informações do jogador, como o seu nome, e as exibir em falas.

O nome da classe possui o termo "Quest", seguido dos números identificadores da Quest e, por fim, com o termo "Dialogues", formando-se assim Quest[XXXX]Dialogues.

Dentro da classe, haverão funções que representam momentos durante a quest, por exemplo, quando o jogador chegar a um determinado local que a missão pede.\
Essa função terá como parâmetro um objeto **Player** para resgatar as informações do jogador.

Por fim, cada função retornará uma lista de RawMessage, onde cada RawMessage representará uma fala que aparecerá por vez na tela do jogador como uma legenda.

O RawMessage é um padrão utilizado no Minecraft Bedrock para exibir textos para o jogador, nesse formato podemos ter textos coloridos, por exemplo.

Abaixo pode-se ver um exemplo de aplicação da função.

```js
import { Player } from "@minecraft/server";

export default class Quest[XXXX]Dialogues {
  static afterEscapeDialogue(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§uCharles-Bô: §rVAMOS NESSA, ${_player.name}!`,
          },
        ],
      },
    ];
  }
}
```

Por padrão, vamos utilizamos o seguinte formato para uma fala:

```js
§u[NOME_DO_PERSONAGEM]: §r[FALA]
```

Também é possível exibir o nome do jogador utilizando o seguinte comando dentro do texto:

```js
${_player.name}
```
