import Swal from 'sweetalert2';

export async function alertWin() {
  return await Swal.fire({
    title: 'Sweet!',
    imageUrl: 'https://media.tenor.com/Chr9lbgPSasAAAAC/jojos-bizarre-adventure-nice.gif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
}

export async function alertLose() {
  return await Swal.fire({
    title: "Perdiste =(",
    imageUrl: "https://gifdb.com/images/high/jojo-crying-jonathan-joestar-71o2v0mbddf9ha8f.gif",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });
}

export async function alertReset() {
  let timerInterval:any = 100;

  return await Swal.fire({
 
    imageUrl: "https://i.pinimg.com/originals/0e/b7/98/0eb79898902ebd45e7248bc7c20be53c.gif",
    imageWidth: 400,
    imageHeight: 200,
    allowOutsideClick: false,
    imageAlt: "Custom image",
    timer: 500,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup()?.querySelector("b");
      if(timer){
        timerInterval = setInterval(() => {
          timer!.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      } 
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  
}