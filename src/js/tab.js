// document.addEventListener('DOMContentLoaded', () => {

//    const tabs = document.querySelectorAll('.tabs');
//    const tabsBtn = tabs.querySelectorAll('.tabs__btn');
//    const tabsContent = tabs.querySelectorAll('.tabs__content');

//    if (tabs) {
//       tabs.addEventListener('click', (e) => {
//          if (e.target.classList.contains('tabs__btn')) {
//             const tabsPath = e.target.dataset.tabsPath;
//             tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
//             document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
//             tabsHandler(tabsPath);
//          }
//       });
//    }

//    const tabsHandler = (path) => {
//       tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
//       document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
//    };

// });

const clearActiveClsTab = (tabs) => tabs.find(tab => tab.classList.contains('tabs__btn--active'))?.remove('tabs__btn--active')

const clickTabHandler = (tab, tabs) => {
   tab.addEventListener('click', (e) => {
      // if (e.target.classList.contains('tabs__btn')) {
      // const tabsPath = e.target.dataset.tabsPath;
      // tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
      // document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
      // tabsHandler(tabsPath);
      // }


      clearActiveClsTab(tabs)
      if (!tab.classList.contains('tabs__btn--active')) tab.classList.add('tabs__btn--active')
   });
}

const blockNews = (id) => {
   const block = document.getElementById(id);

   if (!block) throw new Error('not found news block')

   const tabs = block.querySelectorAll(`.tabs__item`)

   if (!tabs) throw new Error('not found tabs')


   console.log(tabs)

   tabs.forEach(tab => clickTabHandler(tab, tabs))


}

blockNews('news')
blockNews('partners')