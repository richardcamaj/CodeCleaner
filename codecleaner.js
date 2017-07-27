/**
 * CodeCleaner - simple code cleaning from tags or attributes
 *
 * Copyright (c) Richard Camaj
 * Licensed under the MIT (file: LICENSE)
 * 
 * @name CodeCleaner
 * @author Richard Camaj <richard.camaj@gmail.com>
 * @copyright Richard Camaj <richard.camaj@gmail.com>
 * @license MIT
 * @version 1.0.3
 */
var CodeCleaner = function () {
    /**
     * @function CodeCleaner
     * main function - alternative to constructor
     */
    function CodeCleaner() {
    }

    /**
    * @function removeTags
    * @param {array} arr - array of tags to replace in content
    * @param {string} content
    */
    CodeCleaner.prototype.removeTags = function (arr, content) {
        for (var i = 0; i < arr.length; i++) {
            content = content.replace(this.tagRegBuilder(arr[i]), "");
            content = content.replace(this.tagCloseRegBuilder(arr[i]), "");
        }
        return content;
    };

    /**
    * @function removeAttribs
    * @param {array} arr - array of attributes to replace in content
    * @param {string} content
    */
    CodeCleaner.prototype.removeAttribs = function (arr, content) {
        for (var i = 0; i < arr.length; i++) {
            content = content.replace(this.attrRegBuilder(arr[i]), "");
        }
        return content;
    };

    /**
    * @function attrRegBuilder
    * @param {string} attrib - name of attribute to generate RegExp
    */
    CodeCleaner.prototype.attrRegBuilder = function (attrib) {
        return RegExp('(' + attrib + '=\"[^"]+\"|' + attrib + "=\'[^']+\')", "gmi");
    };

    /**
    * @function tagRegBuilder
    * @param {string} tagName - name of tag to generate RegExp
    */
    CodeCleaner.prototype.tagRegBuilder = function (tagName) {
        return RegExp("(\\<" + tagName + "[^\\>]{0,}\\>)", "gmi");
    };

    /**
    * @function tagCloseRegBuilder
    * @param {string} tagName - name of tag to generate RegExp (close tag)
    */
    CodeCleaner.prototype.tagCloseRegBuilder = function (tagName) {
        return RegExp("(\\<\\/" + tagName + "[^\\>]{0,}\\>)", "gmi");
    };

    return CodeCleaner;
}();
