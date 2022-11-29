const containerElements = document.querySelector("#container-elements");

const obtenerData = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
  return (data.results)
}

const showDetail = async (characterUrl) => {
  const response = await fetch(characterUrl);
  const data = await response.json();
  console.log("character", data);

  //como poder guardar un  objeto en el local storeage
  //json stringify = permite pasear un json a un strin
  //de esta forma podemos guardar los objetos en local storage
  //localstorage.setitem("img",data.image)

  localStorage.setItem("character", JSON.stringify(data))
}

const renderData = (characters) => {
  characters.map((character) => {
    const html =
      `
      <div class="col-3 mt-4">
      <div class="card text-bg-dark">
        <img src="${character.image}" class="card-img" alt="..." />
        <div class="card-img-overlay text-center">
          <button
            type="button"
            class="btn btn-dark"
            style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.85rem;
            "
          >
            ${character.status}
          </button>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.6rem;
              --bs-btn-font-size: 0.85rem;
            "
          >
            Ver detalles
          </button>
          <div></div>
        </div>
        <h5 class="card-title text-white fw-bolder text-center bg-success py-2">
          ${character.name}
        </h5>

        <div class="card-footer text-center"></div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header">
            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">
              ${character.name}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <img src="${character.image}" class="card-img" alt="..." />
                </div>
                <div class="col-6 fw-semibold">
                <button
                type="button"
                class="btn btn-success"
                style="
                  --bs-btn-padding-y: 0.25rem;
                  --bs-btn-padding-x: 0.5rem;
                  --bs-btn-font-size: 0.85rem;
                "
              >
                ${character.status}
              </button>
                  <p>Episodios: ${character.episode[0]}</p>
                  <p>Especie: ${character.species}</p>
                  <p>Localizacion: ${character.location.name}</p>
                  <p>Origen: ${character.origin.name}</p>

                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Ok
            </button>          </div>
        </div>
      </div>
    </div>

      `;

    containerElements.innerHTML += html;

  })
}



const data = obtenerData();

data.then((resp) => {
  renderData(resp);
  console.log(resp);
})