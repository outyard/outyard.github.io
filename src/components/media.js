import React from 'react';

import './media.scss';

export default ({url}) => {
  return (
    <div className="media">
      {(url.endsWith('.png') || url.endsWith('.jpg')) &&
        <img className="media-image" src={url} alt="" />
      }

      {/* Need dangerouslySetInnerHTML for video element attributes missing from React. */}
      {url.endsWith('.mp4') &&
        <div dangerouslySetInnerHTML={{__html: `
          <video class="media-video" autoplay loop muted playsinline>
            <source src="${url}" type="video/mp4" />
          </video>
        `}}></div>
      }
    </div>
  );
};
