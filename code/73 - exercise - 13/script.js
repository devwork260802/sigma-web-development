console.log('Hello Everyone');

document.querySelector(".edit-btn").onclick = () => {
    if (document.designMode==='on'){
        document.designMode='off'
    }
    else{
        document.designMode='on'
    }
  };