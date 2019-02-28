import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Hello World!</h1>
    <ul>
      <li><Link href="/tickets">Ticket List</Link></li>
    </ul>
  </div>
)

export default Index