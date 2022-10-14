import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Comment from './Comment';

function App() {  
/*Start Responsive the page */   
  var tst = 0;
  var sidebar = React.useRef();
  var container = React.useRef();

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function sh(){
    if(tst === 0 || sidebar.current.style.left === '-60%'){
      sidebar.current.style.left = '0';
      sidebar.current.style.visibility = 'visible';
      container.current.style.left = '530px';
      container.current.style.position = 'fixed';
      tst = 1;
    }
    else if(tst === 1 || sidebar.current.style.left === '0px'){
      sidebar.current.style.left = '-60%';
      sidebar.current.style.visibility = 'none';
      container.current.style.left = '50%';
      container.current.style.position = 'absolute';
      tst = 0;
    }
  } 

  window.onresize = function(){
    if(window.innerWidth >= 991){
        sidebar.current.style.left = '0px';
        sidebar.current.style.visibility = 'visible';
        container.current.style.left = '50%';
        container.current.style.position = 'absolute';
    }
      
    else if(window.innerWidth <= 991){
        sidebar.current.style.left = '-60%';
        sidebar.current.style.visibility = 'none';
        container.current.style.left = '50%';
        container.current.style.position = 'absolute';
    }
  }
/*End responsive the page */

/*Post Parte Start*/
  const [img, setImg] = React.useState('');
  const textarea  = React.useRef();
  const [count, setCount] = React.useState(0);
  const [id, setId] = React.useState();
  const [data, setData] = React.useState([]);
  const [alert, setAlert] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [txt, setTxt] = React.useState();
  const [dialog, setDialog] = React.useState();
  const [updateimg, setUpdateimg] = React.useState();
  const [iframe, setIframe] = React.useState();
  const [iframe2, setIframe2] = React.useState();
  const [iframeTxt, setIframeTxt] = React.useState();
  const [iframeTxt2, setIframeTxt2] = React.useState();
  const [iframeVue, setIframeVue] = React.useState(false);
  const containerRef = React.useRef();
  const [dataPost, dispatch] = React.useReducer(addRemove, data);

  React.useEffect(()=>{
    if(iframeVue === true && iframeTxt !== '')
      containerRef.current.firstElementChild.classList.add('iframe');
  }, [iframeVue]);

  function selectfile(e){
    if(document.querySelector('.inputFile').value !== '')
      setImg(URL.createObjectURL(e.target.files[0]));
  }

  function selectfile2(e){
    if(document.querySelector('.inputFile2').value !== '')
      setUpdateimg(URL.createObjectURL(e.target.files[0]));
  }

  React.useEffect(() =>{
      setCount(count + 1);
      textarea.current.value = '';
  }, [data])

  function addData(id, desc, img, iframe){
      return {id: id, desc: desc, img: img, iframe: iframe};
  }

  function addRemove(dataPost, action){
    if(action.type === 'add'){
        setData(data => [...data, addData(action.id, action.desc, action.img, action.iframe)]);
        setImg('');
        setIframeTxt('<iframe hidden></iframe>');
        setDialog('posted successfully');     
        setAlert(true);
    }
    else if(action.type === 'remove'){
        setIframeTxt('');
        const update = data.filter(
            item => item.id !== id
        );
        setData(update);
        handleClose();
        setDialog('deleted successfully');
        setAlert(true);
    }   
    else if(action.type === 'update'){
        data.map((index, key) => {
            if(index.id === action.id){
                index.desc = action.desc;
                index.img = action.img;
                index.iframe = action.iframe;
            }    
        })
        setIframeTxt('<iframe hidden></iframe>');
        setIframeVue(false);
        setUpdate(false);
        setDialog('updated successfully');
        setAlert(true);
    }   
  }

  React.useEffect(() => {
    data.map((index, key) => {
        if(index.id === id){
            setTxt(index.desc);
            setUpdateimg(index.img);
            setIframeTxt2(index.iframe);
        }   return key;
    })
  }, [update])

  function hideDialogs(){setAlert(false);}

  function myIframe(){
    setIframeTxt(document.querySelector('.myIframe').value);
    setIframe(false);
    setIframeVue(true);
  }

  function myIframe2(){
    setIframeTxt2(document.querySelector('.myIframe').value);
    setIframe2(false);
    setIframeVue(true);
  }
/*Post Parte End*/ 

return(
/*Start Our SideBar*/ 
    <div className='app'>
        <div ref={sidebar} className="sideBar-container">
            <span className="sideBar">
                <a href={App}>
                    <div className="my-active"><i className="fa-solid fa-house"></i> Home</div>
                </a>
                <a href={App}>
                    <div><i className="fa-solid fa-book"></i> Courses</div>
                </a>
                <a href={App}>
                    <div><i className="fa-solid fa-gauge"></i> Dashboard</div>
                </a>
                <a href={App}>
                    <div><i className="fa-solid fa-address-book"></i> Members</div>
                </a>
                <a href={App}>    
                    <div><i className="fa-solid fa-certificate"></i> Membership Catalog</div>
                </a>
                <a href={App}>
                    <div><i className="fa-solid fa-flag"></i> Terms Of Service</div>
                </a>
                <a href={App}>
                    <div><i className="fa-solid fa-power-off"></i> Sign Out</div>
                </a>
            </span>
        </div>
{/*End Our SideBar*/}

{/*Start Our navbar*/}
      <div className="content">
          <div className="float-start">
              <i className="fa-solid fa-bars d-lg-none" onClick={sh}></i>
          </div>
          <div className="col-lg-3 mx-auto">
              <div className="input-group mb-3 input-group-edit">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                  <input type="text" className="form-control" placeholder="search" aria-label="Username" aria-describedby="basic-addon1" />
              </div>    
          </div>
          <div className="f-left">
              <img alt='' src={require('./admin.jpg')} />
          </div>
      </div>
{/*End Our navbar*/}

{/*Start Our Content*/}
      <div ref={container} className="ourContent">
        <div className="container-edit">
              <h3>News Feed</h3>
              <div className="share">
                  <div className="img">
                      <img alt='' className="my-img" src={require('./admin.jpg')} />
                  </div>
                  <div className="input">
                      <textarea ref={textarea} className='form-control form-control-edit' placeholder="Share Wat's on Your Mind, fjrji..."></textarea>
                  </div>
              </div>
              <div className="media">
                  <div className="media-content">
                     <label htmlFor='input'><i className="fa-solid fa-camera"></i></label>
                     <label htmlFor='iframe' className='position-absolute'><i className="fa-solid fa-video"></i></label> 
                     <label htmlFor='post' className='float-end editLabel'><i className="fa-solid fa-floppy-disk"></i></label>
                     <label className='commentPost'>
                        <img alt='' src={img} />
                        {iframeVue && <div ref={containerRef} dangerouslySetInnerHTML={ {__html:  iframeTxt?iframeTxt:""}} />}
                     </label>
                  </div>
              </div>
          </div>
    {/*Start Our Poste*/}
          {data.map((index, key) => (
            <div className='post_container'>
              <div key={key} className="post">
                <div className="profile">
                    <div className="img-container">
                        <img alt='' src={require('./admin.jpg')}  />
                    </div>
                    <div className="aboutProfile">
                        <div className="firstInfo">
                            <strong>salaheddine</strong>
                            <label>Posted An Update</label>
                        </div>
                        <br />
                        <div className="secondInfo">
                            <strong>A Week Ago</strong>
                            <i className="fa-solid fa-earth-africa"></i>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                    <div className='option'>
                    <label className='option-font' onClick={hideDialogs}>
                      <label htmlFor='modal' className='text-danger' onClick={() => setId(index.id)}>
                          <i className="fa-solid fa-trash"></i>
                      </label> 
                      <label htmlFor='updateModal' className='text-success' onClick={() => setId(index.id)}>
                          <i className="fa-solid fa-pen"></i>
                      </label>
                    </label>
                    <input type='button' id={index.id} onClick={() => dispatch({type: 'remove', id: index.id})} hidden/>
                  </div>
                </div>
                <div className="world">
                    <p>{index.desc}</p>
                </div>
                <div className="media">       
                  <img alt='' src={index.img} />
                  <div className='iframe' ref={containerRef} dangerouslySetInnerHTML={ {__html:  index.iframe?index.iframe:""}} />
                </div>   
                <Comment id= {index.id}/>
            </div>  
          </div> 
          ))}
    {/*End Our Poste*/}
          
          <input className='inputFile' onChange={selectfile} type='file' id='input' hidden/>
          <input className='inputFile2' onChange={selectfile2} type='file' id='input2' hidden/>
          <input 
            type='button' 
            id='post' 
            onClick={() => dispatch({type:'add', id: count, desc: textarea.current.value, img: img, iframe: iframeTxt})} 
            hidden
          />
          <Button id='modal' variant="primary" onClick={handleShow} hidden>Launch demo modal</Button>
      </div> 
{/*End Our Content*/}

{/*Start Our RightBar*/}
    <div className="rightBar d-none d-lg-block">
        <div className="progressBar">
            <div className="progressContainer">
                <div className="mx-auto" 
                    role="progressbar" 
                    aria-valuenow={50} 
                    aria-valuemin={0} 
                    aria-valuemax={100} 
                    style={{'--value': '50'}}>
                </div>
        <div className="progressText text-center">Complete</div>
            <div className="details">
                <label className="arrow">|</label>
                    <div className="radio radio-block"></div><div className="radio-block"><label className="radioText">Details</label></div><div className="leftText">2/4</div> <br/>
                        <label className="arrow text-success">|</label>
                        <div className="radio radio-block"></div><div className="radio-block"><label className="radioText">Profile Photo</label></div><div className="leftText">0/1</div> <br/> 
                        <label className="arrow">|</label>
                        <div className="radio radio-block bg-success"></div><div className="radio-block"><label className="radioText">Cover Photo</label></div><div className="leftText">1/1</div> <br/> 
                    </div>
                </div>
            </div>
        </div>
{/*End Our RightBar*/}  
    
{/*dialog Start*/}    
      <Alert show={alert} className='alertEdit' variant="success">
        <i className="fa-solid fa-check"></i> 
            {dialog}
        <Button className='closeButton' onClick={() => setAlert(false)} variant="outline-success">
            <i className="fa-solid fa-x"></i>
        </Button>
      </Alert> 
{/*dialog End*/}

{/*Delete Modal Start*/}
      <input type='button' id='updateModal' onClick={() => setUpdate(true)} hidden/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you shure you want to delete this post!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => dispatch({type: 'remove'})}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
{/*Delete modal End*/}    

{/*Update Modal Start*/}
    <Modal show={update} onHide={() => setUpdate(false)}>
        <Modal.Header closeButton>
          <Modal.Title>update post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InputGroup>
                <InputGroup.Text><i className="fa-solid fa-align-left"></i></InputGroup.Text>
                <Form.Control 
                    onChange={(e) => setTxt(e.target.value)}
                    className='updateText bg-dark text-white' 
                    placeholder='Description' 
                    as="textarea" 
                    aria-label="With textarea" 
                    value={txt}
                />
            </InputGroup>  
            <div className='chousingImg'>
                <img alt='' src={updateimg}/>
                <div className='iframe' ref={containerRef} dangerouslySetInnerHTML={ {__html:  iframeTxt2?iframeTxt2:""}} />
            </div>
            <div className="media-content modalMedia">
                <label htmlFor='input2'><i className="fa-solid fa-camera"></i></label>
                <label htmlFor='iframe2' className='position-absolute'><i className="fa-solid fa-video"></i></label>
                <div className='commentPost' hidden>{updateimg}</div> 
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setUpdate(false)}>
            Cancel
          </Button>
          <Button 
            variant="dark" 
            onClick={() => dispatch({type: 'update', id: id, desc: txt, img: updateimg, iframe: iframeTxt2})} 
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
{/*Update modal End*/} 

{/*Iframe Modal Start*/}
<input type='button' id='iframe' onClick={() => setIframe(true)} hidden/>
      <Modal show={iframe} onHide={() => setIframe(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Iframe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    <i className="fa-solid fa-video"></i>
                </InputGroup.Text>
                <Form.Control
                    placeholder="Your iframe"
                    className='myIframe'
                />
            </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIframe(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={myIframe}>
            Add Iframe
          </Button>
        </Modal.Footer>
      </Modal>
{/*Iframe modal End*/} 

{/*Iframe Modal Start*/}
<input type='button' id='iframe2' onClick={() => setIframe2(true)} hidden/>
      <Modal show={iframe2} onHide={() => setIframe2(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Iframe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    <i className="fa-solid fa-video"></i>
                </InputGroup.Text>
                <Form.Control
                    placeholder="Your iframe"
                    className='myIframe'
                />
            </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIframe2(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={myIframe2}>
            Add Iframe
          </Button>
        </Modal.Footer>
      </Modal>
{/*Iframe modal End*/} 
</div>

);
}

export default App;
