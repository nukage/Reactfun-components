import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
    <div className="ui container comments" >
        <CommentDetail 
            author="Sam Smith" 
            timeAgo="Today at 3:32PM" 
            theContent="Nice Blog Post Jackass" 
            avatarImg={faker.image.avatar()} 
        />
        <CommentDetail 
            author="Richard Simmons" 
            timeAgo="Today at 2:00AM" 
            theContent="He's not so smart, eh?" 
            avatarImg={faker.image.avatar()}
        />
        <CommentDetail 
            author="Ty Richards" 
            timeAgo="Yesterday at 1:21PM" 
            theContent="Great Humor" 
            avatarImg={faker.image.avatar()}
        />
 
    </div>
    
    
    
    
        );
};

ReactDOM.render(<App />, document.querySelector('#root')) 