    
         const width = window.innerWidth
         const height = window.innerHeight
         const scene = new THREE.Scene()
         scene.background = new THREE.Color(0x22626)
         // camera
         const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
         camera.position.set(0, 0, 10)
         // cube
         const geometry = new THREE.BoxGeometry(3, 3, 2)
         const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true
         })
         const cube = new THREE.Mesh(geometry, material)
         scene.add(cube)
         // renderer
         const renderer = new THREE.WebGL1Renderer()
         renderer.setSize(width, height)
         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
         // rendering the scene
         const container = document.querySelector('#threejs-container')
         container.append(renderer.domElement)
         renderer.render(scene, camera)