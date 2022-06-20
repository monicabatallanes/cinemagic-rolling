const Home = () => {
  
  const userJson = localStorage.getItem('cinemagicUser');
  if(userJson !== null){
    const userObj = JSON.parse(userJson); 
    console.log(userObj)
    console.log('usuario: ', userObj.user)
    console.log('token: ', userObj.token)
  }

  return ( 
    <>
      <h1>Home Page</h1>
    </>
  );
}

export default Home;