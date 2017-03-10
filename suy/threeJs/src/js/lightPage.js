
function init() {

  var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('mainCanvas')
  });

  renderer.setClearColor(0x000000);
  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = true;

  var scene = new THREE.Scene();

  // 创建小车
  createCar(scene, renderer);
}

function createCar(scene, renderer) {
  var camera = new THREE.OrthographicCamera(-10, 10, 7.5, -7.5, 1, 40);
  camera.position.set(20, 18, -19);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);

  // 添加点光源
  var dLight = new THREE.PointLight(0xffffff, 1, 40);
  dLight.position.set(10, 15, -10);
  dLight.castShadow = true;
  scene.add(dLight);

  // 设置立方体
  var cube = new THREE.Mesh(new THREE.CubeGeometry(6, 4, 8),
    new THREE.MeshLambertMaterial({
      color: 0xffff00
    })
  );
  cube.receiveShadow = true;
  scene.add(cube);

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
  var torus1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 18),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus1.position.set(5, -1, -3);
  torus1.rotateY(Math.PI / 2);
  var torus2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 18),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus2.position.set(5, -1, 3);
  torus2.rotateY(Math.PI / 2);
  var torus3 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 18),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus3.position.set(-5, -1, -3);
  torus3.rotateY(Math.PI / 2);
  var torus4 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 18),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus4.position.set(-5, -1, 3);
  torus4.rotateY(Math.PI / 2);

  scene.add(torus1, torus2, torus3, torus4);

  renderer.render(scene, camera);
}
