import React, {useState, useEffect} from 'react'

const NavBar = (props) =>{
    const[anon, setAnon] = useState(true);
    const[seller, setSeller] =useState(false);
    const[buyer, setBuyer] =useState(false);

    useEffect(()=>{
        let loggedIn = props.loggedIn
        checkPageType(loggedIn)
    }, [props])

    const logoutStateToggle=()=>{
        setAnon(true)
        setSeller(false)
    }

    const onClickLogout=()=>{
        
    }

    const checkPageType=(loggedIn)=>{
        if(loggedIn === false ){
            setAnon(true);
            setSeller(false);
            setBuyer(false)

        }
        if(loggedIn === true){
            if(props.status === false){
                setBuyer(true);
                setSeller(false);
                setAnon(false);
                }
            else{
                setBuyer(false);
                setSeller(true);
                setAnon(false);
                }
            }
        // if(loggedIn == "seller"){
        //     setSeller(true);
        //     setAnon(false);
        // }
    }
    return ( 
        <> 
        <div className="row nav-bar text-center">
            <div className="col-6 nav-links text-center">
            <span> <a href="/"> Home </a> </span>
                {anon ? <span>|  <a href="/login"> Login </a> </span> :null}
                {anon ? <span> |  <a href="/register"> Register </a> </span>:null}
                {seller ? <span>|  <a href="/cart">Cart</a></span>:null}
                {buyer ? <span>|  <a href="/cart">Cart</a></span>:null}
                {seller ? <span>|  <a href="/" onClick={onClickLogout}> Logout </a></span>: null}
                {buyer ? <span>|  <a href="/" onClick={onClickLogout}> Logout </a></span>: null}
                {/* {buyer ? <span>|  New Product </span>:null} */}
            </div>
        </div>
        </>
     );
}

export default NavBar;