import type { ContactInfo, SkillCategory, ExperienceItem, EducationItem, AchievementItem, NavLink, ProjectItem } from './types';

export const contact: ContactInfo = {
  email: 'rudy.gamarra.g@gmail.com',
  phone: '+51 922095018',
  linkedin: 'https://www.linkedin.com/in/rudy-gamarra-condor/',
  github: 'https://github.com/RgamarraC',
};

export const navLinks: NavLink[] = [
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'skills', name: 'Skills' },
  { id: 'education', name: 'Education' },
  { id: 'achievements', name: 'Achievements' },
];

export const shortAbout = "I build immersive and engaging digital experiences. With a foundation in game development and simulation, I specialize in bringing ideas to life using Unity, VR/AR, and WebGL.";

export const aboutData = "Senior Simulator and Video Game Developer with over 5 years of experience in immersive technologies and gamification. Specialist in Unity with a proven track record in developing innovative solutions for industrial and educational sectors. Noted experience in publishing projects on Meta and Steam platforms, as well as developing simulators for the mining-energy sector. My ability to combine technical creativity with business objectives has resulted in effective solutions and high-impact immersive experiences, including recognition at the Hackathon of the National Society of Mining, Petroleum, and Energy.";

export const skills: SkillCategory[] = [
  {
    category: 'Technologies',
    skills: [
      { name: 'Unity', level: 'Avanzado' },
      { name: 'C#' },
      { name: 'WebGL' },
      { name: 'VR/AR' },
      { name: 'Meta Quest' },
      { name: 'Steam VR' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'JIRA' },
      { name: 'Visual Studio' },
      { name: 'Unity Profiler' },
    ],
  },
  {
    category: '3D Modeling',
    skills: [{ name: 'Maya' }, { name: 'Blender' }],
  },
  {
    category: 'Methodologies',
    skills: [{ name: 'Scrum' }, { name: 'Gamification' }, { name: 'Agile Development' }],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Spanish', level: 'Nativo' },
      { name: 'English', level: 'Intermedio' },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'OraculusXR',
    title: 'VR Developer (Freelance)',
    period: 'FEB 2025 – SET 2025',
    location: 'Lima, Perú',
    description: [
      'Design and development of an application for the Physical Therapy area.',
      'Implementation of body detection for Virtual Reality.',
      'Development and implementation of gamification.',
    ],
  },
  {
    company: 'GDP',
    title: 'Unity Developer',
    period: 'NOV 2024 – FEB 2025',
    location: 'Lima, Perú',
    description: [
      'Development and implementation of games for casino machines using Unity.',
      'Optimization of game mechanics and reward systems to maximize user experience.',
      'Implementation of agile development practices to improve team efficiency.',
      'Improvements in user interface and navigation.',
    ],
  },
  {
    company: 'Ministerio de Cultura',
    title: 'VR Developer (Freelance)',
    period: 'JUN 2024 – JUL 2024',
    location: 'Lima, Perú',
    description: [
      'Successful optimization and publication of an immersive experience on Meta and Steam.',
      'Implementation of graphical quality improvements, increasing performance by 40%.',
      'Development of new interaction mechanics to enhance user experience.',
    ],
  },
  {
    company: 'ARTEMAR',
    title: 'VR Simulators Developer',
    period: 'JUN 2023 – FEB 2024',
    location: 'Lima, Perú',
    description: [
      'Leadership in the development of the SOMA project using Teslasuit technology.',
      'Implementation of an industrial training system with gamification.',
      'Achieved a 30% reduction in training time through immersive simulations.',
    ],
  },
  {
    company: 'Multipacha',
    title: 'Simulators Developer',
    period: 'MAR 2022 – MAR 2023',
    location: 'Lima, Perú',
    description: [
      'Development of security simulators for the mining sector.',
      'Implementation of evaluation systems and performance metrics.',
      'Trained over 200 operators in security procedures.',
    ],
  },
  {
    company: 'IMMERSIF BRANDS',
    title: 'VR Developer (Freelance)',
    period: 'SEP 2022 – OCT 2022',
    location: 'Lima, Perú',
    description: [
      'Complete development of a veterinary simulator for Oculus Quest.',
      'Implementation of detailed medical procedures with technical precision.',
      'Performance optimization for VR devices, improving FPS by 50%.',
    ],
  },
  {
    company: 'MODO BETA',
    title: 'Unity WebGL Developer (Freelance)',
    period: 'APR 2022 – AUG 2022',
    location: 'Lima, Perú',
    description: [
      'Development of a 3D apartment visualizer in WebGL.',
      'Web performance optimization, reducing load time by 60%.',
      'Implementation of intuitive navigation, increasing engagement by 45%.',
    ],
  },
  {
    company: 'Playtec',
    title: 'Simulators Developer',
    period: 'JAN 2019 – JUN 2021',
    location: 'Lima, Perú',
    description: [
      'Multiplatform development of educational and training simulators.',
      'Successful presentation of projects at Perumin 2019.',
      'Development of interactive material for CARE and MINEDU.',
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: 'Game Jam SANDA 2025',
    description: 'Desarrollo de un juego prototipo en un evento Game Jam, centrado en la temática de gravedad. La mecánica principal involucra a una araña que debe desafiar la gravedad para sobrevivir el mayor tiempo posible dentro de la mochila de un repartidor desenfrenado. El proyecto demuestra la capacidad de diseño rápido de mecánicas originales y, especialmente, la habilidad de colaboración efectiva al trabajar con un equipo recién formado bajo una restricción de tiempo intensa.',
    technologies: ['Unity', 'C#'],
    thumbnail: '/assets/projects/GameJam/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/HUq7uPs4kXA' },
      { type: 'video', src: 'https://youtu.be/aNbAqfccavM' },
      { type: 'image', src: '/assets/projects/GameJam/img1.webp' },
      { type: 'image', src: '/assets/projects/GameJam/img2.webp' },
      { type: 'image', src: '/assets/projects/GameJam/img3.webp' },
      { type: 'image', src: '/assets/projects/GameJam/img4.webp' },
      { type: 'image', src: '/assets/projects/GameJam/img5.webp' },
      { type: 'image', src: '/assets/projects/GameJam/img6.webp' },
    ]
  },
  {
    name: 'Civilización Caral (Mejora Gráfica y Navegación)',
    description: 'Proyecto de optimización de una experiencia de Realidad Extendida (XR) sobre la Civilización Caral, desarrollado en Unity. El enfoque principal fue la mejoría gráfica (fidelidad visual, texturizado) y la reingeniería de la navegación (UI/UX) para una exploración más intuitiva y fluida. Un logro clave fue la publicación exitosa en las tiendas de Steam y Meta Quest, demostrando experiencia en el ciclo completo de desarrollo y distribución de aplicaciones de Realidad Virtual multiplataforma.',
    technologies: ['Unity', 'C#', 'VR','Steam','Meta Quest'],
    thumbnail: '/assets/projects/Caral Pututus/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/66kOun_O4L8' },
      { type: 'image', src: '/assets/projects/Caral Pututus/img1.webp' },
      { type: 'image', src: '/assets/projects/Caral Pututus/img2.webp' },
      { type: 'image', src: '/assets/projects/Caral Pututus/img3.webp' },
      { type: 'image', src: '/assets/projects/Caral Pututus/img4.webp' },
    ]
  },
  {
    name: 'Demo Técnica Caral (Implementación Total)',
    description: 'Liderazgo en el desarrollo inicial y la implementación completa de la solución de Realidad Extendida sobre la Civilización Caral. El proyecto abarcó el diseño conceptual, la programación de la lógica de aplicación, la integración de contenido 3D a escala y la validación técnica (Demo Técnica) de funcionalidades clave como el tracking de superficie y el rendimiento, asegurando la viabilidad técnica para la recreación del sitio arqueológico.',
    technologies: ['Unity', 'C#','Meta Quest','VR'],
    thumbnail: '/assets/projects/Demo tecnica Caral/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/euE8oVjLfcc' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img1.webp' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img2.webp' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img3.webp' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img4.webp' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img5.webp' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img6.webp' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img7.webp' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img8.webp' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img9.webp' },
      { type: 'image', src: '/assets/projects/Demo tecnica Caral/img10.webp' },
    ]
  },
  {
    name: 'AR Obstetra (Ayuda Visual para Formación Clínica)',
    description: 'Desarrollo de un sistema de Realidad Aumentada para una obstetra, diseñado para servir como ayuda visual y referencia durante la formación de estudiantes. La solución fue implementada utilizando Vuforia AR para escanear y aumentar el material didáctico físico y existente (cartillas, modelos, etc.) con contenido digital 3D de alta precisión. Este proyecto se enfocó en el factor de integración con recursos existentes y la coherencia visual, permitiendo a los alumnos visualizar anatomía compleja y procedimientos (como distocia de hombros o etapas del parto) con una coherencia que complementa y mejora los recursos de capacitación ya establecidos.',
    technologies: ['Unity', 'C#', 'AR', 'Vuforia'],
    thumbnail: '/assets/projects/ARObstetra/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/OOts5CddUxg' },
      { type: 'image', src: '/assets/projects/ARObstetra/img1.webp' },
      { type: 'image', src: '/assets/projects/ARObstetra/img2.webp' },
      { type: 'image', src: '/assets/projects/ARObstetra/img3.webp' },
      { type: 'image', src: '/assets/projects/ARObstetra/img4.webp' },
      { type: 'image', src: '/assets/projects/ARObstetra/img5.webp' },
      { type: 'image', src: '/assets/projects/ARObstetra/img6.webp' },
      { type: 'image', src: '/assets/projects/ARObstetra/img7.webp' },
      { type: 'image', src: '/assets/projects/ARObstetra/img8.webp' },
    ]
  },
  {
    name: 'Veterinaria',
    description: 'Desarrollo de un simulador interactivo 3D enfocado en el entrenamiento de la ovariectomía (cirugía de esterilización) en mascotas. El proyecto proporciona un entorno virtual seguro para que estudiantes y profesionales practiquen la manipulación de herramientas quirúrgicas y el uso correcto de implementos, evaluando la técnica y la precisión en un contexto de simulación crítica.',
    technologies: ['Unity', 'C#', 'Meta quest', 'VR',],
    thumbnail: '/assets/projects/Veterinaria/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/5qYEDPaL1Bk' },
      { type: 'image', src: '/assets/projects/Veterinaria/img1.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img2.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img3.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img4.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img5.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img6.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img7.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img8.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img9.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img10.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img11.webp' },
      { type: 'image', src: '/assets/projects/Veterinaria/img12.webp' },
    ]
  },
  {
    name: 'Visualizador Interactivo de Departamentos',
    description: 'Desarrollo de un Visualizador Interactivo 3D de Departamentos optimizado para su ejecución en WebGL (navegador web). El proyecto requirió una intensa optimización de rendimiento y recursos para asegurar una experiencia fluida. La herramienta permite a los usuarios cambiar dinámicamente de piso (planta) y personalizar en tiempo real los acabados (materiales, texturas y relieves), ofreciendo una solución de venta inmersiva y altamente accesible.',
    technologies: ['Unity', 'C#', 'WebGL'],
    thumbnail: '/assets/projects/visulaizador dep/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/RRNnvHxroAM' },
      { type: 'image', src: '/assets/projects/visulaizador dep/img1.webp' },
      { type: 'image', src: '/assets/projects/visulaizador dep/img2.webp' },
      { type: 'image', src: '/assets/projects/visulaizador dep/img3.webp' },
      { type: 'image', src: '/assets/projects/visulaizador dep/img4.webp' },
      { type: 'image', src: '/assets/projects/visulaizador dep/img5.webp' },
    ]
  },
  {
    name: 'CARE Fichas Interactivas (Desarrollo Offline MINEDU)',
    description: 'Desarrollo rápido de una suite de ayudas didácticas digitales masivas en colaboración con CARE Perú y el Ministerio de Educación (MINEDU). El proyecto se enfocó en asegurar la continuidad educativa para estudiantes de primaria y secundaria en siete áreas curriculares (Matemáticas, Comunicación, Ciencias, etc.) durante la pandemia. Para maximizar el compromiso y el aprendizaje, se utilizó la gamificación en el entorno educativo, permitiendo que los estudiantes aprendieran jugando. El reto técnico principal fue el desarrollo offline-first para tablets, destinado a zonas sin acceso a internet. Esto requirió el diseño de un sistema robusto de almacenamiento de notas local y un aplicativo maestro para docentes, el cual se conectaba a la tablet del alumno para recolectar automáticamente los archivos de progreso y notas.',
    technologies: ['Unity', 'C#','Android'],
    thumbnail: '/assets/projects/CAREFichas/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/NwUr1uyS6Lk' },
      { type: 'image', src: '/assets/projects/CAREFichas/img1.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img2.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img3.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img4.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img5.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img6.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img7.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img8.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img9.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img10.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img11.webp' },
      { type: 'image', src: '/assets/projects/CAREFichas/img12.webp' },
    ]
  },
  {
    name: 'AR Marketing Demo',
    description: 'Demostración técnica enfocada en el dominio de las capacidades avanzadas de la Realidad Aumentada utilizando el SDK de Vuforia. Se implementó un Shader de Oclusión personalizado para gestionar la interacción de objetos virtuales con elementos del mundo real, creando un efecto visualmente coherente donde los objetos pueden ser parcialmente ocultos por el entorno (oclusión). Este showcase técnico valida la implementación precisa del tracking de superficie, la gestión de la interactividad y la optimización para una experiencia AR fluida y creíble.',
    technologies: ['Unity', 'C#', 'Vuforia', 'AR'],
    thumbnail: '/assets/projects/AR_MarketingDemo/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/JGierWAu_U0' },
      { type: 'image', src: '/assets/projects/AR_MarketingDemo/img1.webp' },
      { type: 'image', src: '/assets/projects/AR_MarketingDemo/img2.webp' },
      { type: 'image', src: '/assets/projects/AR_MarketingDemo/img3.webp' },
      { type: 'image', src: '/assets/projects/AR_MarketingDemo/img4.webp' },
      { type: 'image', src: '/assets/projects/AR_MarketingDemo/img5.webp' },
    ]
  },
  {
    name: 'Iluminarias',
    description: 'Desarrollo de una solución de simulación interactiva para la evaluación y verificación de niveles de iluminación (lux) en interiores de una mina. El proyecto se basó en cálculos reales de luxómetros para garantizar la precisión de la simulación. Fue inicialmente implementado para Realidad Virtual (VR), ofreciendo una vista inmersiva, y luego optimizado y portado a WebGL para un acceso y despliegue masivo a través del navegador.',
    technologies: ['Unity', 'C#', 'VR', 'WebGL'],
    thumbnail: '/assets/projects/Luminarias/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/rT4Q0IvbcBE' },
      { type: 'video', src: 'https://youtu.be/4UPzZW6CZpM' },
      { type: 'image', src: '/assets/projects/Luminarias/img1.webp' },
      { type: 'image', src: '/assets/projects/Luminarias/img2.webp' },
      { type: 'image', src: '/assets/projects/Luminarias/img3.webp' },
      { type: 'image', src: '/assets/projects/Luminarias/img4.webp' },
      { type: 'image', src: '/assets/projects/Luminarias/img5.webp' },
      { type: 'image', src: '/assets/projects/Luminarias/img6.webp' },
      { type: 'image', src: '/assets/projects/Luminarias/img7.webp' },
      { type: 'image', src: '/assets/projects/Luminarias/img8.webp' },
      { type: 'image', src: '/assets/projects/Luminarias/img9.webp' },
      { type: 'image', src: '/assets/projects/Luminarias/img10.webp' },
    ]
  },
  {
    name: 'Proyectos Enel (Simulador de Mantenimiento y Seguridad VR)',
    description: 'Desarrollo de un complejo simulador de Realidad Virtual (VR) para el entrenamiento de la secuencia completa de mantenimiento en una subestación eléctrica. El proyecto se centra en la seguridad operacional, obligando al empleado (jugador) a seguir rigurosamente las "Cinco Reglas de Oro" de seguridad, incluyendo la selección precisa de EPPs, herramientas y el proceso de Desenergizado/Bloqueo/Etiquetado (LOTO). Como innovación clave, se integró una API de reconocimiento y respuesta de voz (utilizando tecnología IBM en su momento) para crear un entorno de capacitación interactivo. El simulador fue desarrollado inicialmente en VR y posteriormente optimizado y porteado a WebGL para un amplio acceso.',
    technologies: ['Unity', 'C#', 'VR', 'WebGL', 'IBM Watson'],
    thumbnail: '/assets/projects/Enel/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/syAGjLV70Vk' },
      { type: 'video', src: 'https://youtu.be/R70TMtNbzKs' },
      { type: 'video', src: 'https://youtu.be/OxbSZrlz80s' },
      { type: 'image', src: '/assets/projects/Enel/img1.webp' },
      { type: 'image', src: '/assets/projects/Enel/img2.webp' },
      { type: 'image', src: '/assets/projects/Enel/img3.webp' },
      { type: 'image', src: '/assets/projects/Enel/img4.webp' },
      { type: 'image', src: '/assets/projects/Enel/img5.webp' },
      { type: 'image', src: '/assets/projects/Enel/img6.webp' },
      { type: 'image', src: '/assets/projects/Enel/img7.webp' },
      { type: 'image', src: '/assets/projects/Enel/img8.webp' },
      { type: 'image', src: '/assets/projects/Enel/img9.webp' },
    ]
  },
  {
    name: 'Hackathon (Perumin 2019)',
    description: 'Desarrollo de un Producto Mínimo Viable (MVP) durante el Hackathon Perumin 2019, enfocado en la seguridad del empleado y accesibilidad en el área de SOMA. El proyecto implementó una simulación interactiva de un volquete (dump truck) para entrenar el procedimiento crítico de desenergizado, bloqueo, y etiquetado (LOTO). Esto demuestra la aplicación de prototipado rápido para generar soluciones de Realidad Extendida (XR) que minimicen riesgos en entornos mineros.',
    technologies: ['Unity', 'C#','VR'],
    thumbnail: '/assets/projects/hackaton2019/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/6k6KqCOUab0' },
      { type: 'image', src: '/assets/projects/hackaton2019/img1.webp' },
      { type: 'image', src: '/assets/projects/hackaton2019/img2.webp' },
      { type: 'image', src: '/assets/projects/hackaton2019/img3.webp' },
      { type: 'image', src: '/assets/projects/hackaton2019/img4.webp' },
      { type: 'image', src: '/assets/projects/hackaton2019/img5.webp' },
    ]
  },
  {
    name: 'Certus Simulador Educativo Multi-área',
    description: 'Diseño y desarrollo de una suite de 11 simuladores interactivos enfocados en múltiples áreas de estudio de Certus (incluyendo banca, importación y servicio al cliente). Cada módulo fue desarrollado en Unity y optimizado para WebGL para su integración en la plataforma educativa de la institución. El objetivo principal fue dotar a los estudiantes de una experiencia práctica en un entorno de simulación de negocios, con la funcionalidad clave de que los resultados y el desempeño se vean reflejados automáticamente en su cuadro de notas, demostrando experiencia en desarrollo de contenido formativo escalable con impacto académico directo.',
    technologies: ['Unity', 'C#','WebGL'],
    thumbnail: '/assets/projects/Simulador Academico Certus/img1.webp',
    media: [
      { type: 'video', src: 'https://youtu.be/79AChp89Lqw' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img1.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img2.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img3.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img4.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img5.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img6.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img7.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img8.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img9.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img10.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img11.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img12.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img13.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img14.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img15.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img16.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img17.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img18.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img19.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img20.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img21.webp' },
      { type: 'image', src: '/assets/projects/Simulador Academico Certus/img22.webp' },
    ]
  }
];

export const education: EducationItem[] = [
  {
    institution: 'TECSUP',
    degree: 'Design and Development of Simulators and Videogames',
    period: '2016 – 2022',
    location: 'Lima, Perú',
  },
  {
    institution: 'CONVERSA - TECSUP',
    degree: 'Intermediate Level English',
    period: '2025',
    location: 'Lima, Perú',
  },
];

export const achievements: AchievementItem[] = [
  {
    description: 'Second Place in the 5th Hackathon "Together towards innovation from the mining-energy sector"',
    source: 'SNMPE, 2019',
  },
  {
    description: 'Successful publication of multiple projects on Meta Store and Steam.',
    source: '',
  },
  {
    description: 'Development of innovative solutions for critical sectors such as mining and education.',
    source: '',
  },
];