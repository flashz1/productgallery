import Link from 'next/link'

const Author = () => {
  return (
    <div className="flex flex-col py-4 text-gray-700 text-xs">
      <div>
        <span className="font-bold">Create by: </span>
        <Link href="https://valeriicara.site/">Valerii Cara</Link>
      </div>
      <div>
        <span className="font-bold">GitHub: </span>
        <Link href="https://github.com/flashz1">
          https://github.com/flashz1
        </Link>
      </div>
    </div>
  )
}

export default Author
