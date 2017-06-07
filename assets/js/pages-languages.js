/*
 * Handles the Pages languages page.
 */
+function ($) { "use strict";
    var Base = $.oc.foundation.base,
        BaseProto = Base.prototype

    var PagesLanguages = function () {
        Base.call(this)

        this.init()
    }

    PagesLanguages.prototype = Object.create(BaseProto)
    PagesLanguages.prototype.constructor = PagesLanguages

    PagesLanguages.prototype.init = function() {
        this.$sidePanel = $('#pages-side-panel')
        this.$languages = $('li[data-menu-item="languages"]')

        this.registerHandlers()
    }

    PagesLanguages.prototype.registerHandlers = function() {
        // $(document).on('open.oc.list', this.$sidePanel, this.proxy(this.onSidebarItemClick))

        $(document).on(
            'change',
            '#languages-select',
            this.proxy(this.updateIcon)
        )
    }

    //updates the language code displayed next to the icon in the sidebar
    PagesLanguages.prototype.updateIcon = function() {
        var nav = $('.nav-icon', this.$languages)
        var localeCode = $('#languages-select').val();

        if($('.nav-icon #language-code').length) {
            $('.nav-icon #language-code', this.$languages).text(localeCode.toUpperCase())
        }
        else {
            $('.nav-icon', this.$languages).append('<span id="language-code">' + localeCode.toUpperCase() + '</span>')
        }
    }

    $(document).ready(function(){
        $.oc.PagesLanguages = new PagesLanguages()
        $.oc.PagesLanguages.updateIcon()
    })

}(window.jQuery);