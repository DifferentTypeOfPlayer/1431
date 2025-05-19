// Создаем и добавляем основной элемент
const createMenuItem = () => {
  const item = document.createElement('div');
  item.className = 'ui-action-panel-item';
  item.dataset.role = 'action-panel-item';
  item.dataset.preventCloseContextMenu = 'true';
  
  const title = document.createElement('span');
  title.className = 'ui-action-panel-item-title';
  title.textContent = 'Бизнес-процессы';
  
  item.appendChild(title);
  return item;

  
};

createMenuItem.AddListener('click',function(e){


});

// Создаем popup-меню
const createPopupMenu = () => {
  const popup = document.createElement('div');
  popup.className = 'popup-window ui-action-panel-item-popup-menu --ui-context-content-light --open';
  popup.id = 'menu-popup-ui-action-panel-item-popup-menu';
  popup.style.cssText = 'display: block; position: absolute; left: 1583.55px; top: 259px; z-index: 1100 !important; padding: 0px;';

  const content = document.createElement('div');
  content.className = 'popup-window-content';
  content.id = 'popup-window-content-menu-popup-ui-action-panel-item-popup-menu';
  content.style.padding = '0px';

  const menu = document.createElement('div');
  menu.className = 'menu-popup';
  menu.dataset.tileGrid = 'tile-grid-stop-close';
  menu.style.display = 'block';

  const menuItems = document.createElement('div');
  menuItems.className = 'menu-popup-items';

  const menuItem = document.createElement('span');
  menuItem.className = 'menu-popup-item menu-popup-no-icon';
  menuItem.onclick = () => {
    BX.Bizproc.Starter.singleStart({
      moduleId: "disk",
      entity: "Bitrix\\Disk\\BizProcDocument",
      documentType: "STORAGE_3",
      documentId: "101",
      templateId: 51,
      templateName: "Шаблон бизнес-процесса",
      hasParameters: false
    }, () => BX.Disk.showModalWithStatusAction({status: 'success'}));
  };

  const itemText = document.createElement('span');
  itemText.className = 'menu-popup-item-text';
  itemText.textContent = 'Шаблон бизнес-процесса';


  
  menuItem.appendChild(itemText);
  menuItems.appendChild(menuItem);
  menu.appendChild(menuItems);
  content.appendChild(menu);
  popup.appendChild(content);
  
  return popup;
};


const openMenu = () =>{

    const open = document.createElement('div');

}

// Добавляем элементы на страницу
const parent = document.querySelector('.ui-action-panel-wrapper');
if (parent) {
  parent.appendChild(createMenuItem());
  parent.appendChild(createPopupMenu());
} else {
  console.error('Родительский элемент не найден');
}