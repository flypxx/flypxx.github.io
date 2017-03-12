
function init() {

  var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('mainCanvas'),
    antialias: true
  });

  renderer.setClearColor(0xffffff);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMapSoft = true;

  var scene = new THREE.Scene();

  // 创建小车
  createCar(scene, renderer);
}

function createCar(scene, renderer) {
  var camera = new THREE.OrthographicCamera(-20, 20, 15, -15, 1, 100);
  camera.position.set(40, 36, -38);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);

  // 添加接受阴影的平面
  var plane = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40, 30, 30),
    new THREE.MeshLambertMaterial({ color: 0x4a9a5a })
  );
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -3;
  plane.receiveShadow = true;
  scene.add(plane);

  // 设置立方体
  var cube = new THREE.Mesh(new THREE.CubeGeometry(6, 4, 8),
    new THREE.MeshLambertMaterial({
      color: 0xffff00
    })
  );
  cube.castShadow = true;
  scene.add(cube);

  // 添加点光源
  var dLight = new THREE.PointLight(0xffffff);
  dLight.position.set(20, 30, 30);
  dLight.castShadow = true;
  scene.add(dLight);
  dLight.target = cube;
  // dLight.shadow.camera.near = 2;
  // dLight.shadow.camera.far = 40;
  // dLight.shadow.camera.fov = 60;
  dLight.shadow.mapSize.width = 1024;
  dLight.shadow.mapSize.height = 1024;

  // 设置两个圆柱体
  var cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 10, 18, 3),
    new THREE.MeshLambertMaterial({
      color: 0xbcbcbc
    })
  );
  cylinder1.position.set(0, -1, 3);
  cylinder1.rotateZ(Math.PI / 2);
  scene.add(cylinder1);
  var cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 10, 18, 3),
    new THREE.MeshLambertMaterial({
      color: 0xbcbcbc
    })
  );
  cylinder2.position.set(0, -1, -3);
  cylinder2.rotateZ(Math.PI / 2);
  scene.add(cylinder2);

  //add four torus
  var torus1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 60),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus1.position.set(5, -1, -3);
  torus1.rotateY(Math.PI / 2);
  var torus2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 60),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus2.position.set(5, -1, 3);
  torus2.rotateY(Math.PI / 2);
  var torus3 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 60),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus3.position.set(-5, -1, -3);
  torus3.rotateY(Math.PI / 2);
  var torus4 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 60),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus4.position.set(-5, -1, 3);
  torus4.rotateY(Math.PI / 2);

  scene.add(torus1, torus2, torus3, torus4);

  var helper = new THREE.CameraHelper( camera );
  scene.add( helper );

  renderer.render(scene, camera);
}
