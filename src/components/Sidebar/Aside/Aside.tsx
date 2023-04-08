import { FC, PropsWithChildren } from 'react'

interface IAside {
  title: string
}

const Aside: FC<PropsWithChildren<IAside>> = ({ children, title }) => {
  return (
    <aside className="flex flex-col mb-4">
      <header className="mb-4 font-bold border-b-2 border-blue-600">
        {title}
      </header>
      <>{children}</>
    </aside>
  )
}

export default Aside
