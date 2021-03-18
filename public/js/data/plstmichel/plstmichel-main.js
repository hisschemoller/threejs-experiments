import { getDefaultScene, fps, PREVIEW_SCALE, } from './plstmichel-shared.js';
import createCamera from './plstmichel-camera.js';
import createActor from '../../app/actor.js';

const scene = getDefaultScene([0, 320], 'main', true);
export default scene;

createCamera(scene);

// create1585QuaiDesOrfevres(scene, fps);
// create1579QuaiDuMarcheNeufCorner(scene, fps);
// create1579QuaiDuMarcheNeuf(scene, fps);
// create1583Seine(scene, fps);
// create1584BusStop(scene, fps);
// create1584GreenGate(scene, fps);
// create1581Fountain(scene, fps);
// create1600GilbertJeune(scene, fps);
// create1582RueDeLaHuchette(scene, fps);
// create1628QuaiSaintMichel(scene, fps);
// create1628NotreDame(scene, fps);

export const wallScenes = [];
let wallScene, start, end;
let fountain1581Start = 60;
let gilbertJeune1600Start = 100;

start = 0;
end = 43.75;
fountain1581Start = 60;
gilbertJeune1600Start = 100;
gilbertJeune1600Start += end - start;
wallScene = getDefaultScene([start, end], 'walls1', false);
create1581Fountain(wallScene, fps, fountain1581Start);
create1600GilbertJeune(wallScene, fps, gilbertJeune1600Start);
wallScenes.push(wallScene);

start = end;
end = 53.420370902023365;
fountain1581Start += end - start;
wallScene = getDefaultScene([start, end], 'walls2', false);
create1581Fountain(wallScene, fps, fountain1581Start);
create1600GilbertJeune(wallScene, fps, gilbertJeune1600Start);
wallScenes.push(wallScene);

start = end;
end = 63.09074180404672;
fountain1581Start += end - start;
gilbertJeune1600Start += end - start;
wallScene = getDefaultScene([start, end], 'walls3', false);
create1581Fountain(wallScene, fps, fountain1581Start);
create1600GilbertJeune(wallScene, fps, gilbertJeune1600Start);
create1582RueDeLaHuchette(scene, fps);
create1628QuaiSaintMichel(scene, fps);
create1628NotreDame(scene, fps);
create1579QuaiDuMarcheNeuf(scene, fps);
create1579QuaiDuMarcheNeufCorner(scene, fps);
create1585QuaiDesOrfevres(scene, fps);
wallScenes.push(wallScene);

start = end;
end = 69.34074180404671;
gilbertJeune1600Start += end - start;
wallScene = getDefaultScene([start, end], 'walls4', false);
create1600GilbertJeune(wallScene, fps, gilbertJeune1600Start);
create1582RueDeLaHuchette(scene, fps);
create1628QuaiSaintMichel(scene, fps);
create1628NotreDame(scene, fps);
create1579QuaiDuMarcheNeuf(scene, fps);
create1579QuaiDuMarcheNeufCorner(scene, fps);
create1585QuaiDesOrfevres(scene, fps);
wallScenes.push(wallScene);


/**
 * Create a building facade, which is a very thin box.
 * @param {Object} settings
 */
function createFacade(scene, fps, settings) {
  const {
    x = 0, z = -100, w = 10, h = 10,
    imgH = 1920, imgW = 1080, img,
    sX = 0, sY = 0, sW = 1920, sH = 1080,
    vrid, vSc = 1, vt = [0, null], vKeys = [{t: 0, v: [0, 0]}],
    rotateY = 0,
  } = settings;
  const canvasSize = 1024;
  // const h = w * (sH / sW);
  const config = {
    keys: [{t: 0, v: [x, 0, z]}],
    geom: { w, h, d: 0.01, },
    canvas: { offset: 0, scale: canvasSize / Math.max(w, h), size: canvasSize },
    rotateY,
  };
  if (img) {
    config.image = { file: img, offx: sX, offy: sY + sH, scale: canvasSize / Math.max(sW, sH) };
  }
  if (vrid) {
    config.vrid = vrid;
    config.vSc = canvasSize / Math.max(sW, sH);
    config.vt = vt;
    config.vKeys = [{t: 0, v: [sX, sY + sH]}];
  }
  createActor(scene, fps, config);
}

// GROUND
createActor(scene, fps, {
  keys: [{t: 0, v: [-50, 0, 50]}],
  geom: { w: 100, h: 0.01, d: 100, },
  canvas: { offset: 0, scale: 2048 / 100, size: 2048 },
  image: { file: 'plstmichel/plstmichel-grond.jpg', offx: 0, offy: 2048, scale: 1 }, 
});

// N 1585 QUAI DES ORFEVRES - PALAIS DE JUSTICE
export function create1585QuaiDesOrfevres(scene, fps) {
  const sX = 0, sY = 0, sW = 983, sH = 551, w = 50; // h = 28
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: -50, z: -40, w, h: w * (sH / sW),
    img: 'plstmichel/parijs-n-1585.jpg',
    // img: 'fs-img?dir=/Volumes/Seagate Slim Drive/testfoto/parijs/&img=parijs-n.jpg',
  });
}

// N 1579 QUAI DU MARCHÉ NEUF (HOEKJE)
export function create1579QuaiDuMarcheNeufCorner(scene, fps) {
  const sX = 803, sY = 237, sW = 300, sH = 445, w = 10; // h was 24
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: 0, z: -40, w, h: 18,
    img: 'plstmichel/parijs-n-1579.jpg', rotateY: Math.PI * 0.5,
  });
}

// N 1579 QUAI DU MARCHÉ NEUF
export function create1579QuaiDuMarcheNeuf(scene, fps) {
  const sX = 803, sY = 237, sW = 600, sH = 445, w = 20; // h was 24, wordt 20
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: 0, z: -50, w, h: 18,
    img: 'plstmichel/parijs-n-1579.jpg',
  });
}

// O 1583 HOEK OOST MET SEINE
export function create1583Seine(scene, fps) {
  const sX = 270, sY = 0, sW = 1450, sH = 620, w = 60;
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: -50, z: 20, w, h: 25.8,
    img: 'plstmichel/parijs-o-1583.jpg', rotateY: Math.PI * 0.5,
  });
}

// O 1584 OOST BUSHALTE
export function create1584BusStop(scene, fps) {
  const sX = 845, sY = 0, sW = 714, sH = 691, w = 20;
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: -30, z: 20, w, h: w * (sH / sW),
    img: 'plstmichel/parijs-o-1584.jpg', rotateY: Math.PI,
  });
}

// O 1584 OOST POORT
export function create1584GreenGate(scene, fps) {
  const sX = 0, sY = 0, sW = 845, sH = 691, w = 30;
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: -30, z: 50, w, h: w * (sH / sW),
    img: 'plstmichel/parijs-o-1584.jpg', rotateY: Math.PI * 0.5,
  });
}


// Z 1581 FONTEIN
export function create1581Fountain(scene, fps, videoStart = 0) {
  const sX = 4*PREVIEW_SCALE, sY = 17*PREVIEW_SCALE, sW = 1910*PREVIEW_SCALE, sH = 636*PREVIEW_SCALE, w = 80;
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: 50, z: 50, w, h: w * (sH / sW),
    rotateY: Math.PI,
    // img: 'plstmichel/parijs-z-1581.jpg',
    vrid: '1581_preview', vSc: 1, vt: [videoStart, null], vKeys: [{t: 0, v: [0, 0]}],
  });
}

// W 1600 GILBERT JEUNE
export function create1600GilbertJeune(scene, fps, videoStart = 0) {
  const sX = 777*PREVIEW_SCALE, sY = 0*PREVIEW_SCALE, sW = 760*PREVIEW_SCALE, sH = 665*PREVIEW_SCALE, w = 40;
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: 50, z: 10, w, h: w * (sH / sW),
    rotateY: Math.PI * -0.5,
    // img: 'plstmichel/parijs-w-1600.jpg',
    vrid: '1600_preview', vSc: 1, vt: [videoStart, null], vKeys: [{t: 0, v: [0, 0]}],
  });
}

// W 1582 RUE DE LA HUCHETTE
export function create1582RueDeLaHuchette(scene, fps) {
  const sX = 376, sY = 0, sW = 1025, sH = 710, w = 40;
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: 50, z: -30, w, h: w * (sH / sW),
    img: 'plstmichel/parijs-w-1582.jpg', rotateY: Math.PI * -0.5,
  });
}

// W 1628 QUAI SAINT MICHEL
export function create1628QuaiSaintMichel(scene, fps) {
  const sX = 900, sY = 0, sW = 509, sH = 767, w = 20;
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: 50, z: -50, w, h: w * (sH / sW),
    img: 'plstmichel/parijs-w-1628.jpg', rotateY: Math.PI * -0.5,
  });
}

// W 1628 NOTRE DAME
export function create1628NotreDame(scene, fps) {
  const sX = 3, sY = 9, sW = 898, sH = 758, w = 30;
  createFacade(scene, fps, {
    sX, sY, sW, sH, x: 20, z: -50, w, h: w * (sH / sW),
    img: 'plstmichel/parijs-w-1628.jpg',
  });
}

// TEST
// createFacade({
//   imgH: 1024, imgW: 1024, img: 'testimage3d.jpg', sX: 0, sW: 512, sH: 512, z: -30,
// });

// CUBES
// for (let i = 0, n = 8; i < n; i++) {
//   createActor(scene, fps, {
//     keys: [{t: 0, v: [(Math.random() * 6) - 3, i * 0.75, (Math.random() * 6) - 3]}],
//     img: 'testimage3d.jpg',
//     gw: 0.5, gh: 0.5, gd: 0.5,
//     iOfX: 512, iOfY: 512, iSc: 0.5,
//   });
// }