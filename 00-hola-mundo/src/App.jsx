import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

  
  return  (
    <section className='App'>
      <TwitterFollowCard  
        isFollowing={true} 
        userName="ramiraho27" 
        name="Albert Ramirez Orozco"/>
      <TwitterFollowCard 
        isFollowing={false}
        userName="midudev"
        name="Miguel Angel Duran"/>
      <TwitterFollowCard  
        isFollowing 
        userName="ramiraho27" 
        name="Albert Ramirez Orozco"/>
      <TwitterFollowCard  
        isFollowing 
        userName="midudev" 
        name="Miguel Angel Duran"/>
    </section>
  )
}
