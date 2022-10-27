import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  CylinderGeometry,
  BoxGeometry,
  OctahedronGeometry,
  ConeGeometry,
} from "three"
import { renderer, updateRenderer } from "/src/core/renderer"

import { gui } from "/src/core/gui"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#5EDCAE",
}
//ESFERAS//
const sphere = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere.scale.set(0.5,0.5,0.5)
sphere.position.set(2.8, 2.8, 0)
sphere.castShadow = true

const sphere2 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere2.scale.set(0.5,0.5,0.5)
sphere2.position.set(2.5, 2.8, 0.6)
sphere2.castShadow = true

const sphere3 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere3.scale.set(0.5,0.5,0.5)
sphere3.position.set(1.8, 2.8, 0.8)
sphere3.castShadow = true

const sphere4 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere4.scale.set(0.5,0.5,0.5)
sphere4.position.set(1.2, 2.8, 0.3)
sphere4.castShadow = true

const sphere5 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere5.scale.set(0.5,0.5,0.5)
sphere5.position.set(1.3, 2.8, -0.4)
sphere5.castShadow = true

const sphere6 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere6.scale.set(0.5,0.5,0.5)
sphere6.position.set(2.5, 2.8, -0.7)
sphere6.castShadow = true

const sphere7 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere7.scale.set(0.5,0.5,0.5)
sphere7.position.set(1.8, 2.8, -0.8)
sphere7.castShadow = true

const sphere8 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere8.scale.set(0.5,0.5,0.5)
sphere8.position.set(2.2, 3.3, 0.4)
sphere8.castShadow = true

const sphere9 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere9.scale.set(0.5,0.5,0.5)
sphere9.position.set(2.4, 3.3, -0.1)
sphere9.castShadow = true

const sphere10 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere10.scale.set(0.5,0.5,0.5)
sphere10.position.set(1.7, 3.3, 0.4)
sphere10.castShadow = true

const sphere11 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere11.scale.set(0.5,0.5,0.5)
sphere11.position.set(2.0, 3.3, -0.4)
sphere11.castShadow = true

const sphere12 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere12.scale.set(0.5,0.5,0.5)
sphere12.position.set(1.4, 3.3, -0.2)
sphere12.castShadow = true

const sphere13 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: "#2d7121",
    wireframe: false,
  })
)
sphere13.scale.set(0.5,0.5,0.5)
sphere13.position.set(2.0, 3.7 , 0)
sphere13.castShadow = true

//ESFERAS//
const sphereCtrls = gui.addFolder({
  title: "Sphere",
})


//CILINDRO//
const cylinder = new Mesh(
  new CylinderGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#7B3F00",
    wireframe: false,
  })
)
cylinder.scale.set(0.25,6,0.25)
cylinder.position.set(2,0,0)
cylinder.castShadow=true
//CILINDRO//


//CUBOS//
const cube = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#dcdf00",
    wireframe: false,
  })
)
cube.scale.set(2,3,2)
cube.position.set(-1,0,0)
cube.castShadow=true

const cube2 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#ff0000",
    wireframe: false,
  })
)
cube2.scale.set(2.2,0.2,2.2)
cube2.position.set(-1,1.5,0)
cube2.castShadow=true

const cube3 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#ff0000",
    wireframe: false,
  })
)
cube3.scale.set(1.8,0.2,1.8)
cube3.position.set(-1,1.7,0)
cube3.castShadow=true

const cube4 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#ff0000",
    wireframe: false,
  })
)
cube4.scale.set(1.4,0.2,1.4)
cube4.position.set(-1,1.9,0)
cube4.castShadow=true

const cube5 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#ff0000",
    wireframe: false,
  })
)
cube5.scale.set(1,0.2,1)
cube5.position.set(-1,2.1,0)
cube5.castShadow=true

const cube6 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#7B3F00",
    wireframe: false,
  })
)
cube6.scale.set(0.5,0.75,0.6)
cube6.position.set(-1,0.3,0.8)
cube6.castShadow=true

const cube7 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#7B3F00",
    wireframe: false,
  })
)
cube7.scale.set(0.5,0.75,0.6)
cube7.position.set(-1.5,0.3,-0.8)
cube7.castShadow=true

const cube8 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#00ced1",
    wireframe: false,
  })
)
cube8.scale.set(0.3,0.3,0.5)
cube8.position.set(-1.6,0.4,0.8)
cube8.castShadow=true

const cube9 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#00ced1",
    wireframe: false,
  })
)
cube9.scale.set(0.3,0.3,0.5)
cube9.position.set(-0.4,0.4,0.8)
cube9.castShadow=true

const cube10 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#00ced1",
    wireframe: false,
  })
)
cube10.scale.set(0.3,0.3,0.5)
cube10.position.set(-1.9,0.6,0.0)
cube10.castShadow=true

const cube11 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#00ced1",
    wireframe: false,
  })
)
cube11.scale.set(0.3,0.3,0.5)
cube11.position.set(-0.1,0.6,0.0)
cube11.castShadow=true

const cube12 = new Mesh(
  new BoxGeometry(1,1,1),
  new MeshToonMaterial({
    color: "#ff0000",
    wireframe: false,
  })
)
cube12.scale.set(0.5,0.2,0.6)
cube12.position.set(-1,2.3,0)
cube12.castShadow=true
////

//CONE//
const cone  = new Mesh(
  new ConeGeometry(3,4,8),
  new MeshToonMaterial({
    color: "#00ced1",
    wireframe: false,
  })
)
cone.scale.set(0.1,0.1,0.1)
cone.position.set(-1,1,0.9)
cone.castShadow=true
cone.rotation.set(1.5,0,3)
////


sphereCtrls.addInput(cone.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(cone.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(cone.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(PARAMS, "color").on("change", (e) => {
  sphere.material.color = new Color(e.value)
})

sphereCtrls.addInput(sphere.material, "wireframe")


scene.add(sphere)
scene.add(sphere2)
scene.add(sphere3)
scene.add(sphere4)
scene.add(sphere5)
scene.add(sphere6)
scene.add(sphere7)
scene.add(sphere8)
scene.add(sphere9)
scene.add(sphere10)
scene.add(sphere11)
scene.add(sphere12)
scene.add(sphere13)
scene.add(cylinder)
scene.add(cube)
scene.add(cube2)
scene.add(cube3)
scene.add(cube4)
scene.add(cube5)
scene.add(cube6)
scene.add(cube7)
scene.add(cube8)
scene.add(cube9)
scene.add(cube10)
scene.add(cube11)
scene.add(cube12)
scene.add(cone)

const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
  new MeshToonMaterial({
    color: "#006400",
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
