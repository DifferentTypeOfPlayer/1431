
(function() {
  
    BX.ready(function() {
  
        if (!window.location.pathname.match(/\/docs\//i)) return;

     
        var observer = new MutationObserver(function(mutations) {
            
            var menuContainer = document.querySelector('.disk-file-menu-popup');
            if (!menuContainer) return;

            
            var selectedItems = document.querySelectorAll('.bx-disk-grid-view-item-selected, .bx-disk-list-view-item-selected');
            if (selectedItems.length > 1) {
             
                var bpButton = document.querySelector('.ui-action-panel-item');
                
                if (bpButton) {
                    
                    bpButton.classList.remove('menu-popup-item-hide');
                    bpButton.style.display = 'block';
                    
                   
                    var parentItem = bpButton.closest('.menu-popup-item');
                    if (parentItem) {
                        parentItem.style.display = 'block';
                    }
                }
            }
        });

        
        observer.observe(document, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style']
        });

       
        document.addEventListener('click', function(e) {
            if (e.target.closest('.main-grid-row-checkbox main-grid-checkbox, .bx-disk-list-view-item-checkbox')) {
             
                observer.takeRecords();
            }
        });
    });
})();
