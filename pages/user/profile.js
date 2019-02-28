import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Profile = (props) => (
  <div>
    <h1>{props.user.firstName} {props.user.lastName}</h1>
  </div>
)

Profile.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:3333/user/${id}`)
  const data = await res.json()

  return {
    user: data
  }
}

export default Profile