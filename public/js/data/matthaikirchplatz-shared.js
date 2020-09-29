import { uuidv4, } from '../app/util.js';

export const fps = 15;

export function getDefaultScene(lifespan, sceneNumber, hasAnimations) {
  const scene = {
    animations: [],
    canvases: {},
    clipId: uuidv4(),
    geometries: [],
    lifespan: [ ...lifespan ],
    materials: [],
    metadata: {
      generator: 'video-edit-3d',
      type: 'Object',
      version: 4.3,
    },
    object: {
      type: 'Group',
      name: `scene${sceneNumber}`,
      uuid: `scene${sceneNumber}`,
      children: [],
    },
    assets: {},
  };

  if (hasAnimations) {
    scene.animations = [{
      duration: 90,
      fps,
      loop: THREE.LoopOnce,
      name: 'actor-animation',
      tracks: [],
    }];
  }

  return scene;
}
