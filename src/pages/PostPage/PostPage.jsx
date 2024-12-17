import React from 'react';
import classes from '../Page.module.css'
import PostTable from '../../modules/PostTable/PostTable';

const PostPage = () => {
    return (
        <div className={classes.TablePage}>
            <PostTable/>
        </div>
    );
};

export default PostPage;