
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
  // var cube = new THREE.Mesh(new THREE.CubeGeometry(6, 4, 8),
  //   new THREE.MeshLambertMaterial({
  //     color: 0xffff00
  //   })
  // );
  // scene.add(cube);

  var materials = [];
  for (var i = 1; i < 7; ++i) {
    // materials.push(new THREE.MeshBasicMaterial({
    //   map: THREE.ImageUtils.loadTexture('../../img/' + i + '.jpg',
    //     {}, function () {
    //       renderer.render(scene, camera);
    //     }),
    //   overdraw: true
    // }));
    // instantiate a loader
    var loader = new THREE.TextureLoader();

    // load a resource
    loader.load(
      // resource URL
      '../../img/' + i + '.jpg',
      // Function when resource is loaded
      function ( texture ) {
        // do something with the texture
        materials.push(new THREE.MeshBasicMaterial({
          map: texture
        }));
      },
      // Function called when download progresses
      function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      },
      // Function called when download errors
      function ( xhr ) {
        console.log( 'An error happened' );
      }
    );
  }


  var cube = new THREE.Mesh(
    new THREE.CubeGeometry(6, 4, 8),
    new THREE.MeshFaceMaterial(materials)
  );
  cube.castShadow = true;
  scene.add(cube);

  // 添加点光源
  var dLight = new THREE.PointLight(0xffffff);
  dLight.position.set(30, 30, 20);
  dLight.castShadow = true;
  scene.add(dLight);
  dLight.target = cube;
  // dLight.shadow.camera.near = 2;
  // dLight.shadow.camera.far = 40;
  // dLight.shadow.camera.fov = 60;
  dLight.shadow.mapSize.width = 2048;
  dLight.shadow.mapSize.height = 2048;

  // 设置两个圆柱体
  var cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 10, 18, 3),
    new THREE.MeshLambertMaterial({
      color: 0xbcbcbc
    })
  );
  cylinder1.position.set(0, -1, 3);
  cylinder1.rotateZ(Math.PI / 2);
  cylinder1.castShadow = true;
  scene.add(cylinder1);
  var cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 10, 18, 3),
    new THREE.MeshLambertMaterial({
      color: 0xbcbcbc
    })
  );
  cylinder2.position.set(0, -1, -3);
  cylinder2.rotateZ(Math.PI / 2);
  cylinder2.castShadow = true;
  scene.add(cylinder2);

  //add four torus
  var torus1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 60),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus1.position.set(5, -1, -3);
  torus1.rotateY(Math.PI / 2);
  torus1.castShadow = true;
  var torus2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 60),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus2.position.set(5, -1, 3);
  torus2.rotateY(Math.PI / 2);
  torus2.castShadow = true;
  var torus3 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 60),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus3.position.set(-5, -1, -3);
  torus3.rotateY(Math.PI / 2);
  torus3.castShadow = true;
  var torus4 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 12, 60),
    new THREE.MeshLambertMaterial({
      color: 0x666666
    })
  );
  torus4.position.set(-5, -1, 3);
  torus4.rotateY(Math.PI / 2);
  torus4.castShadow = true;
  scene.add(torus1, torus2, torus3, torus4);

  renderer.render(scene, camera);
}
