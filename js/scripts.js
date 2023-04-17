let boton = document.getElementById("buscar");
let buscar = document.getElementById('buscador').value;
let resultado = document.getElementById('resultado');

boton.addEventListener("click", function(){
  let buscar = document.getElementById('buscador').value;
  let url = `https://pokeapi.co/api/v2/pokemon/${buscar}?fields=name,stats,types`;

  let xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      // Borramos el contenido anterior
      resultado.innerHTML = '';

      let datos = JSON.parse(this.responseText);
      console.log(datos);

      // Mostrar imagen del Pokemon
      let img = document.createElement("img");
      img.src = datos.sprites.front_default;
      resultado.appendChild(img);

      // Mostrar estadísticas y tipos del Pokemon
      let estadisticas = datos.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join("<br>");
      let tipos = datos.types.map(type => type.type.name).join(", ");
      resultado.innerHTML += `<p>${estadisticas}</p><p>${tipos}</p>`;
    }
  });
  xhr.open("GET", url, true);
  xhr.send(null);
});
