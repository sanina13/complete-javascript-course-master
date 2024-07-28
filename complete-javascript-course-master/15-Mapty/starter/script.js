'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const editBtn = document.querySelector('.edit_icon');
const deleteOneBtn = document.querySelector('.delete_one_icon');
const deleteAllBtn = document.querySelector('.delete_all_icon');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  // clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  // click() {
  //   this.clicks++;
  // }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min per km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

///////////////////////////////////////////////////////
// APPLICATION ARCHITECTURE

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  #currentWorkout;
  #workoutClicked = false;

  constructor() {
    //get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    //Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toogleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    editBtn.addEventListener('click', this._editWorkout.bind(this));
    deleteAllBtn.addEventListener('click', this.reset.bind(this));
  }

  _getPosition() {
    navigator?.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert('Could not get your postion');
      }
    );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    // console.log(this);
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => this._renderWorkoutMarker(work));
  }

  //edit workout
  _editWorkout(mapE) {
    if (!this.#currentWorkout) {
      alert('Please select a workout to edit!');
      return;
    }
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _showForm(mapE) {
    // console.log(mapE);
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //Empty inputs
    //prettier-ignore
    inputDistance.value =inputDuration.value =inputCadence.value =inputElevation.value ='';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toogleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    //Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If editing an existing workout
    if (this.#currentWorkout) {
      if (type === 'running') {
        const cadence = +inputCadence.value;
        if (
          !validInputs(distance, duration, cadence) ||
          !allPositive(distance, duration, cadence)
        ) {
          return alert('Inputs have to be positive numbers!');
        }
        workout = new Running([lat, lng], distance, duration, cadence);
      } else if (type === 'cycling') {
        const elevation = +inputElevation.value;
        if (
          !validInputs(distance, duration, elevation) ||
          !allPositive(distance, duration, elevation)
        ) {
          return alert('Inputs have to be positive numbers!');
        }
        workout = new Cycling([lat, lng], distance, duration, elevation);
      }
      workout.id = this.#currentWorkout.id;
      workout.date = this.#currentWorkout.date;

      // Replace the old workout with the new one
      const index = this.#workouts.findIndex(
        work => work.id === this.#currentWorkout.id
      );
      this.#workouts[index] = workout;
      this.#currentWorkout = null;
    } else {
      // If creating a new workout
      if (type === 'running') {
        const cadence = +inputCadence.value;
        if (
          !validInputs(distance, duration, cadence) ||
          !allPositive(distance, duration, cadence)
        ) {
          return alert('Inputs have to be positive numbers!');
        }
        workout = new Running([lat, lng], distance, duration, cadence);
      } else if (type === 'cycling') {
        const elevation = +inputElevation.value;
        if (
          !validInputs(distance, duration, elevation) ||
          !allPositive(distance, duration, elevation)
        ) {
          return alert('Inputs have to be positive numbers!');
        }
        workout = new Cycling([lat, lng], distance, duration, elevation);
      }
      this.#workouts.push(workout);
    }

    // console.log(workout);

    //Render workout on map as marker
    this._renderWorkoutMarker(workout);

    //Render workout on list
    this._renderWorkout(workout);

    //hide form + clear input fields

    // Clear input fields
    this._hideForm();

    // Set local sotrage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;

    if (workout.type === 'running') {
      html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
        `;
    }

    if (workout.type === 'cycling') {
      html += `
         <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
          `;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    //check if a workout is clicked

    const workoutEl = e.target.closest('.workout');
    // console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#currentWorkout = workout;

    //Update Form fields with current workout data
    inputType.value = workout.type;
    inputDistance.value = workout.distance;
    inputDuration.value = workout.duration;

    if (workout.type === 'running') {
      inputCadence.value = workout.cadence;
      inputElevation.closest('.form__row').classList.add('.form__row--hidden');
      inputCadence.closest('.form__row').classList.remove('form__row--hidden');
    } else {
      inputElevation.value = workout.elevationGain;
      inputCadence.closest('.form__row').classList.add('form__row--hidden');
      inputElevation
        .closest('.form__row')
        .classList.remove('form__row--hidden');
    }

    form.classList.remove('hidden');
    inputDistance.focus();

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    //using the public interface
    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    // console.log(data);

    console.log();

    if (!data) return;

    this.#workouts = data;
    this.#workouts.forEach(work => this._renderWorkout(work));
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
