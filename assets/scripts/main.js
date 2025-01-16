document.getElementById("toggle-nav-menu").onclick = () => {
  document.getElementById("nav-menu").classList.toggle("open");
};

document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/dark.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/light.webp";
  }
};

fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((response) => response.json())
  .then((data) => {
    let morning = "";
    for (let i = 0; i < data["أذكار الصباح"].length; i++) {
      morning += `
        <li>
          <p>${data["أذكار الصباح"][i].content} <span class="count">${data["أذكار الصباح"][i].count}</span></p>
        </li>
      `;
      document.getElementById("morning-list").innerHTML = morning;
    }

    let evening = "";
    for (let i = 0; i < data["أذكار المساء"].length; i++) {
      evening += `
        <li>
          <p>${data["أذكار المساء"][i].content} <span class="count">${data["أذكار المساء"][i].count}</p>
        </li>
      `;
      document.getElementById("evening-list").innerHTML = evening;
    }

    let remembrancesAfterPrayer = "";
    for (let i = 0; i < data["أذكار بعد السلام من الصلاة المفروضة"].length; i++) {
      remembrancesAfterPrayer += `
        <li>
          <p>${data["أذكار بعد السلام من الصلاة المفروضة"][i].content} <span class="count">${data["أذكار بعد السلام من الصلاة المفروضة"][i].count}</p>
        </li>
      `;
      document.getElementById("remembrances-after-prayer").innerHTML = remembrancesAfterPrayer;
    }

    let rosaries = "";
    for (let i = 0; i < data["تسابيح"].length; i++) {
      rosaries += `
        <li>
          <p>${data["تسابيح"][i].content} <span class="count">${data["تسابيح"][i].count}</p>
        </li>
      `;
      document.getElementById("rosaries-list").innerHTML = rosaries;
    }

    let sleeping = "";
    for (let i = 0; i < data["أذكار النوم"].length; i++) {
      sleeping += `
        <li>
          <p>${data["أذكار النوم"][i].content} <span class="count">${data["أذكار النوم"][i].count}</p>
        </li>
      `;
      document.getElementById("sleeping-list").innerHTML = sleeping;
    }

    let wakeUp = "";
    for (let i = 0; i < data["أذكار الاستيقاظ"].length; i++) {
      wakeUp += `
        <li>
          <p>${data["أذكار الاستيقاظ"][i].content} <span class="count">${data["أذكار الاستيقاظ"][i].count}</p>
        </li>
      `;
      document.getElementById("wake-up-list").innerHTML = wakeUp;
    }

    let quranic = "";
    for (let i = 0; i < data["أدعية قرآنية"].length; i++) {
      quranic += `
        <li>
          <p>${data["أدعية قرآنية"][i].content} <span class="count">${data["أدعية قرآنية"][i].count}</p>
        </li>
      `;
      document.getElementById("quranic-list").innerHTML = quranic;
    }

    let prophets = "";
    for (let i = 0; i < data["أدعية الأنبياء"].length; i++) {
      prophets += `
        <li>
          <p>${data["أدعية الأنبياء"][i].content} <span class="count">${data["أدعية الأنبياء"][i].count}</p>
        </li>
      `;
      document.getElementById("prophets-list").innerHTML = prophets;
    }
  });
