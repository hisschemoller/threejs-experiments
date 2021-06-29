import { getDefaultScene, getMatrix, fps, PREVIEW_SCALE, } from './plstmichel-shared.js';
import createActor from '../../app/actor.js';

/**
 * Actors 5, east towards Rue de la Huchette.
 */

const scene = getDefaultScene([132, 178], 'actors5', true);
export default scene;

{ // MAN GRIJS PAK WACHTEND
  const actorStart = 0;
  createActor(scene, fps, {
    geom: { w: 1.5, h: 2.5, d: 1 },
    keys: [
      { t:  0 + actorStart, v: [ -25, 0, -22]},
      { t: 10 + actorStart, v: [ -25, 0, -22]},
    ],
    canvas: { offset: 0, scale: 512/22, size: 512 },
    rotateY: Math.PI * -0.5,
    vSc: 512/480,
    vt: [3, 13],
    vKeys: [
      { t:  0 + actorStart, v: [ 220, 170 ]},
      { t: 10 + actorStart, v: [ 220, 170 ]},
    ],
    vrid: '1602_preview',
  });
}

{ // MENSEN WACHTEND VOOR STOPLICHT
  const actorStart = 0;
  createActor(scene, fps, {
    geom: { w: 2, h: 2.5, d: 1 },
    keys: [
      { t:  0 + actorStart, v: [ -15, 0, -20]},
      { t: 20 + actorStart, v: [ -15, 0, -20]},
    ],
    canvas: { offset: 0, scale: 512/22, size: 512 },
    rotateY: Math.PI * -0.5,
    vSc: 512/480,
    vt: [0, 20],
    vKeys: [
      { t:  0 + actorStart, v: [ 0, 175 ]},
      { t: 20 + actorStart, v: [ 0, 175 ]},
    ],
    vrid: '1602_preview',
  });
}

{ // TWEEE MEISJES PRATEND
  const actorStart = 0;
  createActor(scene, fps, {
    geom: { w: 1.8, h: 2.8, d: 1 },
    keys: [
      { t:  0 + actorStart, v: [ -10, 0, -16]},
      { t: 20 + actorStart, v: [ -10, 0, -16]},
    ],
    canvas: { offset: 0, scale: 512/19, size: 512 },
    rotateY: Math.PI * -0.5,
    vSc: 512/480,
    vt: [0, 20],
    vKeys: [
      { t:  0 + actorStart, v: [ 160, 185 ]},
      { t: 20 + actorStart, v: [ 160, 185 ]},
    ],
    vrid: '1602_preview',
  });
}

{ // PLANTENBAK
  const actorStart = 0;
  createActor(scene, fps, {
    geom: { w: 2.5, h: 6, d: 1 },
    keys: [
      { t:  0 + actorStart, v: [ -6, 0, -6]},
      { t: 20 + actorStart, v: [ -6, 0, -6]},
    ],
    canvas: { offset: 0, scale: 512/22, size: 512 },
    rotateY: Math.PI * -0.5,
    vSc: 512/480,
    vt: [0, 20],
    vKeys: [
      { t:  0 + actorStart, v: [ 370, 180 ]},
      { t: 20 + actorStart, v: [ 370, 180 ]},
    ],
    vrid: '1602_preview',
  });
}

{ // DRIE VAN LINKS NAAR RECHTS
  const actorStart = 4;
  createActor(scene, fps, {
    geom: { w: 4, h: 2.6, d: 1 },
    keys: [
      { t:  0 + actorStart, v: [ -5, -3, -30]},
      { t:  0.0001 + actorStart, v: [ -5, 0, -30]},
      { t: 16 + actorStart, v: [ -0, 0, 0]},
      { t: 16.0001 + actorStart, v: [ -0, -3, 0]},
    ],
    canvas: { offset: 0, scale: 512/24, size: 512 },
    rotateY: Math.PI * -0.5,
    vSc: 512/480,
    vt: [27, 43],
    vKeys: [
      { t:  0 + actorStart, v: [ 0, 185 ]},
      { t: 16 + actorStart, v: [ 460, 185 ]},
    ],
    vrid: '1582_preview',
  });
}

{ // VROUW GROENE JAS NAAR RECHTS
  const actorStart = 10;
  createActor(scene, fps, {
    geom: { w: 2, h: 2.8, d: 1 },
    keys: [
      { t:  0 + actorStart, v: [ 5, -3, -22]},
      { t:  0.0001 + actorStart, v: [ 5, 0, -22]},
      { t: 17 + actorStart, v: [ 5, 0, 0]},
      { t: 17.0001 + actorStart, v: [ 5, -3, 0]},
    ],
    canvas: { offset: 0, scale: 512/31, size: 512 },
    rotateY: Math.PI * -0.5,
    vSc: 512/480,
    vt: [89, 106],
    vKeys: [
      { t:  0 + actorStart, v: [ 0, 175 ]},
      { t: 17 + actorStart, v: [ 510, 185 ]},
    ],
    vrid: '1582_preview',
  });
}

{ // FIETSER NAAR RECHTS
  const actorStart = 28;
  createActor(scene, fps, {
    geom: { w: 3.6, h: 3.2, d: 1 },
    keys: [
      { t:  0 + actorStart, v: [ 20, -3.5, -28]},
      { t:  0.0001 + actorStart, v: [ 20, 0, -28]},
      { t: 11 + actorStart, v: [ 20, 0, 18]},
    ],
    canvas: { offset: 0, scale: 512/26, size: 512 },
    rotateY: Math.PI * -0.5,
    vSc: 512/480,
    vt: [16, 27],
    vKeys: [
      { t:  0 + actorStart, v: [ -10, 180 ]},
      { t: 11 + actorStart, v: [ 570, 195 ]},
    ],
    vrid: '1582_preview',
  });
}

{ // MAN NAAR LINKS
  const actorStart = 5;
  createActor(scene, fps, {
    geom: { w: 2, h: 2.8, d: 1 },
    keys: [
      { t:  0 + actorStart, v: [ -5, 0, -5]},
      { t: 13 + actorStart, v: [ -5, 0, -18]},
      { t: 13.0001 + actorStart, v: [ -5, -3, -18]},
    ],
    canvas: { offset: 0, scale: 512/31, size: 512 },
    rotateY: Math.PI * -0.5,
    vSc: 512/480,
    vt: [42, 55],
    vKeys: [
      { t:  0 + actorStart, v: [ 510, 180 ]},
      { t: 13 + actorStart, v: [ 160, 180 ]},
    ],
    vrid: '1582_preview',
  });
}

{ // BUS NAAR RECHTS
  const actorStart = 32;
  createActor(scene, fps, {
    geom: { w: 12, h: 4, d: 1 },
    keys: [
      { t:  0 + actorStart, v: [ 30, -5, -44]},
      { t:  0.0001 + actorStart, v: [ 30, 0, -44]},
      { t: 10 + actorStart, v: [ 30, 0, 30]},
    ],
    canvas: { offset: 0, scale: 512/20, size: 512 },
    rotateY: Math.PI * -0.5,
    vSc: 512/480,
    vt: [90, 96],
    vKeys: [
      { t:  0 + actorStart, v: [ -380, 170 ]},
      { t: 11 + actorStart, v: [ 1100, 170 ]},
    ],
    vrid: '1602_preview',
  });
}
