import Link from "next/link"
import styles from './Navigation.module.css'

const links = [
  {
    label: 'Principal',
    route: '/'
  },
  {
    label: 'Categorias',
    route: '/categorias/id'
  },
  {
    label: 'Detalle',
    route: '/detalle/1'
  },
  {
    label: 'Admin Noticias',
    route: '/admin/noticias'
  },
  {
    label: 'Admin Categorias',
    route: '/admin/categorias'
  },
  {
    label: 'Admin Departamentos',
    route: '/admin/departamentos'
  }
]

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}