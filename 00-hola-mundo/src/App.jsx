import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

  
  return  (
    <section className='App'>
      <TwitterFollowCard userName="ramiraho27" initialIsFollowing={true}> 
        Albert Ramirez Orozco
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
    </section>
  )
}
