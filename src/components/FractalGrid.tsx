'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { createNoise2D, NoiseFunction2D } from 'simplex-noise'

const FractalGrid: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) {
      return
    }

    const scene = createScene()
    const camera = createCamera()
    const renderer = createRenderer(mount)

    const geometry = createGridGeometry()
    const material = createPointsMaterial()
    const noise = createNoise2D()

    applyVertexNoise(geometry, noise)
    applyVertexColors(geometry, noise)

    const points = createPoints(geometry, material)
    scene.add(points)

    const animate = createAnimationLoop(
      scene,
      camera,
      renderer,
      geometry,
      noise,
      material
    ) // Pass material to animation loop
    animate()

    const handleResize = createResizeHandler(camera, renderer)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  )
}

const createScene = () => {
  return new THREE.Scene()
}

const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 5
  return camera
}

const createRenderer = (mount: HTMLElement) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setClearColor(0xffffff, 0)
  renderer.setSize(window.innerWidth, window.innerHeight)
  mount.appendChild(renderer.domElement)
  return renderer
}

const createGridGeometry = () => {
  return new THREE.PlaneGeometry(30, 10, 50, 30)
}

const createPointsMaterial = () => {
  return new THREE.PointsMaterial({
    size: 0.03,
    vertexColors: true,
    transparent: true,
    opacity: 0.1
  })
}

const applyVertexNoise = (
  geometry: THREE.BufferGeometry,
  noise: NoiseFunction2D
) => {
  const positionAttribute = geometry.getAttribute(
    'position'
  ) as THREE.BufferAttribute
  if (!positionAttribute) return

  const vertices = positionAttribute.array || ([] as number[])
  for (let i = 0; i < vertices.length; i += 3) {
    const x = vertices[i]
    const y = vertices[i + 1]

    if (y > 2 || y < -2) {
      const noiseValue = noise(x * 0.1, y * 0.1)
      vertices[i + 2] = noiseValue * 2
    } else {
      vertices[i] = 1000
      vertices[i + 1] = 1000
      vertices[i + 2] = 1000
    }
  }
  positionAttribute.needsUpdate = true
}

const applyVertexColors = (
  geometry: THREE.BufferGeometry,
  noise: NoiseFunction2D
) => {
  const positionAttribute = geometry.getAttribute(
    'position'
  ) as THREE.BufferAttribute
  if (!positionAttribute) return

  const colorAttribute = new THREE.BufferAttribute(
    new Float32Array(positionAttribute.array.length),
    3
  )
  geometry.setAttribute('color', colorAttribute)

  const vertices = positionAttribute.array || ([] as number[])
  for (let i = 0; i < vertices.length; i += 3) {
    if (vertices[i] === 1000) continue

    const x = vertices[i]
    const y = vertices[i + 1]
    const noiseValue = noise(x * 0.1, y * 0.1)
    const color = new THREE.Color().setHSL(noiseValue * 0.2, 1, 0.5)
    colorAttribute.setXYZ(i / 3, color.r, color.g, color.b)
  }
}

const createPoints = (
  geometry: THREE.BufferGeometry,
  material: THREE.PointsMaterial
) => {
  return new THREE.Points(geometry, material)
}

const createAnimationLoop = (
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  geometry: THREE.BufferGeometry,
  noise: NoiseFunction2D,
  material: THREE.PointsMaterial // Add material parameter
) => {
  const positionAttribute = geometry.getAttribute(
    'position'
  ) as THREE.BufferAttribute
  const vertices = positionAttribute?.array || ([] as number[])
  let fadeDirection = 1

  return () => {
    const animate = () => {
      requestAnimationFrame(animate)

      const time = performance.now() * 0.001
      if (positionAttribute && vertices) {
        for (let i = 0; i < vertices.length; i += 3) {
          if (vertices[i] === 1000) continue

          const x = vertices[i]
          const y = vertices[i + 1]

          if (y > 2 || y < -2) {
            const noiseValue = noise(x * 0.1 + time * 0.1, y * 0.1 + time * 0.1)
            vertices[i + 2] = noiseValue * 2
          }
        }
        positionAttribute.needsUpdate = true
      }

      material.opacity += fadeDirection * 0.001
      if (material.opacity >= 0.8 || material.opacity <= 0.01) {
        fadeDirection *= -0.3
      }

      renderer.render(scene, camera)
    }
    animate()
  }
}

const createResizeHandler = (
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
) => {
  return () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}

export default FractalGrid
