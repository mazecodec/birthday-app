import {$, browser} from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainnPage extends Page {
  /**
   * define selectors using getter methods
   */
  get title () {
    return $('[data-test="title"]');
  }

  get btnClear() {
    return $('button[data-testid="clear"]');
  }

  open () {
    return browser.url(`http://localhost:3000/`);
  }
}

export default new MainnPage();
