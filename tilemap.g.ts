// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202010202020202020202020202020202020202020202020303040503030303060802020202020203030306030303030202020202020303030303020202020202020202020203050504030202020202020202020202050306030202020202020202020202020306030502020202020202020202020205030303020202020202020202020202020403030303020202020202020202020202030303030202020202020202020203030303040302020202020202020203050303030303020202020202020203040303030303030202020202020202050303030503030202020202020207030304050303030302020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 . . . . . . 
2 2 2 2 2 2 . . . . . . . . 2 2 
2 2 2 2 . . . . . 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 . . . . . . 2 2 2 2 2 2 
2 2 2 . 2 . . . . . 2 2 2 2 2 2 
2 2 . . . . . . . . 2 2 2 2 2 2 
2 2 2 . . . 2 . . 2 2 2 2 2 2 2 
. . . . 2 . . . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
