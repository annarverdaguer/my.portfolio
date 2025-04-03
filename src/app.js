const jobInformation = [
  {
    corporation: "Scytl",
    title: "QA Intern",
    duration: "March 2018 - October 2018",
    characteristics: [
      "Internship for 4 months and later on full time employee",
      "Developed automated testing suits with Java, Selenium and Gherkin",
      "Manual product testing, verification and bug tracking",
    ],
  },
  {
    corporation: "Telescope",
    title: "QA Test Engineer",
    duration: "October 2018 - April 2021",
    characteristics: [
      "Start up company that helped me learn a lot",
      "Manual product testing, verification and bug tracking",
      "Developed automated testing suits with Ruby, Watir and Gherkin",
      "Learned about Jenkins Pipelines to run tests remotely",
      "Used Python scripts to automate some backend and data base steps",
      "Learned about Postman and Newman to automate some backend testing suits",
    ],
  },
  {
    corporation: "Wallapop",
    title: "QA Engineer",
    duration: "April 2021 - March 2025",
    characteristics: [
      "Big corporation for second hand goods market very used in Spain",
      "Manual product testing, verification and bug tracking",
      "Big learnings on Agile methodologies and processes",
      "Shifting QA position to the left, more dedicated to risk assessment and product definition",
      "Test automation efforts made on mobile apps with Gherkin, Java and Appium",
      "Test automation efforts made on web apps with Playwright",
      "QA Tools development with Typescript and Angular",
    ],
  },
];

function renderProjects() {
  let element = document.querySelector(".projects-info");
  element.innerHTML = ``;
  element.innerHTML = `<div class="col-lg-4 col-md-6 mt-5">
          <div class="app-photo">
            <img 
            src="images/itemManager.png" 
            alt="Item Manager Screenshot"
            class="img-fluid rounded shadow p-2 border border-dark border-3"
            />
          </div>
          <div class="app-content mx-4">
            <h2 class="my-3">Item Manager</h2>
            <p>Please go and try!</p>
            <div class="bubble">Typescript</div>
            <div class="bubble">React</div>
            <div class="bubble">CSS Tailwind</div>
            <div class="bubble">Jest</div>
            <div class="bubble">React Testing Library</div>
            <div class="bubble">Netlify</div>
            <div class="bubble">Github</div>
            <form action="https://magenta-cuchufli-ffc825.netlify.app/" target="_blank">
              <button class="app-button button-1 mt-5">
                Item Manager App
              </button>
            </form>
            <form action="https://github.com/annarverdaguer/WallapopItemManager" target="_blank">
              <button class="button-3 mt-3">Check Github Repo</button>
            </form>
          </div>
        </div>
  <div class="col-lg-4 col-md-6 mt-5">
        <div class="app-photo">
          <img
            src="images/pasapalabra.png"
            alt="Pasapalabra"
            class="img-fluid rounded shadow p-2 border border-dark border-3"
          />
        </div>
        <div class="app-content mx-4">
          <h2 class="my-3">Pasapalabra Game</h2>
          <p>Give it a try!</p>
          <div class="bubble">HTML</div>
          <div class="bubble">CSS</div>
          <div class="bubble">JS Vanilla</div>
          <div class="bubble">Netlify</div>
          <div class="bubble">Github</div>
          <br />
          <form
            action="https://gorgeous-babka-cf9dca.netlify.app/"
            target="_blank"
          >
            <button class="app-button button-1 mt-5">
              Play Pasapalabra Game
            </button>
          </form>
          <form
            action="https://github.com/annaruizverdaguer/pasapalabra"
            target="_blank"
          >
            <button class="button-3 mt-3">Check Github Repo</button>
          </form>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="app-photo">
          <img
            src="images/weather-forecast.png"
            alt="Weather app"
            class="img-fluid rounded shadow p-2 border border-dark border-3"
          />
        </div>
        <div class="app-content mx-4">
          <h2 class="my-3">Weather App</h2>
          <p>Go and check if you need to carry an umbrella!</p>
          <div class="bubble">HTML</div>
          <div class="bubble">CSS</div>
          <div class="bubble">JS</div>
          <div class="bubble">React</div>
          <div class="bubble">Netlify</div>
          <div class="bubble">Github</div>
          <br />
          <form
            action="https://unique-seahorse-565ed4.netlify.app/"
            target="_blank"
          >
            <button class="app-button button-1 mt-5">Launch Weather App</button>
          </form>
          <form
            action="https://github.com/annaruizverdaguer/weather-react"
            target="_blank"
          >
            <button class="button-3 mt-3">Check Github Repo</button>
          </form>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="app-photo">
          <img
            src="images/github.png"
            alt="Github user search"
            class="img-fluid rounded shadow p-2 border border-dark border-3"
          />
        </div>
        <div class="app-content mx-4">
          <h2 class="my-3">Github Search</h2>
          <p>Want to check some Github users?</p>
          <div class="bubble">HTML</div>
          <div class="bubble">CSS</div>
          <div class="bubble">JS Vanilla</div>
          <div class="bubble">Netlify</div>
          <div class="bubble">Github</div>
          <br />
          <form
            action="https://glowing-sprite-f2375f.netlify.app/"
            target="_blank"
          >
            <button class="app-button button-1 mt-5">
              Github User Search App
            </button>
          </form>
          <form
            action="https://github.com/annaruizverdaguer/github-search"
            target="_blank"
          >
            <button class="button-3 mt-3">Check Github Repo</button>
          </form>
        </div>
      </div>
        <div class="my-5">
          <h4>Hide projects</h4>
          <button class="less-info-button">
            <i class="fa-solid fa-angles-up less-info-icon"></i>
          </button>
        </div>
        `;
}

function hideProjects() {
  let element = document.querySelector(".projects-info");
  element.innerHTML = ``;
  element.innerHTML = `<div>
          <h4>Show projects</h4>
          <button class="more-info-button">
            <i class="fa-solid fa-angles-down more-info-icon"></i>
          </button>
        </div>`;
}

function addActiveClassToJobButton(job) {
  const jobButtons = document.querySelectorAll(".corporation");
  jobButtons.forEach(function (jobButton) {
    if (jobButton.classList.contains("job-active")) {
      jobButton.classList.remove("job-active");
    }
    if (jobButton.innerHTML == job) {
      jobButton.classList.add("job-active");
    }
  });
}

function showJobInfo(job) {
  addActiveClassToJobButton(job);
  const jobTitleElement = document.querySelector(".job-title");
  const jobDurationElement = document.querySelector(".job-duration");
  const jobCharacteristicsElement = document.querySelector(
    ".job-characteristics"
  );
  jobInformation.map(function (el) {
    if (el.corporation == job) {
      jobTitleElement.innerHTML = `${el.title} <span class="text-highlight">@${el.corporation}</span>`;
      jobDurationElement.innerHTML = el.duration;
      let characteristicsString = "";
      el.characteristics.forEach(function (char) {
        characteristicsString =
          characteristicsString +
          `<i class="fa-solid fa-greater-than job-list-icon"></i> ${char}. <br />`;
      });
      jobCharacteristicsElement.innerHTML = characteristicsString;
    }
  });
}

// ---------------- MAIN -----------------

let contactButtons = document.querySelectorAll(".contact-toggle");
contactButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault;
    let contactContent = document.querySelector(".contact-content");
    if (contactContent.classList.contains("d-none")) {
      contactContent.classList.remove("d-none");
    } else {
      contactContent.classList.add("d-none");
    }
  });
});

let container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("more-info-button") ||
    e.target.classList.contains("more-info-icon")
  ) {
    renderProjects();
  }
  if (
    e.target.classList.contains("less-info-button") ||
    e.target.classList.contains("less-info-icon")
  ) {
    hideProjects();
  }
  if (e.target.classList.contains("corporation")) {
    showJobInfo(e.target.innerHTML);
  }
});
