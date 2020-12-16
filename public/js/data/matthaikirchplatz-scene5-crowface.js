import { getTweenValues, uuidv4, } from '../app/util.js';
import { getDefaultScene, fps, } from './matthaikirchplatz-shared.js';
import { AdditiveAnimationBlendMode, Euler, InterpolateSmooth, LoopOnce, LoopRepeat, Quaternion } from '../lib/three/build/three.module.js';

const scene = getDefaultScene([ 0 /* 35 */, 600], 5, true);

export default scene;


{ // CYLINDER 0
  const { id } = createExternalModel({x1: -9.0, x2: 11, y: 4, z: -5, time1: 0, time2: 30, modelName: 'cylinder'});
  addLeftRightAnimation(id, 2);
}
{ // CYLINDER 1
  const { id } = createExternalModel({x1: -11.0, x2: 13, y: 1, z: -15, time1: 2, time2: 32, modelName: 'cylinder'});
  addLeftRightAnimation(id, 0.8);
}
{ // CYLINDER 2
  const { id } = createExternalModel({x1: -10, x2: 10, y: 0.2, z: 0, time1: 10, time2: 20, modelName: 'cylinder'});
  addLeftRightAnimation(id, 4);
}
{ // SPHERE
  const { id } = createExternalModel({x1: -9.0, x2: 11, y: 3, z: -6, time1: 5, time2: 33, modelName: 'sphere'});
  addLeftRightAnimation(id, 3);
  addUpDownAnimation(id, 4, 0.5);
}
{ // SNAVEL
  const { uuid: beakId } = createGroup({ x1: -5.5, x2: 5, y: 1.5, z: 2, time1: 9, time2: 33 });
  const beakData = scene.object.children.find(child => child.uuid === beakId);
  const { id: beakTopId } = createExternalModel({ x1: 0, y: 0, z: 0, time1: 0,  
    modelName: 'beakTop', parentObj: beakData, rotateX: Math.PI * 2, });
  const { id: beakBtmId } = createExternalModel({ x1: 0, y: 0, z: 0, time1: 0,  
    modelName: 'beakBottom', parentObj: beakData, rotateX: Math.PI * 2, });
  addLeftRightAnimation(beakId, 2);
  addUpDownAnimation(beakId, 5, 0.5);
  addBeakOpenCloseAnimation(beakId, beakTopId, beakBtmId, 0.9);
}


function addBeakOpenCloseAnimation(beakId, topId, btmId, duration) {
  const animationClip = {
    duration,
    fps,
    loop: LoopRepeat,
    name: `animation-beak-${beakId}`,
    tracks: [],
  };
  scene.animations.push(animationClip);

  // top
  const angles = [0, -0.2, 0, 0];
  [topId, btmId].forEach((id, index) => {
    const keys = [];
    angles[1] *= -1;
    for (let i = 0, n = angles.length; i < n; i++) {
      const normal = i / (n - 1);
      const angle = angles[i] * Math.PI;
      const quaternion = new Quaternion().setFromEuler(new Euler(0, 0, angle)).normalize();
      keys.push({
        time: normal * duration * fps,
        value: [ quaternion.x, quaternion.y, quaternion.z, quaternion.w ],
      });
    }
    animationClip.tracks.push({
      name: `${id}.quaternion`,
      keys,
      type: 'quaternion',
    });
  });
}

/**
 *
 *
 * @param {*} id
 * @param {*} duration
 */
function addLeftRightAnimation(id, duration) {
  const keys = [];
  const angles = [1.75, -1.75, 1.745];
  for (let i = 0, n = angles.length; i < n; i++) {
    const normal = i / (n - 1);
    const angle = angles[i] * Math.PI;
    const quaternion = new Quaternion().setFromEuler(new Euler(0, angle, 0)).normalize();
    keys.push({
      time: normal * duration * fps,
      value: [ quaternion.x, quaternion.y, quaternion.z, quaternion.w ],
    });
  }
  const animationClip = {
    duration,
    fps,
    loop: LoopRepeat,
    name: `animation-${id}`,
    tracks: [
      {
        name: `${id}.quaternion`,
        keys,
        type: 'quaternion',
      }
    ],
  };
  scene.animations.push(animationClip);
}

/**
 *
 *
 * @param {*} id
 * @param {*} duration
 * @param {*} amplitude
 */
function addUpDownAnimation(id, duration, amplitude) {
  const numTweenSteps = 6;
  const amplitudes = [amplitude, -amplitude, amplitude];
  const keys = [];
  for (let i = 0, n = amplitudes.length - 1; i < n; i++) {
    const tweenValues = getTweenValues(amplitudes[i], amplitudes[i + 1], numTweenSteps, 'easeInOut');
    for (let j = 0, m = tweenValues.length; j < m; j++) {
      const normal = (i / n) + ((j / m) / n);
      keys.push({ time: normal * duration * fps, value: [0, tweenValues[j], 0] });
    }
    // const normal = i / (n - 1);
    // moveKeys.push({ time: normal * duration * fps, value: [0, amplitudes[i], 0] });
  }
  const animationClip = {
    blendMode: AdditiveAnimationBlendMode,
    duration,
    fps,
    interpolation: InterpolateSmooth,
    loop: LoopRepeat,
    name: `animation-pos-${id}`,
    tracks: [
      {
        name: `${id}.position`,
        keys,
        type: 'vector3',
      }
    ],
  };
  scene.animations.push(animationClip);
}

/**
 * Create a mesh from an external model.
 * @param {Object} conf Configuration data.
 * @returns {Object} Data.
 */
function createExternalModel(conf) {
  const { parentObj = scene.object, x1, x2, y, z, time1, time2, modelName } = conf;
  console.log('parentObj', parentObj);
  const id = uuidv4();
  const data = {
    children: [],
    id,
    imageFile: 'matthaikirchplatz/crowface1.jpg',
    keys: [ { time: time1, value: [x1, y, z]} ],
    modelFile: 'matthaikirchplatz.glb',
    modelName,
  }
  if (x2 && time2) {
    data.keys.push({ time: time2, value: [x2, y, z]});
  }
  parentObj.children.push(data);
  
  // add the main animation (only if there are multiple keys)
  if (data.keys.length > 1) {
    scene.animations[0].tracks.push({
      name: `${id}.position`,
      type: 'vector3',
      keys: data.keys.map(key => ({ time: key.time * fps, value: [ ...key.value ]})),
    });
  }
  return data;
}

/**
 * Create an empty Group.
 * @param {Object} conf Configuration data.
 * @returns {Object} Data.
 */
function createGroup(conf) {
  const { parentObj = scene.object, x1, x2, y, z, time1, time2 } = conf;
  const id = uuidv4();
  const data = {
    children: [],
    matrix: [1,0,0,0 ,0,1,0,0 ,0,0,1,0, x1, y, z ,1],
    name: id,
    type: 'Group',
    uuid: id,
  }
  parentObj.children.push(data);
  
  // add the main animation (only if there are multiple keys)
  if (x2 && time2) {
    scene.animations[0].tracks.push({
      name: `${id}.position`,
      type: 'vector3',
      keys: [
        { time: time1 * fps, value: [ x1, y, z ] },
        { time: time2 * fps, value: [ x2, y, z ] },
      ],
    });
  }
  return data;
}
