window.onload = function() {
	//everything for audio
  var ctx = new AudioContext();
  var audio = document.getElementById('music');
  audio.crossOrigin = "anonymous";
  var audioSrc = ctx.createMediaElementSource(audio);
  var analyser = ctx.createAnalyser();
  
  audioSrc.connect(analyser);
  audioSrc.connect(ctx.destination); 
  var frequencyData = new Uint8Array(analyser.frequencyBinCount);
  //lets make a 3D scene
  var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var geometry = new THREE.BoxGeometry( 1,1,1 );
	var geometry2 = new THREE.BoxGeometry( 3,3,3 );
	var geometry3 = new THREE.BoxGeometry(5,5,5);
	var geometry4 = new THREE.BoxGeometry(.6,.6,.6);
	var geometry5 = new THREE.BoxGeometry(.2,.2,.2);
	var geometry6 = new THREE.BoxGeometry(12,12,12);
	var geometry7 = new THREE.BoxGeometry(30,30,30);

	var material2 = new THREE.MeshBasicMaterial( { color: 0x002e94 } );
	var material3 = new THREE.MeshBasicMaterial( { color: 0x0251c7 } );
	var material4 = new THREE.MeshBasicMaterial( { color: 0x282Ae0 } );
	var material5 = new THREE.MeshBasicMaterial( { color: 0x4EADFF } );
	var material6 = new THREE.MeshBasicMaterial( { color: 0x41EDFF } );
	var material = new THREE.MeshBasicMaterial( {color: 0x0000AA});
	var material7 = new THREE.MeshBasicMaterial( {color: 0x000077});



	
	//center
	var cube = new THREE.Mesh(geometry6,material);
	var cube2 = new THREE.Mesh(geometry3, material2);
	var cube3 = new THREE.Mesh(geometry2,material4);
	var cube4 = new THREE.Mesh(geometry,material3);
	var cube5 = new THREE.Mesh(geometry4,material5);
	var cube6 = new THREE.Mesh(geometry5,material6);
	var cube7 = new THREE.Mesh(geometry7,material7);
	


	
	//positions
	cube.position.set(0,0,-22);
	cube2.position.set(0,0,-8);
	cube3.position.set(0,0,-4);
	cube4.position.set(0,0,1);
	cube5.position.set(0,0,2);
	cube6.position.set(0,0,3);
	cube7.position.set(0,0,-50);

	scene.add(cube);
	scene.add(cube2);
	scene.add(cube3);
	scene.add(cube4);
	scene.add(cube5);
	scene.add(cube6);
	scene.add(cube7);



	camera.position.z = 5;


  function renderFrame() {
     requestAnimationFrame(renderFrame,3000);
     analyser.getByteFrequencyData(frequencyData); 
	 	 cube.rotation.x += 0.02;
     cube.rotation.y -=0.02;
     cube.scale.x = frequencyData[0]/200;
     cube.scale.y = frequencyData[0]/200;
     cube.scale.z = frequencyData[0]/200;
     cube2.rotation.x += 0.01;
     cube2.rotation.y += 0.01;
     cube2.scale.x = frequencyData[0]/200;
     cube2.scale.y = frequencyData[0]/200;
     cube2.scale.z = frequencyData[0]/200;
   	 cube3.scale.x = frequencyData[0]/200;
     cube3.scale.y = frequencyData[0]/200;
     cube3.scale.z = frequencyData[0]/200;
     cube3.rotation.y -= 0.01;
     cube7.scale.x = frequencyData[0]/150;
     cube7.rotation.x += -0.01;
     cube7.rotation.y += 0.005;
     cube7.scale.y = frequencyData[0]/150;
     cube7.scale.z = frequencyData[0]/150;
     cube4.scale.x = frequencyData[0]/200;
     cube4.scale.y = frequencyData[0]/200;
     cube4.scale.z = frequencyData[0]/200;
     cube4.rotation.z += 0.01;
     cube5.scale.x = frequencyData[0]/200;
     cube5.scale.y = frequencyData[0]/200;
     cube5.scale.z = frequencyData[0]/200;
     cube5.rotation.x += 0.012;
     cube6.rotation.x += 0.015;
     cube6.rotation.y += 0.011;
     cube6.rotation.z += 0.018;

   

     renderer.render(scene,camera);

  }
  renderFrame();
};