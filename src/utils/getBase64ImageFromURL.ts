export default function getBase64ImageFromURL(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
  
    img.onload = () => {
      // console.log(url);
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
  
      const ctx = canvas.getContext("2d");
      ctx!.drawImage(img, 0, 0);
  
      const dataURL = canvas.toDataURL("image/png");
  
      resolve(dataURL);
    };
  
    img.onerror = error => {
      reject(error);
    };

    img.src = url;
  });
}