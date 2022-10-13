import React from 'react';

export default function(props){
    const [test, setTest] = React.useState();
    const [counter, setCounter] = React.useState(1);
    const [count, setCount] = React.useState(0);
    const vide = React.useRef();
    const [state, dispatch] = React.useReducer(addRemoveCmnt, []);

    React.useEffect(() => {
        setCounter(counter + 1);  
        vide.current.value = '';
    }, [state])

    function showHideCmnt(id){
        const cmntvis = document.querySelector('.testComment'+ id);
        if(test){
            cmntvis.style.display = 'none';
            setTest(false);
        }
        else if(!test){
            cmntvis.style.display = 'block';
            setTest(true);
        }
    }

    function dataFill(id, cmnt, postId){
        return {id: id, cmnt: cmnt, postId: postId};
    }

    function addRemoveCmnt(state, action){
        switch(action.type){
            case 'addComment':{
                setCount(count+1);
                return [...state, dataFill(action.id, action.cmnt, action.postId)];
            }
            case 'deleteComment':{
                if(action.postId === action.pstId){
                    setCount(count - 1);
                    return state.filter(items => items.id !== action.idCmnt); 
                }
            }
        }
    }

    return(
        <>
            <div className="engagement">
                <label className="like"><i className="fa-solid fa-thumbs-up"></i> 282</label>
                <label className="comment float-end" onClick={() => showHideCmnt(props.id)}> {count} Comments</label>
            </div> 
            <div className="engagementButton" onClick={() => showHideCmnt(props.id)}>
                <div className="commentBtn"><i className="fa-solid fa-comment"></i>Comment</div>
            </div>
            <div className={'postComment testComment'+ props.id}>
            <div className="input-group input-groupEdit mb-3">
            <span className="input-group-text" id="basic-addon1">
                <img alt='' src={require('./admin.jpg')}  />
            </span>
            <input 
                ref={vide}
                type="text" 
                className={"form-control myComment"+ props.id} 
                placeholder="Your Comment" 
                aria-label="Username" 
                aria-describedby="basic-addon1" 
            />
            <span className="input-group-text" id="basic-addon1">
                <label htmlFor={'saveComment'+ props.id} className='float-end editLabel'>
                <i className="fa-solid fa-floppy-disk fs-5 mx-2"></i>
                </label>
                <input 
                type='button'   
                id={'saveComment'+ props.id} 
                onClick={() => dispatch({type: 'addComment', id: counter, cmnt: document.querySelector('.myComment'+ props.id).value, postId: props.id})} 
                hidden
                />
            </span>
            </div>
            <div className='theComments-container'>

            {state.map((index, key) => {
                if(props.id === index.postId){
                    return(
                        <div key={key} className='theComments'>
                            <img alt='' src={require('./admin.jpg')}  />
                            <div className='comments_container'>
                                <div className='commentName'>salaheddine naji</div>
                                <div className='comments'>
                                    <label></label>
                                    {index.cmnt}
                                </div>
                                <div className='remove_comment'>
                                    <label htmlFor={'deleteComment'+ props.id + index.id}>x</label>
                                </div>
                                <input 
                                    type='button' 
                                    id={'deleteComment'+ props.id + index.id} 
                                    onClick={() => dispatch({type: 'deleteComment', idCmnt: index.id, postId: index.postId, pstId: props.id})} 
                                    hidden
                                />
                            </div>
                        </div>
                );}
            })}
        </div>
        </div>     
        </> 
    )
}