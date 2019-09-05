import createExtrude from './extrude.js';

let animations = [];
let mixer = null;

export function setup(settings, scene) {
  const { objects = [], } = settings;

  objects.forEach(data => {
    switch (data.type) {
      case 'canvas-extrude':
        const mesh = createExtrude(data);
        scene.add(mesh);
        break;
    }
  });
}

export function animate(delta) {
  animations.forEach(animation =>{
    animation.mixer.update(delta);
  });
}