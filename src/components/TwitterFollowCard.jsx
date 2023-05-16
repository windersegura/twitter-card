import React, { useState } from 'react';

import './twitterFollowCard.css';

function TwitterFollowCard({ userName, name }) {
    const [isFollowing, setIsFollowing] = useState(false);

    //constants
    const imgUrl = `https://unavatar.io/${userName}`;

    const followingButton = isFollowing ? 'Siguiendo' : 'Seguir';
    const followingButtonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';


    const handleFollowing = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={imgUrl}
                    alt="Foto de Perfil" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-username'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button
                    onClick={handleFollowing}
                    className={followingButtonClass}
                >   
                    <span className='tw-followCard-text'>{followingButton}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;