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

O primeiro arquivo é o _dialogues.ts_, nesse arquivo estarão todos os diálogos corridos que aparecem na tela do jogador como legendas.

O segundo arquivo é [QUEST_TAG].ts, nesse arquivo estarão os códigos relacionados à quest.\
O texto [QUEST_TAG] deverá ser substituído pela _tag_ da quest, que seguirá o padrão QXXXX, ou seja, a _quest 0_ terá como tag o valor Q0000.

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

`Obs.: Lembrar de substituir os valores entre colchete [_]`

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

`Dica: Ao invés de declarar uma variável para guardar uma lista de jogadores, muitas vezes será mais interessante executar um código diretamente da função getPlayers(). Para isso pode-se executar o seguinte comando:`

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
