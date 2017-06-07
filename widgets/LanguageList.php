<?php namespace RainLab\Pages\Widgets;

use Illuminate\Support\Facades\Session;
use RainLab\Translate\Models\Locale;
use Str;
use Lang;
use Input;
use Request;
use Response;
use Backend\Classes\WidgetBase;

/**
 * Language list widget.
 *
 * @package rainlab\pages
 */
class LanguageList extends WidgetBase
{

    public function __construct($controller, $alias)
    {
        $this->alias = $alias;

        parent::__construct($controller, []);
        $this->bindToController();
    }

    /**
     * Renders the widget.
     * @return string
     */
    public function render()
    {
        return $this->makePartial('body', [
            'data' => $this->getData()
        ]);
    }

    //
    // Event handlers
    //

    public function onLanguageSelect()
    {
        $locale = post('languages-select');
        $this->changeInputLanguage($locale);
    }

    //
    // Methods for the internal use
    //

    protected function changeInputLanguage($locale)
    {
        Session::put('rainlab.translate.inputLocale', $locale);
    }

    protected function getData()
    {
        $languages = Locale::all();
        return $languages;
    }
}
