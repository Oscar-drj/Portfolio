import { CvIcon, GitHubIcon, LinkedinIcon } from '../components/icons'

export const buttons = [
  {
    text: 'Github',
    url: 'https://github.com/Oscar-drj',
    shouldDownload: false,
    icon: <GitHubIcon />,
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/%C3%B3scar-del-rey-ju%C3%A1rez-a75665291/',
    shouldDownload: false,
    icon: <LinkedinIcon />,
  },
  {
    text: 'Descargar CV',
    url: 'src/assets/CV_Oscar_del_rey.pdf',
    shouldDownload: true,
    icon: <CvIcon />,
  },
]
