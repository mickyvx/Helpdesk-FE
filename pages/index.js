import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Hello World!</h1>
    <ul>
      <li><Link href="/user/profile"><a>View Profile</a></Link></li>
      <li><Link href="/ticket/list"><a>Ticket List</a></Link></li>
      <li><Link href="/login"><a>Login</a></Link></li>
    </ul>
  </div>
)

export default Index