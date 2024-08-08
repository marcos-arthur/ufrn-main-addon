import { world, system } from "@minecraft/server";
export default class Utilities {
    static fillBlock(blockPerm, xFrom, yFrom, zFrom, xTo, yTo, zTo) {
        var _a;
        const overworld = world.getDimension("overworld");
        for (let i = xFrom; i <= xTo; i++) {
            for (let j = yFrom; j <= yTo; j++) {
                for (let k = zFrom; k <= zTo; k++) {
                    (_a = overworld.getBlock({ x: i, y: j, z: k })) === null || _a === void 0 ? void 0 : _a.setPermutation(blockPerm);
                }
            }
        }
    }
    static fourWalls(perm, xFrom, yFrom, zFrom, xTo, yTo, zTo) {
        var _a, _b, _c, _d;
        const overworld = world.getDimension("overworld");
        for (let i = xFrom; i <= xTo; i++) {
            for (let k = yFrom; k <= yTo; k++) {
                (_a = overworld.getBlock({ x: i, y: k, z: zFrom })) === null || _a === void 0 ? void 0 : _a.setPermutation(perm);
                (_b = overworld.getBlock({ x: i, y: k, z: zTo })) === null || _b === void 0 ? void 0 : _b.setPermutation(perm);
            }
        }
        for (let j = zFrom + 1; j < zTo; j++) {
            for (let k = yFrom; k <= yTo; k++) {
                (_c = overworld.getBlock({ x: xFrom, y: k, z: j })) === null || _c === void 0 ? void 0 : _c.setPermutation(perm);
                (_d = overworld.getBlock({ x: xTo, y: k, z: j })) === null || _d === void 0 ? void 0 : _d.setPermutation(perm);
            }
        }
    }
    static displayDialogue(_dialogue_list, _player, _index) {
        if (_index === _dialogue_list.length)
            return;
        system.runTimeout(() => {
            _player.onScreenDisplay.setActionBar(_dialogue_list[_index]);
            this.displayDialogue(_dialogue_list, _player, ++_index);
        }, 20 * 4);
    }
    /**
     * Exibe na tela do jogador um diálogo corrido.
     * Cada caixa de diálogo é um RawMessage na lista
     * @param _dialogue_list Lista com os diálogos
     * @param _player Jogador para o qual o diálogo será exibido
     * @returns void
     */
    static displayDialogueInit(_dialogue_list, _player) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_dialogue_list.length === 0)
                return;
            _player.onScreenDisplay.setActionBar(_dialogue_list[0]);
            this.displayDialogue(_dialogue_list, _player, 1);
        });
    }
    // const display_dialogue = (dialogue_list: Array<object>, player: Player, index: number) => {
    /**
     * Retorna uma lista com os jogadores dentro de um volume.
     * @param _location Coordenadas do centro do local no mundo para ser verificado
     * @param _maxDistante Raio de verificação
     * @param _tags Tags para inculir somente os jogadores que possuem elas
     * @param _excludeTags Tags para ignorar os jogadores que possuem elas
     * @returns Player[]
     */
    static getPlayersInVolume(_location, _maxDistance, _tags, _excludeTags) {
        let playersInVolume = [];
        world
            .getDimension("overworld")
            .getEntities({
            location: _location,
            maxDistance: _maxDistance,
            tags: _tags,
            excludeTags: _excludeTags,
        })
            .forEach((_entity) => {
            // console.warn(_entity.nameTag + "\n");
            if (_entity.typeId === "minecraft:player") {
                playersInVolume.push(_entity);
            }
        });
        // ItemStack;
        // MinecraftItemTypes.WritableBook;
        return playersInVolume;
    }
}
//# sourceMappingURL=Utilities.js.map