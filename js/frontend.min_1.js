jQuery(function(a){"use strict";window.gbt_gb_throttle=function(e,o,n){var d;return function(){var t=this,i=arguments,a=n&&!d;d||(d=setTimeout(function(){d=null,n||e.apply(t,i)},o)),a&&e.apply(t,i)}},window.gbt_category_card_animation=function(t,i){null==t&&(t=""),null==i&&(i=200),a(".wp-block-getbowtied-categories-grid").addClass("js_animated"),"reset"==t&&a(".wp-block-getbowtied-categories-grid.js_animated .gbt_18_category_grid_item").removeClass("visible animation_ready animated"),a(".wp-block-getbowtied-categories-grid.js_animated .gbt_18_category_grid_item:not(.visible)").each(function(){a(this).is(":visible")&&a(this).addClass("visible")}),a(".wp-block-getbowtied-categories-grid.js_animated .gbt_18_category_grid_item.visible:not(.animation_ready)").each(function(t){a(this).addClass("animation_ready"),a(this).delay(t*i).queue(function(t){a(this).addClass("animated"),t()})}),a(".wp-block-getbowtied-categories-grid.js_animated .gbt_18_category_grid_item.visible:first").prevAll().addClass("visible").addClass("animation_ready").addClass("animated")},a(".wp-block-getbowtied-categories-grid.js_animated").imagesLoaded(function(){gbt_category_card_animation()}),a(window).resize(function(){gbt_gb_throttle(gbt_category_card_animation(),300)}),a(window).scroll(function(){gbt_gb_throttle(gbt_category_card_animation(),300)})});