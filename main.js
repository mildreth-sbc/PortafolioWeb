let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudio Informática y desarrollo sitios web.')
  .pauseFor(2000)
  .deleteChars(30)
  .start();
