import { fps, } from './plstmichel-shared.js';
import scene1 from './plstmichel-walls.js';
import scene2 from './plstmichel-objects.js';

/**
 * All data.
 */
const data = {
  settings: {
    backgroundImage: 'plstmichel/plstmichel-lucht.jpg',
    width: 16 * 50,
    height: 9 * 50,
    fps,
  },
  camera: {
    speed: 0,
    fieldOfView: 40,
    position: [0, 2, -1],
    rotation: [0, 0, 0, 0],
    target: [0, 2, 0],
    parentName: 'cameraParent',
  },
  gltfFiles: ['plstmichel.glb'],
  resources: [],
  score: [
    scene1,
    scene2,
  ],
};

export default data;