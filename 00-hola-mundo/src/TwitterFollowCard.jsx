import './App.css'

export function TwitterFollowCard ( { userName, name, isFollowing }) {

   const text = isFollowing ? 'Siguiendo' : 'Seguir'

  return  (
  <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img 
        className='tw-followCard-avatar'
        src={`https://unavatar.io/${userName}`} 
        alt="avatar">
      </img>
      <div className='tw-followCard-info'>
        <strong>{name}</strong>
        <span className='tw-followCard-infoUserName'>@{ userName }</span>
      </div>
    </header>

    <aside>
      <button className='tw-followCard-button'>
          { text }  
      </button>
    </aside>
  </article>
  )
}