document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.querySelector(".chrome-tabs");
    const contentsContainer = document.querySelector(".chrome-content");
    const addTabButton = document.querySelector(".add-tab-btn");
    let tabCount = tabsContainer.childElementCount;
  
    const updateTabListeners = () => {
      const tabs = document.querySelectorAll(".tab");
      const contents = document.querySelectorAll(".tab-content");
      const closeButtons = document.querySelectorAll(".close-tab");
  
      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          if (tab.classList.contains("active")) return;
  
          const target = document.querySelector(`#${tab.dataset.tab}`);
  
          tabs.forEach(t => t.classList.remove("active"));
          contents.forEach(c => c.style.display = "none");
  
          tab.classList.add("active");
          target.style.display = "block";
        });
      });
  
      closeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
          e.stopPropagation();
          const tab = button.parentElement;
          const target = document.querySelector(`#${tab.dataset.tab}`);
  
          // If the tab to be closed is active, activate another tab
          if (tab.classList.contains("active")) {
            let nextTab = tab.nextElementSibling || tab.previousElementSibling;
            if (nextTab && nextTab.classList.contains("tab")) {
              nextTab.classList.add("active");
              document.querySelector(`#${nextTab.dataset.tab}`).style.display = "block";
            }
          }
  
          tab.remove();
          target.remove();
        });
      });
    };
  
    addTabButton.addEventListener("click", () => {
      tabCount++;
      const newTab = document.createElement("div");
      newTab.className = "tab";
      newTab.dataset.tab = `tab${tabCount}`;
      newTab.innerHTML = `Tab ${tabCount} <span class="close-tab">&times;</span>`;
      tabsContainer.appendChild(newTab);
  
      const newContent = document.createElement("div");
      newContent.className = "tab-content";
      newContent.id = `tab${tabCount}`;
      newContent.style.display = "none";
      newContent.innerText = `Content for Tab ${tabCount}`;
      contentsContainer.appendChild(newContent);
  
      updateTabListeners();
    });
  
    updateTabListeners();
  
    // Show the first tab by default
    document.querySelector(".tab").classList.add("active");
    document.querySelector(".tab-content").style.display = "block";
  });
  